import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Reactcarousel.css";
import ReactcarItem from "../CarouselsliderItems/ReactcarouselItem";


const Reactcarousel = () => {
  const options = {
    loop: true,
    center:true,
    items: 5,
    marging: 0,
    autoplay:true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive:{
      0:{
        items: 3
      },
      600:{
        items: 3
      },
      1000:{
        items:5
      }
    }
  };

  const ReactcarItems = [
    {
      img: 'assets/img/1.jpg'
    },
    {
      img: 'assets/img/2.jpg'
    },
    {
      img: 'assets/img/2.jpg'
    },
    {
      img: 'assets/img/3.jpg'
    },
    {
      img: 'assets/img/4.jpg'
    }
  ];
  return (
    <section id="sliderT" className="sliderT pt-70 pb-70">
    <div className="container mt-5">
       
       <p className="text-center"></p>
       <div className='row'>
          <div className='col-md-12'>
            <OwlCarousel id='pic-block' className='owl-carousel owl-theme' {...options}>
                {
                  ReactcarItems.map(imageItems => {
                    return (
                      <ReactcarItem  imageItems={imageItems} key={imageItems.img} />
                    )
                  })
                }
            </OwlCarousel>
          </div>
       </div>
    </div>
 </section>
  );
}

export default Reactcarousel;