import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'

const UnderDev = () => {
    const nav = useNavigate()
    return (
        <div className='UnderDev closer'>
            <Header />

            <div className="Homepage">
                <div className="text">
                    Under Development, <br/>
                     <span>Stay Tuned.</span>
                </div>
                <div className="desc">
                    This website route is currently undergoing development.
                    Please bear with us as we work diligently to update the content. Thank you for your patience.
                </div>
                <div className="navs">
                    <span onClick={() => {nav('/')}}>Home</span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UnderDev
