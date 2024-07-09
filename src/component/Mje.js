import React from 'react'
import mjescss from '../scss/mje.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

function Mje() {
    return (
        <section className={mjescss.recommend}>
          <div className={`${mjescss.recommendContainerJ}`}>
            <div className="container-1824">
              <div className="row justify-content-between align-items-end">
                <div className="container-1400 my-5">
                  <h2>다채로운 매력, 대한민국</h2>
                  <p className={`mt-3 ${mjescss.recommendTextJ}`}>전국 곳곳의 다양한 매력을 느껴보세요.<br></br>
                  여행은 계획하는 지금, 이 순간에 시작됩니다.</p>
                </div>

                <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        
        className={`d-flex justify-content-between ${mjescss.recommendBigboxJ}`}
      >
        {
          [0,1,2,3,4,5,6].map((v,i)=>{
            return(
              <SwiperSlide>
                  <div className={`${mjescss.recommendBoxJ}`}>
                    <div className={`${mjescss.recommendHalfcircleJ}`}>
                      <div className={`${mjescss.recommendCardJ}`}>
                        <div className="position-relative">
                          <img src="https://munhyeonsuk.github.io/myrealcode/img/recommend1.jpg" className="card-img-top d-block" alt="국내추천여행지이미지" />
                          <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center"> 
                            <p className=" d-flex justify-content-center flex-column align-items-center ">
                              <span className="d-block text-white">서울에서 강릉까지</span>
                              <span className="d-block text-white">KTX 당일치기</span>
                            </p>
                          </div>
                        </div>
                        <p className={` d-flex justify-content-center flex-column align-items-center bg-white ${mjescss.recommendTextNoneJ}`}>
                          <span className="d-block text-black">서울에서 강릉까지</span>
                          <span className="d-block text-black">KTX 당일치기</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
            )
          })
        }
                

                  
                  </Swiper>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <span className={`d-block ${mjescss.recommendLineJ}`}></span>
            <div className={`${mjescss.recommendSlideBtnJ}`}>
              <i className="me-2"><svg width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
              </svg></i>
            <span><i><svg width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg></i></span>
            </div>
            
          </div>
    </section>
    )
}

export default Mje
