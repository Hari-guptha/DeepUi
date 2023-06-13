import React from 'react'
import '../assets/css/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Box } from '@mui/material';
const Footer = (props) => {
    return (
        <>
            <Box sx={{ display: { sm: "block", xs: "none" } }}>
                <div id='footer' >
                    {props.struct === 'home' ? (
                        <a href="https://646d23fe730f2302f0369605--poetic-salmiakki-7984f5.netlify.app/">
                            <div id='part1'>
                            <p id='ftitle'>Hire Me</p>
                            <img id='fimg' src={props.image} alt="icon" />
                        </div>
                        </a>
                    ) : props.struct === 'Product' ? (
                        <div id='part12'>
                            <img id='fimg2' src={props.image} alt="icon" />
                        </div>

                    ) : null}
                    {props.struct === 'home' ? (
                        <div id='part2'>
                            <h3 id='ftitle' style={{ textAlign: "center" }} >Developed by Titan</h3>
                        </div>
                    ) : props.struct === 'Product' ? (
                        <div id='part22'>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. 8 GB RAM | 128 GB ROM</h3>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. 16.71 cm (6.58 inch) Full HD+ Display</h3>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. 50MP + 2MP | 8MP Front Camera</h3>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. 5000 mAh Battery</h3>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. Dimensity 6020 Processor</h3>
                        </div>

                    ) : null}

                    {props.struct === 'Product' ? (
                        <h3 style={{ color: "white", margin: "1% 10%" }}>3D View <ViewInArIcon sx={{ fontSize: "80px" }}></ViewInArIcon> </h3>

                    ) : null}

                    <div id='part3'>
                        <h4>Follow us on</h4>
                        <div id='fi' style={{ display: "flex", gap: "10px" }} >
                            <FacebookIcon />
                            <GitHubIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                        </div>
                    </div>
                </div>
            </Box>
            <Box sx={{ display: { sm: "none", xs: "block" } }}>
                <div id='part12'>
                    <img id='fimg2' src={props.image} alt="icon" />
                </div>
                <div id='part22'>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. 8 GB RAM | 128 GB ROM</h3>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. 16.71 cm (6.58 inch) Full HD+ Display</h3>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. 50MP + 2MP | 8MP Front Camera</h3>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. 5000 mAh Battery</h3>
                            <h3 id='ftitle1' style={{ textAlign: "left" }} >. Dimensity 6020 Processor</h3>
                        </div>
                        <div id='part2'>
                            <h3 id='ftitle' style={{ textAlign: "center" }} >Developed by Titan</h3>
                        </div>
                        <div id='part3'>
                        <h4>Follow us on</h4>
                        <div id='fi' style={{ display: "flex", gap: "10px" }} >
                            <FacebookIcon />
                            <GitHubIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                        </div>
                    </div>
            </Box>
        </>
    )
}

export default Footer