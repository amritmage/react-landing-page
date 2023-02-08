import React from 'react';
import '../styles/Slider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slide1 from '../assets/hero-banner-web-1.png';
import slide2 from '../assets/hero-banner-web-2.png';

const HomeSlider = () => {
  return (
    <div className='home-banner-slider'>     
        <OwlCarousel margin={0} items={1} nav dots autoplay loop>
          <div className='porto-ibanner'>
            <img className="img" src={slide1} alt="Slide 1" />
            <div class="porto-ibanner-desc no-padding d-flex">
              <div class="container">
                <div class="porto-ibanner-container">
                  <div class="porto-ibanner-layer">
                    <h2 class="vc_custom_heading mb-2 align-left">15% OFF</h2>
                    <h4 class="vc_custom_heading ls-120 mb-4 custom-font1 align-left">Suero de reparación nocturna</h4>
                    <h5 class="vc_custom_heading ls-120 mb-4 custom-font1 align-left">Conoce nuestras mejores ofertas.</h5>
                    <div class="btn-container mb-0 ls-120 text-center green"><a href="/" class="btn btn-modern btn-xl btn-dark w-100">Ver más</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='porto-ibanner'>
            <img className="img" src={slide2} alt="Slide 2" />
            <div class="porto-ibanner-desc no-padding d-flex">
              <div class="container">
                <div class="porto-ibanner-container">
                  <div class="porto-ibanner-layer">
                    <h2 class="vc_custom_heading mb-2 align-left">20% OFF</h2>
                    <h4 class="vc_custom_heading ls-120 mb-4 custom-font1 align-left">Suero de reparación nocturna</h4>
                    <h5 class="vc_custom_heading ls-120 mb-4 custom-font1 align-left">Conoce nuestras mejores ofertas.</h5>
                    <div class="btn-container mb-0 ls-120 text-center green"><a href="/" class="btn btn-modern btn-xl btn-dark w-100">Ver más</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>  
    </div>  
  )
}

export default HomeSlider