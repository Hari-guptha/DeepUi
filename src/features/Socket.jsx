import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Webcam from 'react-webcam';
import { useDispatch } from 'react-redux';
import { status } from '../features/color';

const socket = io('http://localhost:5000'); // Replace with your Flask server URL

function Soc() {
    const dispatch = useDispatch();
    const [emotionLabel, setEmotionLabel] = useState('');
    const [isSending, setIsSending] = useState(false); // State to track if a feed is currently being sent

    // Create a reference to the Webcam component
    const webcamRef = React.useRef(null);

    // Dispatch the initial emotion label value to the Redux store when the component mounts
    useEffect(() => {
        dispatch(status({ emotion: emotionLabel }));
    }, []);

    useEffect(() => {
        // Function to capture frames from the webcam and send to the server
        const sendWebcamFeed = () => {
            if (!isSending) {
                setIsSending(true); // Set the sending state to true to avoid sending multiple feeds simultaneously

                const canvas = webcamRef.current.getCanvas(); // Get the canvas element from the Webcam component
                if (canvas) {
                    const dataURL = canvas.toDataURL('image/jpeg'); // Convert canvas data to a data URL
                    socket.emit('video_feed_from_client', dataURL); // Send data URL (video feed) to the server
                }

                setIsSending(false); // Reset the sending state to false after sending the feed
            }
        };

        // Set up interval to capture and send frames at regular intervals (e.g., every 500ms)
        const intervalId = setInterval(sendWebcamFeed, 500);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, [isSending]);

    // Listen for server response (label) from the Flask server
    socket.on('emotion', (data) => {
        console.log(data);
        setEmotionLabel(data); // Set the received label to update the state
        dispatch(status({ emotion: data })); // Dispatch the updated emotion label to the Redux store
    });

    return (
        <div>
            <Webcam style={{ width: '50px',position:"absolute",marginLeft:"1000px" }}  ref={webcamRef} />
        </div>
    );
}

export default Soc;
