import React from 'react'
import Header from '../comp/Header'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const nav = useNavigate()

    return (
        <div className='NotFound closer'>
            <Header />
            <div className="NotFoundContent">
                <div className="headerText">
                404 ERROR
                </div>
                <div className="notfoundText">
                    This page doesn't exist, <span onClick={() => {nav(-1)}}>Go Back.</span>
                </div>
            </div>
        </div>
    )
}

export default NotFound
