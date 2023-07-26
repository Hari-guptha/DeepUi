import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { status } from '../features/color';

const socket = io('http://localhost:5000'); // Replace with your Flask server URL

function Soc() {
  const constraints = { video: true, audio: false };
  const dispatch = useDispatch();
  const [emotionLabel, setEmotionLabel] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Reference to the video element
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to capture frames from the webcam and send to the server
    const sendWebcamFeed = () => {
      if (!isSending && videoRef.current) {
        setIsSending(true);

        // Get the video element and its canvas
        const videoElement = videoRef.current;
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        const dataURL = canvas.toDataURL('image/jpeg'); // Convert canvas data to a data URL
        socket.emit('video_feed_from_client', dataURL); // Send data URL (video feed) to the server

        setIsSending(false);
      }
    };

    const intervalId = setInterval(sendWebcamFeed, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, [isSending]);

  // Listen for server response (label) from the Flask server
  useEffect(() => {
    socket.on('emotion', (data) => {
      console.log(data);
      setEmotionLabel(data);
      dispatch(status({ emotion: data }));
    });
  }, [dispatch]);

  // Handle webcam stream
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          // Update the video source once the stream is available
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing the camera:', error);
        });
    } else {
      console.error('getUserMedia API is not supported.');
    }
  }, [constraints]);

  // Apply CSS to hide the video element
  const videoStyle = {
    display: 'none',
  };

  return (
    <div>
      {/* Use the video element to display the webcam feed */}
      <video ref={videoRef} autoPlay playsInline style={videoStyle} />
    </div>
  );
}

export default Soc;
