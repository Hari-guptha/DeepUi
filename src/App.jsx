import { Route, Routes } from 'react-router-dom';
import './assets/css/Main.css';
import Navbar from './components/Navbar';
import Test from './components/Test';
import Home from './pages/Home';
import Phone from './pages/Phone';
import Lap from './pages/Lap';
import Pc from './pages/Pc';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const emotion = useSelector((state) => state.color.value.status.emotion);
  const color = useSelector((state) => state.color.value);

  useEffect(() => {
    if (emotion === 'Neutral') {
      document.body.style.background = color.Neutral.background1;
      document.body.style.background = color.Neutral.background2;
      const titleElement = document.getElementById('titleh');
      if (titleElement) {
        titleElement.style.color = color.Neutral.text1;
      }
      const titleElements = document.getElementsByClassName('Navitem');
      if (titleElements) {
        for (const element of titleElements) {
          element.style.color = color.Neutral.text1;
        }
      }
    } else if (emotion === 'Angry') {
      document.body.style.background = color.Angry.background1;
      document.body.style.background = color.Angry.background2;
      const titleElement = document.getElementById('titleh');
      if (titleElement) {
        titleElement.style.color = color.Angry.text1;
      }
      const titleElements = document.getElementsByClassName('Navitem');
      if (titleElements) {
        for (const element of titleElements) {
          element.style.color = color.Angry.text1;
        }
      }
    } else if (emotion === 'Disgust') {
      document.body.style.background = color.Disgust.background1;
      document.body.style.background = color.Disgust.background2;
      const titleElement = document.getElementById('titleh');
      if (titleElement) {
        titleElement.style.color = color.Disgust.text1;
      }
      const titleElements = document.getElementsByClassName('Navitem');
      if (titleElements) {
        for (const element of titleElements) {
          element.style.color = color.Disgust.text1;
        }
      }
    } else if (emotion === 'Fear') {
      document.body.style.background = color.Fear.background1;
      document.body.style.background = color.Fear.background2;
      const titleElement = document.getElementById('titleh');
      if (titleElement) {
        titleElement.style.color = color.Fear.text1;
      }
      const titleElements = document.getElementsByClassName('Navitem');
      if (titleElements) {
        for (const element of titleElements) {
          element.style.color = color.Fear.text1;
        }
      }
    } else if (emotion === 'Happy') {
      document.body.style.background = color.Happy.background1;
      document.body.style.background = color.Happy.background2;
      const titleElement = document.getElementById('titleh');
      if (titleElement) {
        titleElement.style.color = color.Happy.text1;
      }
      const titleElements = document.getElementsByClassName('Navitem');
      if (titleElements) {
        for (const element of titleElements) {
          element.style.color = color.Happy.text1;
        }
      }
    } else if (emotion === 'Sad') {
      document.body.style.background = color.Sad.background1;
      document.body.style.background = color.Sad.background2;
      const titleElement = document.getElementById('titleh');
      if (titleElement) {
        titleElement.style.color = color.Sad.text1;
      }
      const titleElements = document.getElementsByClassName('Navitem');
      if (titleElements) {
        for (const element of titleElements) {
          element.style.color = color.Sad.text1;
        }
      }
    } else if (emotion === 'Surprise') {
      document.body.style.background = color.Surprise.background1;
      document.body.style.background = color.Surprise.background2;
      const titleElement = document.getElementById('titleh');
      if (titleElement) {
        titleElement.style.color = color.Surprise.text1;
      }
      const titleElements = document.getElementsByClassName('Navitem');
      if (titleElements) {
        for (const element of titleElements) {
          element.style.color = color.Surprise.text1;
        }
      }
    }
  }, [emotion]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/lap" element={<Lap />} />
        <Route path="/pc" element={<Pc />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
