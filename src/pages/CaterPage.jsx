import React, { useEffect, useState } from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { CategoryOBJ } from '../comp/Category'


const CaterPage = () => {
    const { item } = useParams()



    const [data, setData] = useState([])


    useEffect(() => {
        const filteredObj = CategoryOBJ.filter((itm) => itm.title.toLowerCase() === item.toLowerCase())
        console.log(filteredObj)
        setData(filteredObj)

    }, [item, CategoryOBJ])




    const nav = useNavigate()
    return (
        <div className='CaterPage closer'>
            <Header />

            <div className="pageTitle">
                <div className="absoText">
                    {item.toUpperCase()}
                </div>
            </div>
            <div className="CaterPageContent">
                <div className="results">
                    Results for "<span>{item}</span>"
                </div>
                {data.map((itm) => (
                    itm.subCater.map((subItem) => (
                        <div className="caterIttem" key={subItem.title}>
                            <div className='TitleDiv'>
                            <div className="subCaterTitle">
                                {subItem.title}
                            </div>
                            <div className='textDesc'>
                                {subItem?.SemiCatP}
                            </div>
                            </div>
                            <div className="subCon">
                                {subItem.content ? subItem.content.map((itmz) => (
                                    <div className='subContent' key={itmz.title}>
                                        <div className="caterItemTitle">
                                            {itmz.title}
                                        </div>
                                        <button onClick={() => { nav(itmz.link); window.scrollTo(0,0) }}>NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon></button>
                                    </div>
                                )) : (
                                    <button onClick={() => { nav(subItem.link); window.scrollTo(0,0) }}>NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon></button>
                                )}
                            </div>
                        </div>
                    ))
                ))}
            </div>


            <Footer />
        </div>
    )
}

export default CaterPage
