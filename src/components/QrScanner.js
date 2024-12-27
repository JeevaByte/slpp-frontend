import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

const QrScanner = ({ bioIdList, onScan }) => {
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState("");
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const videoRef = useRef(null);
  const codeReaderRef = useRef(null); // Ref to hold the codeReader instance

  useEffect(() => {
    const initializeScanner = async () => {
      const codeReader = new BrowserMultiFormatReader();
      codeReaderRef.current = codeReader; // Store the instance for cleanup

      try {
        // Get all video input devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevicesList = devices.filter((device) => device.kind === "videoinput");

        if (videoDevicesList.length === 0) {
          setError("No camera devices found.");
          return;
        }

        setVideoDevices(videoDevicesList);
        setSelectedDeviceId(videoDevicesList[0].deviceId); // Default to first camera

        // Start decoding from the selected video device
        await codeReader.decodeFromVideoDevice(
          videoDevicesList[0].deviceId,
          videoRef.current,
          (result, err) => {
            if (result) {
              const qrData = result.getText();
              setScannedData(qrData);

              // Check if the scanned QR matches any Bio ID
              const matchedBioId = bioIdList.find(
                (bioId) => bioId.trim().toLowerCase() === qrData.trim().toLowerCase()
              );

              if (matchedBioId) {
                onScan(matchedBioId);
                setScannedData(`QR matched with Bio ID: ${matchedBioId}`);
              } else {
                setScannedData("No matching Bio ID found for this QR code.");
              }

              // Stop the video stream after scanning
              if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                stream.getTracks().forEach((track) => track.stop()); // Stop the video stream
              }
            }
            if (err && !(err instanceof DOMException)) {
              console.error("QR code scanning error:", err);
            }
          }
        );
      } catch (err) {
        setError("Failed to access the camera: " + err.message);
      }
    };

    initializeScanner();

    return () => {
      // Cleanup on unmount
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        stream.getTracks().forEach((track) => track.stop()); // Stop the video stream
      }
    };
  }, [bioIdList, onScan]);

  const handleDeviceChange = async (e) => {
    const deviceId = e.target.value;
    setSelectedDeviceId(deviceId);

    // Reset and restart the scanner with the selected device
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop()); // Stop the old stream
    }

    // Initialize a new code reader instance and start scanning
    const codeReader = new BrowserMultiFormatReader();
    codeReaderRef.current = codeReader;

    try {
      await codeReader.decodeFromVideoDevice(
        deviceId,
        videoRef.current,
        (result, err) => {
          if (result) {
            const qrData = result.getText();
            setScannedData(qrData);

            const matchedBioId = bioIdList.find(
              (bioId) => bioId.trim().toLowerCase() === qrData.trim().toLowerCase()
            );

            if (matchedBioId) {
              onScan(matchedBioId);
              setScannedData(`QR matched with Bio ID: ${matchedBioId}`);
            } else {
              setScannedData("No matching Bio ID found for this QR code.");
            }

            // Stop the video stream after scanning
            if (videoRef.current && videoRef.current.srcObject) {
              const stream = videoRef.current.srcObject;
              stream.getTracks().forEach((track) => track.stop()); // Stop the video stream
            }
          }
          if (err && !(err instanceof DOMException)) {
            console.error("QR code scanning error:", err);
          }
        }
      );
    } catch (err) {
      setError("Failed to switch camera: " + err.message);
    }
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      {videoDevices.length > 1 && (
        <select onChange={handleDeviceChange} value={selectedDeviceId}>
          {videoDevices.map((device, index) => (
            <option key={index} value={device.deviceId}>
              {device.label || `Camera ${index + 1}`}
            </option>
          ))}
        </select>
      )}
      <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
        <video ref={videoRef} style={{ width: "100%" }} />
      </div>
      {scannedData && (
        <p>
          <strong>Scanned QR Data:</strong> {scannedData}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default QrScanner;
