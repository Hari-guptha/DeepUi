import React from 'react'
import Main2 from '../components/Main2'
import Footer from '../components/Footer'
import lap from '../assets/img/product/lap.png'
import flap from '../assets/img/footer/laptop.png'

const Lap = () => {
    return (
        <>
        <Main2 image={lap} title1={'Vito'} title2={'RS 50,000'} title3={'Features'} swidth={'40vw'} left={"55%"} mtop={"1%"}  class={'phonewidth'} />
        <Footer image={flap} struct={'Product'} />
        </>
    )
}

export default Lap