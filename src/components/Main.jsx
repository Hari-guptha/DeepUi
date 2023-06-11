import { Box, Stack } from '@mui/material'
import React from 'react'
import '../assets/css/home.css'
import img1 from '../assets/img/product/phone.png'
import img2 from '../assets/img/product/lap.png'
import img3 from '../assets/img/product/pc.png'
import text1 from '../assets/img/text3.png'
import text2 from '../assets/img/text1.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarsIcon from '@mui/icons-material/Stars';

const Main = () => {
    return (
        <>
            <Box sx={{ display: { sm: "block", xs: "none" } }} >
                <img src={text2} alt="" style={{ margin: "10% 43%", position: "fixed", width: "10%" }} />
                <div style={{ display: "flex" }} >
                    <Stack direction={'column'} sx={{ margin: "0 0 3% 0 ", width: "90vw" }} >
                        <div id='box'>
                            <p id='titleh' >Welcome to DEEP UI</p>
                            <div id='card' style={{ width: "50%", height: "220px", marginRight: "17%" }} >
                                <div>
                                    <h5 id='ctext' >Nito G1</h5>
                                    <img id='cardimg' src={img1} alt="" />
                                </div>
                                <div id='cardright'>
                                    <StarsIcon className='star' sx={{ fontSize: "40px" }} />
                                    <ArrowForwardIcon className='arrow' sx={{ fontSize: "30px" }} />
                                </div>
                            </div>
                        </div>
                        <div id='box'>
                            <div id='card' style={{ marginLeft: "10%", width: "100vw", marginRight: "0%" }}>
                                <div>
                                    <h5 id='ctext' >Nito G1</h5>
                                    <img id='cardimg2' src={img2} alt="" />
                                </div>
                                <div id='cardright'>
                                    <StarsIcon className='star' sx={{ fontSize: "40px" }} />
                                    <ArrowForwardIcon className='arrow' sx={{ fontSize: "30px" }} />
                                </div>
                            </div>
                            <div id='card' style={{ width: "100vw", marginRight: "5%", marginLeft: "30px" }} >
                                <div>
                                    <h5 id='ctext' >Nito G1</h5>
                                    <img id='cardimg3' src={img3} alt="" />
                                </div>
                                <div id='cardright'>
                                    <StarsIcon className='star' sx={{ fontSize: "40px" }} />
                                    <ArrowForwardIcon className='arrow' sx={{ fontSize: "30px" }} />
                                </div>
                            </div>
                        </div>
                    </Stack>
                    <img id='text1' src={text1} alt="" />
                </div>
            </Box>
            <Box sx={{ display: { sm: "none", xs: "block" } }} >
                <div style={{ display: "flex", justifyContent: "right", position: "relative", marginTop: "10%" }}>
                    <p id='titleh' >Welcome to DEEP UI</p>
                    <img id='text1' src={text1} alt="" />
                </div>
                <h3 style={{ color: "white", textAlign: "center", marginTop: "20%" }} >Our Products</h3>
                <div id='card'>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }} >
                            <h5 id='ctext' >Nito G1</h5>
                            <StarsIcon className='pstar' />
                        </div>
                        <img id='pcardimg' src={img1} alt="" />
                    </div>
                    <div id='cardright'>
                        <ArrowForwardIcon className='arrow' sx={{ fontSize: "30px" }} />
                    </div>
                </div>
                <img src={text2} alt="" style={{position:"absolute", width: "50%" }} />
                <div id='card'>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }} >
                            <h5 id='ctext' >Nito pc</h5>
                            <StarsIcon className='pstar' />
                        </div>
                        <img id='cardimg2' src={img2} alt="" />
                    </div>
                    <div id='cardright'>
                        <ArrowForwardIcon className='arrow' sx={{ fontSize: "30px" }} />
                    </div>
                </div>
                <div id='card'>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }} >
                            <h5 id='ctext' >Nito G1</h5>
                            <StarsIcon className='pstar' />
                        </div>
                        <img id='cardimg2' src={img3} alt="" />
                    </div>
                    <div id='cardright'>
                        <ArrowForwardIcon className='arrow' sx={{ fontSize: "30px" }} />
                    </div>
                </div>
                <div id='space'></div>
            </Box>
        </>
    )
}

export default Main