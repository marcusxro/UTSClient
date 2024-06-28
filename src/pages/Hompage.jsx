import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../App';

import Header from '../comp/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, } from 'swiper/modules';
import firstSlide from '../images/IMG_6582.png'
import figureThee from '../images/IMG_6590.png'
import figureTwo from '../images/IMG_6602.png'
import figureFour from '../images/IMG_6595.png'
import figueFive from '../images/IMG_6627.png'
import figureSlider from '../images/IMG_6585.png'
import Footer from '../comp/Footer';
import { useNavigate } from 'react-router-dom';
import ImageLoader from '../comp/ImageLoader';

const Hompage = () => {

  const [activeUser, setActiveUser] = useContext(Context)

  const nav = useNavigate('')


  const [imgList] = useState([
    { FirstIMG: firstSlide },
    { SecIMG: figureTwo },
    { ThirdIMG: figureThee },
    { FourthIMG: figureFour },
    { FifthIMG: figueFive },
    { FigureSlider: figureSlider },
  ]);

  const [loadedImages, setLoadedImages] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
    setLoading(false);
  };

  const handleImageError = () => {
    setLoadedImages((prev) => prev + 1); // Optionally handle errors
  };

  useEffect(() => {
    if (loadedImages === imgList.length) {
      setLoading(false);
    }
  }, [loadedImages, imgList.length, loading]);



  const [query, setQuery] = useState('')
  const submitQuery = (e) => {
    e.preventDefault()
    if (!query) {
      alert("Please type something")
    } else {
      nav(`/query/${query}`)
      setQuery('')
      window.scrollTo(0, 0)
    }

  }

  return (
    <div className='Homepage closer'>
      {
        activeUser?.uid ?
          <>
            <Header />
            <div className="HomepageContent">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade,]}
              
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>

                  <img
                    src={imgList[0].FirstIMG}
                    alt={imgList.title}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                
                  <div className="absoCon">
                    <div className="text">
                      ULC TELESALES
                    </div>
                    <p>We're the ULC Telesales Team, part of SDCM, specializing in financial services like credit cards, personal loans, and SIP loans from BPI. We Win as One!</p>
                    <button>DISCOVER</button>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <img src={figureSlider} alt="" />
                </SwiperSlide>
                <SwiperSlide> <img src={firstSlide} alt="" /></SwiperSlide>
                <SwiperSlide> <img src={firstSlide} alt="" /></SwiperSlide>
              </Swiper>
            </div>
            <div className="midContainer">
              <div className="textCon">
                <div className="title">
                  CHOOSE WHAT CATEGORY
                </div>
                <div className="line">

                </div>
              </div>
            </div>

            <div className="imageGallery">
              <div className="imageItem">
                <div className="imgCon">
                  <img src={figureTwo} alt="" />
                </div>
                <div className="desc">
                  <div className="title">
                    ADVISORIES
                  </div>
                  <p>Stay informed with our advisory updates, providing essential information and guidance on our current developments</p>
                  <button onClick={() => { nav('/category/advisories'); window.scrollTo(0, 0) }}>NAVIGATE <ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
              </div>


              <div className="imageItem">
                <div className="desc">
                  <div className="title">
                    CAMPAIGN
                    GUIDELINES
                  </div>
                  <p>Navigate your campaign with confidence using our comprehensive guidelines, offering strategic insights and practical advice.</p>
                  <button onClick={() => { nav('/category/campaign guidelines'); window.scrollTo(0, 0) }}>NAVIGATE <ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className="imgCon">
                  <img src={figureThee} alt="" />
                </div>
              </div>

              <div className="imageItem">
                <div className="imgCon">
                  <img src={figureFour} alt="" />
                </div>
                <div className="desc">
                  <div className="title">
                    TRAINING
                  </div>
                  <p>

                    Empower your self with our specialized training programs, designed to enhance skills and foster professional growth the UTS way.            </p>
                  <button onClick={() => { nav('/category/training'); window.scrollTo(0, 0) }}>NAVIGATE <ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
              </div>

              <div className="imageItem">
                <div className="desc">
                  <div className="title">
                    OUR
                    CUSTOMER
                  </div>
                  <p>

                    Our valued customers. We prioritize your needs, ensuring a seamless experience and personalized solutions every step of the way.
                  </p>
                  <button onClick={() => { nav('/category/our customer'); window.scrollTo(0, 0) }}>NAVIGATE <ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className="imgCon">
                  <img src={figueFive} alt="" />
                </div>
              </div>
              <div className="seeMore">
                <button onClick={() => { nav('/all-categories'); window.scrollTo(0, 0) }}>
                  SEE MORE <ion-icon name="apps-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div className="salesTip">
              <div className="firstCon">
                <div className="text">
                  Sales Tips of the Month
                </div>
                <p>
                  <span>Personal Loan: </span> Keep it simple and clear. When talking to customers over the phone, avoid using complicated jargon or technical terms. Instead, explin things in easy-to-understand language.
                  This builds trust and makes customers feel confident about their decision to get a personal loan. Remember, clarity sells!
                </p>
              </div>
            </div>
            <div className="lowerSection">
              <div className="imgCon">
                <img src={figureSlider} alt="" />
              </div>
              <div className="desc">
                <div className="title">
                  WHO WE ARE
                </div>
                <p>We are the ULC Telesales Team, Operating under the umbrella of SDCM. Specializing in financial services, we offer tailored solutions including credit cards, personal loans, and SIP loans.
                  With a focus on providing excellent custmer service and meeting individual financial needs, we strive to ensure our clients have access to the best financial products BPI has to offer
                </p>
                <button>LEARN MORE<ion-icon name="arrow-forward-outline"></ion-icon></button>
              </div>
            </div>
            <div className="getStarted">
              <div className="title">
                LET'S GET STARTED!
              </div>
              <div className="line">
              </div>
              <form onSubmit={submitQuery} className="searchForm">
                <input value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" placeholder='What do you want to learn?' />
                <button type='submit'><ion-icon name="arrow-forward-outline"></ion-icon></button>
              </form>
            </div>
            <Footer />
          </> :
          <></>
      }
    </div >

  )
}

export default Hompage
