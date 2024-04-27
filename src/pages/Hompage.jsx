import React from 'react'
import Header from '../comp/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import firstSlide from '../images/IMG_6582.png'
import figureThee from '../images/IMG_6590.png'
import figureTwo from '../images/IMG_6602.png'
import figureFour from '../images/IMG_6595.png'
import figueFive from '../images/IMG_6627.png'
import figureSlider from '../images/IMG_6585.png'
import Footer from '../comp/Footer';
import { useNavigate } from 'react-router-dom';
const Hompage = () => {
  const nav = useNavigate('')
  return (
    <div className='Homepage'>
      <Header />

      <div className="HomepageContent">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
          Autoplay
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src={firstSlide} alt="" />
            <div className="absoCon">
              <div className="text">
                ULC TELESALES
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio hic, nisi dolores repudiandae nesciunt?</p>
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
          <p>Pariatur consequuntur amet cumque aliquid doloribus repellendus exercitationem commodi quam quasi? Ea?</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, esse!</p>
            <button>NAVIGATE <ion-icon name="arrow-forward-outline"></ion-icon></button>
          </div>
        </div>


        <div className="imageItem">
          <div className="desc">
            <div className="title">
              CAMPAIGN
              GUIDELINES
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, esse!</p>
            <button>NAVIGATE <ion-icon name="arrow-forward-outline"></ion-icon></button>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, esse!</p>
            <button>NAVIGATE <ion-icon name="arrow-forward-outline"></ion-icon></button>
          </div>
        </div>


        <div className="imageItem">
          <div className="desc">
            <div className="title">
              OUR
              CUSTOMER
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, esse!</p>
            <button>NAVIGATE <ion-icon name="arrow-forward-outline"></ion-icon></button>
          </div>
          <div className="imgCon">
            <img src={figueFive} alt="" />
          </div>
        </div>

        <div className="seeMore">
          <button onClick={() => {nav('/all-categories')}}>
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
          <p>We aer the ULC Telesales Team, Operating under the umbrella of SDCM. Specializing in financial services, we offer tailored solutions including credit cards, personal loans, and SIP loans.
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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ad quo accusantium dolore incidunt, neque voluptates aliquid minus accusamus quia exercitationem dolorum architecto magnam saepe numquam cumque placeat iusto fuga.</p>
        <div className="searchForm">
          <input type="text" placeholder='What do you want to learn?' />
          <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
        </div>
      </div>

      <Footer />
    </div >

  )
}

export default Hompage
