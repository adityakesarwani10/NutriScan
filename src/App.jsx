import React, { useEffect, useRef, useState } from "react"
import { BrowserMultiFormatReader } from "@zxing/library"

const BarcodeScanner = () => {
    const scannerRef = useRef(null);
    const [barcode, setBarcode] = useState("");

    useEffect(() => {
        const codeReader = new BrowserMultiFormatReader();

        if (scannerRef.current) {
            codeReader
                .decodeFromVideoDevice(undefined, scannerRef.current, (result, err) => {
                    if (result) {
                        console.log("Scanned Code:", result.text);
                        setBarcode(result.text);
                    }
                    if (err) {
                        console.error("Scan Error:", err);
                    }
                })
                .catch((err) => console.error("Error initializing scanner:", err));
        }

        return () => {
            codeReader.reset(); // Cleanup on unmount
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
            {/* Title */}
            <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                📷 Scan Your Food Item (QR & Barcode)
            </h1>

            {/* Scanner Box */}
            <div className="relative w-80 h-52 bg-gray-800/50 border border-blue-500 rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <video ref={scannerRef} className="absolute inset-0 w-full h-full rounded-xl"></video>
            </div>

            {/* Scanned Code */}
            <p className="mt-4 text-lg text-white">
                <span className="font-semibold">Scanned Code:</span>{" "}
                <span className={`font-mono ${barcode ? "text-green-400" : "text-gray-400"}`}>
                    {barcode || "Waiting..."}
                </span>
            </p>
        </div>
    );
};

export default BarcodeScanner;
