import React from 'react'
import '../assets/css/phone.css'
import MemoryIcon from '@mui/icons-material/Memory';
import CameraIcon from '@mui/icons-material/Camera';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
const Main2 = (props) => {
    return (
        <div id='phone'>
            <div id='data'>
                <p className='Navitem'  id='ptitle1' >{props.title1}</p>
                <p className='Navitem'  id='ptitle2'>{props.title2}</p>
                <p className='Navitem'  id='ptitle3'>{props.title3}</p>
                <div  style={{display:'flex',gap:{sm:"30px",xs:"5px"},marginTop:"20px"}}>
                    <MemoryIcon className='Navitem' id='icons' /><CameraIcon className='Navitem' id='icons'/><AppShortcutIcon className='Navitem' id='icons'/>
                </div>
                <p id='pq' className='Navitem' >Design is not just what it looks like and feels like. Design is how it works</p>
            </div>
            <div id='img' >
                <img id='phoneimg' style={{width:props.swidth,left:props.left,marginTop:props.mtop}} src={props.image} alt="" />
            </div>
        </div>
    )
}

export default Main2