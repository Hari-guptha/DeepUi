import { Box, Drawer, Stack } from '@mui/material'
import React from 'react'
import Logo from '../assets/img/logo.png'
import '../assets/css/Navbar.css'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import '../assets/css/Button.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'


const Navbar = () => {
    const [fun, setfun] = useState(false)
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: "30px 70px" }}  >
                <Box>
                    <img id='logo' src={Logo} alt="" />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "25px" }} >
                    <Box sx={{ display: { sm: "block", xs: "none" } }}>
                        <Box sx={{ display: "flex", gap: "25px", marginTop: "4%" }}>
                            <a href="" id='Navitem' >Home</a>
                            <a href="" id='Navitem' >About Us</a>
                            <a href="" id='Navitem' >Contact Us</a>
                        </Box>
                    </Box>
                    <Box>
                        <MenuIcon sx={{ display: { sm: "none", xs: "block" } }} id="menuicon" onClick={e => (setfun(true))} />
                        <Box sx={{width:"80px",display: { sm: "block", xs: "none" }}}>
                    <div className='glowing-btn' ><FaceRetouchingNaturalIcon sx={{paddingTop: "5px", fontSize: "30px",marginLeft:"5%" }} /></div>
                    </Box> 
                    </Box>
                </Box>
            </Box>
            <Drawer anchor={'left'} 
                open={fun}
                onClose={e => (setfun(false))}>
                <CloseIcon id="closeicon" onClick={e => (setfun(false))} />
                <Stack direction={'column'} sx={{ marginTop: "30%",padding:"10% 30%"  }} >
                    <a href="#"><h3 id='navitem2'>Home</h3></a>
                    <a href="#"><h3 id='navitem2'>About Me</h3></a>
                    <a href="#"><h3 id='navitem2'>Contact Me</h3></a>
                    <Box sx={{width:"80px",margin:"60% 10%"}}>
                    <div className='glowing-btn' ><FaceRetouchingNaturalIcon sx={{paddingTop: "5px", fontSize: "40px" }} /></div>
                    </Box>
                </Stack>
            </Drawer>
        </>
    )
}

export default Navbar