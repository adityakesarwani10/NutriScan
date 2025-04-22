import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const BarcodeScanner = () => {
    const scannerRef = useRef(null);
    const [barcode, setBarcode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    let [attempts, setAttempts] = useState(0);
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        const codeReader = new BrowserMultiFormatReader();

        if (scannerRef.current && isScanning) {
            const maxAttempts = 50;
            let errorLogged = false;

            codeReader.decodeFromVideoDevice(undefined, scannerRef.current, (result, err) => {
                if (result) {
                    console.log("Scanned Code:", result.text);
                    setBarcode(result.text);
                    codeReader.reset();
                    setAttempts(0);
                    errorLogged = false;
                }

                if (err) {
                    if (err.name !== 'NotFoundException') {
                        if (!errorLogged) {
                            console.error("Scan Error:", err.message);
                            setErrorMessage(err.message);
                            errorLogged = true;
                        }
                    }

                    if (++attempts >= maxAttempts) {
                        codeReader.reset();
                        setBarcode("Couldn't detect barcode. Please try again.");
                        setErrorMessage("");
                        errorLogged = false;
                    }
                }
            });
        }

        return () => {
            codeReader.reset();
        };
    }, [attempts, isScanning]);

    const handleStartScan = () => {
        setIsScanning(true);
        setBarcode(""); // Clear previous barcode
        setErrorMessage(""); // Clear previous error message
    };

    const handleStopScan = () => {
        setIsScanning(false);
    };

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageUrl = e.target.result;
            codeReader.decodeFromImageUrl(imageUrl)
                .then((result) => {
                    console.log("Uploaded Code:", result.text);
                    setBarcode(result.text);
                })
                .catch((err) => {
                    console.error("Upload Error:", err.message);
                    setErrorMessage("Failed to decode barcode from uploaded image.");
                });
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-900 p-4">
            <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                📷 Scan Your Food Item (QR & Barcode)
            </h1>

            <div className="relative w-80 h-52 bg-gray-800/50 border border-blue-500 rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <video ref={scannerRef} className="absolute inset-0 w-full h-full rounded-xl"></video>
            </div>

            <div className="mt-4">
                <button onClick={handleStartScan} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Start Scan
                </button>
                <button onClick={handleStopScan} className="bg-red-500 text-white px-4 py-2 rounded">
                    Stop Scan
                </button>
            </div>

            <input type="file" accept="image/*" onChange={handleUpload} className="mt-4" />

            <p className="mt-4 text-lg text-white">
                <span className="font-semibold">Scanned Code:</span>{" "}
                <span className={`font-mono ${barcode ? "text-green-400" : "text-gray-400"}`}>
                    {barcode || "Waiting..."}
                </span>
            </p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
    );
};

export default BarcodeScanner;