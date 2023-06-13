import React from 'react'
import '../assets/css/phone.css'
import MemoryIcon from '@mui/icons-material/Memory';
import CameraIcon from '@mui/icons-material/Camera';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
const Main2 = (props) => {
    return (
        <div id='phone'>
            <div id='data'>
                <p id='ptitle1' >{props.title1}</p>
                <p id='ptitle2' >{props.title2}</p>
                <p id='ptitle3' >{props.title3}</p>
                <div style={{display:'flex',gap:{sm:"30px",xs:"5px"},marginTop:"20px"}}>
                    <MemoryIcon className='icons' /><CameraIcon className='icons'/><AppShortcutIcon className='icons'/>
                </div>
                <p id='pq' >Design is not just what it looks like and feels like. Design is how it works</p>
            </div>
            <div id='img' >
                <img id='phoneimg' style={{width:props.swidth,left:props.left,marginTop:props.mtop}} src={props.image} alt="" />
            </div>
        </div>
    )
}

export default Main2