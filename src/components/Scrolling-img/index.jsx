// Import Swiper React components
import { Swiper,SwiperSlide  } from 'swiper/react';

// import Swiper core and required modules
import './scrolling.css'
// install Swiper modules

// Import Swiper styles
import 'swiper/css';

export default () => {


  return (
      <>
      
        <div className="slider-area pt-80 pb-80 wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              
                  <Swiper
                      spaceBetween={30}
                      slidesPerView={3}
                      loop={true}
                      pagination={{ clickable: true }}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        // when window width is >= 640px
                        // 1440: {
                        //       slidesPerView: 6,
                        //   },
                        //   1024: {
                        //       slidesPerView: 5,
                        //   },
                        //   992: {
                        //       slidesPerView: 4,
                        //   },
                          768: {
                              slidesPerView: 3,
                          },
                          425: {
                              slidesPerView: 2,
                          },
                          320: {
                              slidesPerView: 1,
                          },
                      }}
                    >
                      <SwiperSlide>
                            <img width="100%" height="250px" src={require('../../images/slider/pic1.jpg')} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                            <img width="100%" height="250px" src={require('../../images/slider/pic2.jpg')} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                            <img width="100%" height="250px" src={require('../../images/slider/pic3.jpg')} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                            <img width="100%" height="250px" src={require('../../images/slider/pic4.jpg')} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                            <img width="100%" height="250px"  src={require('../../images/slider/pic5.jpg')} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                            <img width="100%" height="250px" src={require('../../images/slider/pic6.jpg')} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                            <img width="100%" height="250px" src={require('../../images/slider/pic7.jpg')} alt="" />
                      </SwiperSlide>
                  
                    </Swiper> 
                  
                   
              </div>
            </div>
          </div>
        </div>

      </>
  );
};