import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import samplePic from '../images/IMG_6579.png'

const AllCater = () => {
    return (
        <div className='AllCater'>
            <Header />
            <div className="headerImage">

                </div>

                <div className="caterText">
                <div className="text">
                Categories
                </div>
                </div>
            <div className="AllCaterContent Homepage">


                <div className="ItemCategory">
                    <div className="img">
                        <img src={samplePic} alt="" />
                    </div>
                    <div className="ItemDesc">
                        <div className="title">
                            Advisories
                        </div>
                        <div className="SubCater">
                            <div className="item">New Campaigns</div>
                            <div className="item">Promos</div>
                            <div className="item">New Guidelines</div>
                        </div>
                    </div>
                </div>

                <div className="ItemCategory">
                    <div className="img">
                        <img src={samplePic} alt="" />
                    </div>
                    <div className="ItemDesc">
                        <div className="title">
                            Campaign Guidelines
                        </div>
                        <div className="SubCater">
                            <div className="item">Filtering of Leads</div>
                            <div className="item">Call Flow and Spiels</div>
                            <div className="item">Documentation</div>
                            <div className="item">Exception Handling</div>
                        </div>
                    </div>

                </div>

                <div className="ItemCategory">
                    <div className="img">
                        <img src={samplePic} alt="" />
                    </div>
                    <div className="ItemDesc">
                        <div className="title">
                            Training
                        </div>
                        <div className="SubCater">
                            <div className="item">New Campaigns</div>
                            <div className="item">Promos</div>
                            <div className="item">New Guidelines</div>
                        </div>
                    </div>
                </div>


                <div className="ItemCategory">
                    <div className="img">
                        <img src={samplePic} alt="" />
                    </div>
                    <div className="ItemDesc">
                        <div className="title">
                            Our Customers
                        </div>
                        <div className="SubCater">
                            <div className="item">New Campaigns</div>
                            <div className="item">Promos</div>
                            <div className="item">New Guidelines</div>
                        </div>
                    </div>
                </div>


                <div className="ItemCategory">
                    <div className="img">
                        <img src={samplePic} alt="" />
                    </div>
                    <div className="ItemDesc">
                        <div className="title">
                            Performance
                        </div>
                        <div className="SubCater">
                            <div className="item">New Campaigns</div>
                            <div className="item">Promos</div>
                            <div className="item">New Guidelines</div>
                        </div>
                    </div>
                </div>


                <div className="ItemCategory">
                    <div className="img">
                        <img src={samplePic} alt="" />
                    </div>
                    <div className="ItemDesc">
                        <div className="title">
                            Team Updates
                        </div>
                        <div className="SubCater">
                            <div className="item">New Campaigns</div>
                            <div className="item">Promos</div>
                            <div className="item">New Guidelines</div>
                        </div>
                    </div>
                </div>



                <div className="ItemCategory">
                    <div className="img">
                        <img src={samplePic} alt="" />
                    </div>
                    <div className="ItemDesc">
                        <div className="title">
                            Sales Support Corner
                        </div>
                        <div className="SubCater">
                            <div className="item">New Campaigns</div>
                            <div className="item">Promos</div>
                            <div className="item">New Guidelines</div>
                        </div>
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default AllCater
