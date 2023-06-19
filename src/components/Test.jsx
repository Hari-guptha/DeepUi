import React, { useEffect, useState } from 'react';

function Test() {
    const [emotionLabel, setEmotionLabel] = useState('');
    useEffect(() => {
        const getEmotionLabel = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/get_emotion');
                const data = await response.json();
                setEmotionLabel(data.emotion_label);
            } catch (error) {
                console.log(error);
            }
        };
        const interval = setInterval(getEmotionLabel, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ color: 'white' }}>
            <h1>Emotion Detection</h1>
            <h2>Current Emotion: {emotionLabel}</h2>
        </div>
    );
}

export default Test;
