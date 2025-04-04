import React, { useEffect, useRef, useState } from "react";
import Quagga from "quagga";

const BarcodeScanner = () => {
    const scannerRef = useRef(null);
    const [barcode, setBarcode] = useState("");

    useEffect(() => {
        Quagga.init(
            {
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: scannerRef.current,
                },
                decoder: {
                    readers: ["ean_reader", "code_128_reader"],
                },
            },
            (err) => {
                if (err) {
                    console.error("Error initializing Quagga:", err);
                    return;
                }
                Quagga.start();
            }
        );

        Quagga.onDetected((result) => {
            console.log("Barcode:", result.codeResult.code);
            setBarcode(result.codeResult.code);
        });

        return () => {
            Quagga.stop();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
            {/* Title */}
            <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                📷 Scan Your Food Item
            </h1>

            {/* Scanner Box */}
            <div className="relative w-80 h-52 bg-gray-800/50 border border-blue-500 rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <div
                    ref={scannerRef}
                    className="absolute inset-0 w-full h-full rounded-xl"
                ></div>
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
