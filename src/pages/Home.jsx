import React from 'react'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../assets/css/footer.css'
import hire from '../assets/img/text4.png'

const Home = () => {
    return (
        <>
        <Main />
        <Footer image={hire} struct={'home'} />
        </>
    )
}

export default Home