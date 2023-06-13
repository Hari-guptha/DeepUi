import React from 'react'
import Main2 from './Main2'
import Footer from './Footer'
import pc from '../assets/img/product/pc.png'
import fpc from '../assets/img/footer/pc.png'

const Pc = () => {
    return (
        <>
        <Main2 image={pc} title1={'Gito'} title2={'RS 50,000'} title3={'Features'} swidth={'40%'} left={"50%"} mtop={"5%"} class={'phonewidth'} />
        <Footer image={fpc} struct={'Product'} />
        </>
    )
}

export default Pc