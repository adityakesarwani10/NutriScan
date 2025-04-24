"use client";

import { useState, useRef, useEffect } from "react";
import { Camera, Upload, Scan, X, ArrowLeft, Zap } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDHPtPtr4j0lUcnxdMbKC8awZlEVKR9i_M");

export default function GeminiCameraInput({ onClose }) {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  const captureImage = () => {
    if (!canvasRef.current || !videoRef.current) return;
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const dataURL = canvasRef.current.toDataURL("image/png");
    setImage(dataURL);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGeminiRequest = async () => {
    if (!image) return;
    setLoading(true);
    setResponse("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const result = await model.generateContent([
        "Describe the food item in this image and mention its potential nutritional content.",
        {
          inlineData: {
            mimeType: "image/png",
            data: image.split(",")[1],
          },
        },
      ]);

      const res = await result.response;
      setResponse(res.text());
    } catch (err) {
      console.error("Gemini request error:", err);
      setResponse("Failed to get response from Gemini.");
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    setStream(null);
    setImage(null);
    setResponse("");
    setLoading(false);
  };

  return (
    <div className="p-4 text-white bg-zinc-900 min-h-screen flex flex-col items-center mt-20 pt-20 gap-4">
      <div className="flex gap-2">
        <button onClick={onClose}><ArrowLeft /></button>
        <h2 className="text-xl font-bold">Gemini Image Scanner</h2>
        <button onClick={resetAll}><X /></button>
      </div>

      {!image && (
        <>
          <div className="flex gap-4">
            <button onClick={startCamera}><Camera /> Start Camera</button>
            <label className="cursor-pointer">
              <Upload /> Upload Image
              <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            </label>
          </div>

          {stream && (
            <div>
              <video ref={videoRef} autoPlay className="w-80 rounded shadow" />
              <button onClick={captureImage}><Scan /> Capture</button>
            </div>
          )}
        </>
      )}

      <canvas ref={canvasRef} width={400} height={300} className="hidden" />

      {image && (
        <div className="flex flex-col items-center gap-2">
          <img src={image} alt="Captured" className="rounded shadow w-80" />
          <button onClick={handleGeminiRequest} disabled={loading}>
            {loading ? "Processing..." : <><Zap /> Analyze with Gemini</>}
          </button>
        </div>
      )}

      {response && (
        <div className="bg-zinc-800 p-4 rounded max-w-xl mt-4">
          <h3 className="font-bold mb-2">Gemini Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
