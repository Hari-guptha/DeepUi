// Import the required modules and components
import { Box, Drawer, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Soc from '../features/Socket';
import '../assets/css/Navbar.css';
import '../assets/css/Button.css';

const Navbar = () => {
  const [fun, setfun] = useState(false);
  const [face, setface] = useState(true);
  const [isCameraOn, setCameraOn] = useState(true); // Track if the camera is on or off

  // Function to toggle the camera on/off
  const toggleCamera = () => {
    setCameraOn((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: { sm: '30px 10%', xs: '30px 30px' } }}>
        <Box>
          <Link to="/">
            <img id="logo" src={Logo} alt="" />
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '25px' }}>
          <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
            <Box sx={{ display: 'flex', gap: '25px', marginTop: '4%' }}>
              <Link to="/" className="Navitem">
                Home
              </Link>
              <Link to="/about" className="Navitem">
                About Us
              </Link>
              <Link to="/contact" className="Navitem">
                Contact Us
              </Link>
            </Box>
          </Box>
          <Box>
            <MenuIcon sx={{ display: { sm: 'none', xs: 'block' } }} id="menuicon" onClick={(e) => setfun(true)} />
            <Box sx={{ width: '80px', display: { sm: 'block', xs: 'none' } }}>
              <div className={`glowing-btn ${isCameraOn ? 'glowing' : ''}`} onClick={toggleCamera}>
                <FaceRetouchingNaturalIcon sx={{ paddingTop: '5px', fontSize: '40px' }} />
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Drawer anchor={'left'} open={fun} onClose={(e) => setfun(false)}>
        <CloseIcon id="closeicon" onClick={(e) => setfun(false)} />
        <Stack direction={'column'} sx={{ marginTop: '30%', padding: '10% 30%' }}>
          <Link to="/">
            <h3 id="navitem2" onClick={(e) => setfun(false)}>
              Home
            </h3>
          </Link>
          <Link to="/about">
            <h3 id="navitem2" onClick={(e) => setfun(false)}>
              About Me
            </h3>
          </Link>
          <Link to="/contact">
            <h3 id="navitem2" onClick={(e) => setfun(false)}>
              Contact Me
            </h3>
          </Link>
          <Box sx={{ width: '80px', margin: '60% 10%' }}>
            <div className="glowing-btn" onClick={toggleCamera}>
              <FaceRetouchingNaturalIcon sx={{ paddingTop: '5px', fontSize: '40px' }} />
            </div>
          </Box>
        </Stack>
      </Drawer>
      {/* Soc component will be rendered conditionally based on the 'face' state */}
      {face && <Soc isCameraOn={isCameraOn} />}
    </>
  );
};

export default Navbar;
