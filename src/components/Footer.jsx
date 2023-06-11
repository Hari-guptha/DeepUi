import React from 'react'
import '../assets/css/footer.css'
import img1 from '../assets/img/text4.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    return (
        <>

                <div id='footer' >
                    <div id='part1'>
                        <p id='ftitle' >Hire Me</p>
                        <img id='fimg' src={img1} alt="" />
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
                </div>

        </>
    )
}

export default Footer