import React from 'react'
import Slider from "react-slick";

const Activities = () => {

    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className='activities'>
        <h3>HUNDREDS OF</h3>
        <h1>Activities for Everyone</h1>
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + './images/Rectangle-2.png'} alt="" />
            <div className='activity'>
                <p>Hiking</p>
                <span>230 activities</span>
            </div>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + './images/Rectangle-3.png'} alt="" />
            <div className='activity'>
                <p>Sailing</p>
                <span>121 activities</span>
            </div>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + './images/Rectangle-4.png'} alt="" />
            <div className='activity'>
                <p>Skiing</p>
                <span>212 activities</span>
            </div>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + './images/Rectangle-5.png'} alt="" />
            <div className='activity'>
                <p>Kayaking</p>
                <span>512 activities</span>
            </div>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + './images/Rectangle-5.png'} alt="" />
            <div className='activity'>
                <p>Hiking</p>
                <span>230 activities</span>
            </div>
          </div>
        </Slider>
    </div>
  )
}

export default Activities