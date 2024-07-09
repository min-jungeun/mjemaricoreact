import React from 'react'
import mjescss from '../scss/mje.module.scss'

function Mje() {
    return (
        <section class={mjescss.recommend}>
      <div class={`${mjescss.recommendContainerJ}`}>
        <div class="container-1824">
          <div class="row justify-content-between align-items-end">
            <div class="container-1400 my-5">
              <h2>다채로운 매력, 대한민국</h2>
              <p class={`mt-3 ${mjescss.recommendTextJ}`}>전국 곳곳의 다양한 매력을 느껴보세요.<br></br>
              여행은 계획하는 지금, 이 순간에 시작됩니다.</p>
            </div>

            <div class={`d-flex justify-content-between ${mjescss.recommendBigboxJ}`}>
              <div class={`${mjescss.recommendBoxJ}`}>
                <div class={`${mjescss.recommendHalfcircleJ}`}>
                  <div class={`${mjescss.recommendCardJ}`}>
                    <div class="position-relative">
                      <img src="https://munhyeonsuk.github.io/myrealcode/img/recommend1.jpg" class="card-img-top d-block" alt="국내추천여행지이미지" />
                      <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center"> 
                        <p class=" d-flex justify-content-center flex-column align-items-center ">
                          <span class="d-block text-white">서울에서 강릉까지</span>
                          <span class="d-block text-white">KTX 당일치기</span>
                        </p>
                      </div>
                    </div>
                    <p class={` d-flex justify-content-center flex-column align-items-center bg-white ${mjescss.recommendTextNoneJ}`}>
                      <span class="d-block text-black">서울에서 강릉까지</span>
                      <span class="d-block text-black">KTX 당일치기</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class={`${mjescss.recommendBoxJ}`}>
                <div class={`${mjescss.recommendHalfcircleJ}`}>
                  <div class={`${mjescss.recommendCardJ}`}>
                    <div class="position-relative">
                      <img src="https://munhyeonsuk.github.io/myrealcode/img/recommend2.jpg" class="card-img-top d-block" alt="국내추천여행지이미지"/>
                      <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                        <p class="d-flex justify-content-center flex-column align-items-center ">
                          <span class="d-block text-white">스릴을 즐기며 하늘을 날다.</span>
                          <span class="d-block text-white">단양 여행</span>
                        </p>
                      </div>
                    </div>
                    <p class={`d-flex justify-content-center flex-column align-items-center bg-white ${mjescss.recommendTextNoneJ}`}>
                      <span class="d-block text-black">스릴을 즐기며 하늘을 날다.</span>
                      <span class="d-block text-black">단양 여행</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class={`${mjescss.recommendBoxJ}`}>
                <div class={`${mjescss.recommendHalfcircleJ}`}>
                  <div class={`${mjescss.recommendCardJ}`}>
                    <div class="position-relative">
                      <img src="https://munhyeonsuk.github.io/myrealcode/img/recommend3.jpg" class="card-img-top d-block" alt="국내추천여행지이미지"/>
                      <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                        <p class="d-flex justify-content-center flex-column align-items-center bg-">
                          <span class="d-block text-white">낭만 가득, 슬로시티</span>
                          <span class="d-block text-white">전주 여행</span>
                        </p>
                      </div>
                    </div>
                    <p class={`d-flex justify-content-center flex-column align-items-center bg-white ${mjescss.recommendTextNoneJ}`}>
                      <span class="d-block text-black">낭만 가득, 슬로시티</span>
                      <span class="d-block text-black">전주 여행</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class={`${mjescss.recommendBoxJ}`}>
                <div class={`${mjescss.recommendHalfcircleJ}`}>
                  <div class={`${mjescss.recommendCardJ}`}>
                    <div class="position-relative">
                      <img src="https://munhyeonsuk.github.io/myrealcode/img/recommend4.jpg" class="card-img-top d-block" alt="국내추천여행지이미지"/>
                      <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                        <p class="position-absolute d-flex justify-content-center flex-column align-items-center">
                          <span class="d-block text-white">남해에서 맛보는</span>
                            <span class="d-block text-white">이국적 풍경</span>
                      </p>
                      </div>
                    </div>
                    <p class={`"d-flex justify-content-center flex-column align-items-center bg-white ${mjescss.recommendTextNoneJ}`}>
                      <span class="d-block text-black">남해에서 맛보는</span>
                      <span class="d-block text-black">이국적 풍경</span>
                  </p>
                  </div>
                </div>
              </div>

           
              <div class={`${mjescss.recommendBoxJ}`}>
                <div class={`${mjescss.recommendHalfcircleJ}`}>
                  <div class={`${mjescss.recommendCardJ} bg-white`}>
                    <div class="position-relative">
                      <img src="https://munhyeonsuk.github.io/myrealcode/img/recommend5.jpg" class="card-img-top d-block" alt="국내추천여행지이미지"/>
                      <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                        <p class="position-absolute d-flex justify-content-center flex-column align-items-center">
                          <span class="d-block text-white">반려견과 함께하는</span>
                          <span class="d-block text-white">제주여행</span>
                        </p>
                      </div>
                    </div>
                    <p class="d-flex justify-content-center flex-column align-items-center mb-0">
                      <span class="d-block text-black">반려견과 함께하는</span>
                      <span class="d-block text-black">제주여행</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div class={`${mjescss.recommendBoxJ}`}>
                <div class={`${mjescss.recommendHalfcircleJ}`}>
                  <div class={`${mjescss.recommendCardJ}`}>
                    <div class=" position-relative">
                      <img src="https://munhyeonsuk.github.io/myrealcode/img/recommend6.jpg" class="card-img-top d-block" alt="국내추천여행지이미지"/>
                      <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                        <p class="position-absolute d-flex justify-content-center flex-column align-items-center">
                          <span class="d-block text-white ">꽃보다 아름다운 야경</span>
                          <span class="d-block text-white">여수 밤바다</span>
                        </p>
                      </div>
                    </div>
                    <p class={`d-flex justify-content-center flex-column align-items-center bg-white ${mjescss.recommendTextNoneJ}`}>
                      <span class="d-block text-black">꽃보다 아름다운 야경</span>
                      <span class="d-block text-black">여수 밤바다</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <span class={`d-block ${mjescss.recommendLineJ}`}></span>
        <div class={`${mjescss.recommendSlideBtnJ}`}>
          <i class="me-2"><svg width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg></i>
         <span><i><svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg></i></span>
        </div>
        
      </div>
    </section>
    )
}

export default Mje
