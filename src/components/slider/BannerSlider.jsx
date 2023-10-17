import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import phoneBanner from '../../assets/phoneBanner.jpg'
import pcBanner from '../../assets/pcBanner.jpg'
import ImageComp from "../ImageComp";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrowForPc from "./SampleNextArrowForPc";
import SamplePrevArrowForPc from "./SamplePrevArrowForPc";


const BannerSlider = ()=>{


    

    const [dotActive,setDotActive] = useState(0) ;
    const [largeDevice,setLargeDevice] = useState(0) ;

    

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrowForPc className="bg-red-500 p-11 hgsdgfhs" />,
      prevArrow: <SamplePrevArrowForPc />,
      autoplay : true ,
      beforeChange: (prev, next) => {
        setDotActive(next);
      },
      appendDots: dots => (
        <div
            // className="absolute left-1/2 bottom-3"
            style={{
                // backgroundColor: "#ddd",
                position:"absolute",
                bottom:"22px",
                left:"28px",
            }}
        >
          <ul className="flex gap-2" style={{}}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        i === dotActive ?
            <div
                className="w-4 h-4 border-2 border-none bg-black"
                style={{
                }}
            >
            </div>
        :
        
        <div
            className="w-4 h-4 border-2 border-grayColor"
            style={{
            }}
        >
        </div>
      ),
      responsive: [
        {
          breakpoint: 640,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay : true ,
            beforeChange: (prev, next) => {
              setDotActive(next);
            },
            appendDots: dots => (
              <div
                  // className="absolute left-1/2 bottom-3"
                  style={{
                      // backgroundColor: "#ddd",
                      position:"absolute",
                      bottom:"14px",
                      left:"50%",
                      transform:"translateX(-50%)"
                  }}
              >
                <ul className="flex gap-2" style={{}}> {dots} </ul>
              </div>
            ),
            customPaging: i => (
              i === dotActive ?
                  <div
                      className="w-4 h-4 border-2 border-none bg-black"
                      style={{
                      }}
                  >
                  </div>
              :
              
              <div
                  className="w-4 h-4 border-2 border-grayColor"
                  style={{
                  }}
              >
              </div>
            ),
          }
        },
      ]
    };

    useEffect(()=>{
        const resFanction = ()=>{
            if(window.innerWidth > 639){
                setLargeDevice(true) ;
            }else{
                setLargeDevice(false) ;
            };
            
        }
        window.addEventListener("resize",resFanction)
        resFanction()
    },[])

    return (
      <div>
        <Slider {...settings}>
            
          <div>
            <ImageComp imageSrc={largeDevice?pcBanner:phoneBanner} className="w-full"/>
          </div>
          
            
          <div>
            <ImageComp imageSrc={largeDevice?pcBanner:phoneBanner} className="w-full"/>
          </div>
          
            
          <div>
            <ImageComp imageSrc={largeDevice?pcBanner:phoneBanner} className="w-full"/>
          </div>
          
            
          <div>
            <ImageComp imageSrc={largeDevice?pcBanner:phoneBanner} className="w-full"/>
          </div>
          
          
        </Slider>
      </div>
    );

}

export default BannerSlider