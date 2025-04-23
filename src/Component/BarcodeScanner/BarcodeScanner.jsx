import React, { useEffect, useRef, useState } from "react"
 import { BrowserMultiFormatReader } from "@zxing/library"
 
 const BarcodeScanner = () => {
     const scannerRef = useRef(null);
     const [barcode, setBarcode] = useState("");
 
     useEffect(() => {
         const codeReader = new BrowserMultiFormatReader();
 
         if (scannerRef.current) {
             const maxAttempts = 50;
             let errorLogged = false; // Add this to avoid overlogging.
 
             codeReader.decodeFromVideoDevice(undefined, scannerRef.current, (result, err) => {
                 if (result) {
                     console.log("Scanned Code:", result.text);
                     setBarcode(result.text);
                     codeReader.reset(); // stop after success
                     errorLogged = false; // Reset the errorLogged flag.
                 }
 
                 if (err && err.name !== 'NotFoundException') {
                   // Only log if error hasn't already been logged.
                   if (!errorLogged) {
                       console.error("Scan Error:", err.message);
                       errorLogged = true;
                     }
                 }
 
                 if (err && ++attempts >= maxAttempts) {
                     codeReader.reset();
                     setBarcode("Couldn't detect barcode. Please try again.");
                     errorLogged = false; // Reset the errorLogged flag.
                 }
             });
 
         return () => {
             codeReader.reset(); // Cleanup on unmount
         };
     }
     }, []);
 
     return (
         <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-900 p-4">
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
             <p>{barcode ? `Scanned Code: ${barcode}` : "Waiting for barcode..."}</p>
 
         </div>
     );
 };
 
 export default BarcodeScanner;