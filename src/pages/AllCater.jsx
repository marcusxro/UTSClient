import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { CategoryOBJ } from '../comp/Category'
import { useNavigate } from 'react-router-dom'

const AllCater = () => {
    const nav = useNavigate()
    return (
        <div className='AllCater closer'>
            <Header />

            <div className="headerImage">
                <div className="text">
                    CATEGORIES
                </div>
            </div>
            <div className="AllCaterContent Homepage">
                {
                    CategoryOBJ.map((item) => (
                        <div className="ItemCategory">
                            <div className="ItemDesc">
                                <div className="title">
                                    {item?.title}
                                </div>
                                <div className="desc">
                                    {item?.desc}
                                </div>
                                <div className="SubCater">
                                    {
                                        item?.subCater?.map((sub, index) => (
                                            <>
                                                <div className="item" key={index} onClick={() => { nav(sub.link); window.scrollTo(0, 0) }}>{index + 1}. {sub.title}</div>
                                                .
                                            </>
                                        ))
                                    }

                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="naviBack">
                <button onClick={() => { nav('/Home'); window.scrollTo(0, 0) }}>
                    HOME <ion-icon name="home-outline"></ion-icon>
                </button>
            </div>

            <Footer />
        </div>
    )
}

export default AllCater
