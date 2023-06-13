import React from 'react'
import Main2 from '../components/Main2'
import Footer from '../components/Footer'
import fphone from '../assets/img/footer/phone.png'
import phone from '../assets/img/product/phone.png'

const Phone = () => {
    return (
        <>
        <Main2 image={phone} title1={'Nito G1'} title2={'RS 90,000'} title3={'Features'}  />
        <Footer image={fphone} struct={'Product'} />
        </>
    )
}

export default Phone