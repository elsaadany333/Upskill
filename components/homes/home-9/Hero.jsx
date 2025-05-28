"use client";
import { slides } from "@/data/heroSlides";
import React, { useState } from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
const title = ["Start Your Career", "Student Life", "Graduate"];
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  const options = {
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + title[index] + "</span>";
      },
    },
  };
  return (
    <>
      <div className="page-title-home9">
        <Swiper
          {...options}
          modules={[Navigation, Pagination, EffectFade]}
          className="swiper-container slider-home9"
        >
          {/* Additional required wrapper */}

          {/* Slides */}
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide"
              data-year={slide.dataYear}
            >
              <div className="image">
                <Image
                  alt={slide.imgAlt}
                  src={slide.imgSrc}
                  width={slide.imgWidth}
                  height={slide.imgHeight}
                />
              </div>
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="content">
                      <div>
                        <div
                          className={`widget box-sub-tag ${slide.fadeItemClass}`}
                        >
                          <div className="sub-tag-icon">
                            <i className="icon-flash" />
                          </div>
                          <div className="sub-tag-title">
                            <p>{slide.subTagText}</p>
                          </div>
                        </div>
                        <h1 className={`fw-7 ${slide.fadeItemClass}`}>
                          {slide.headingText.split("&").map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </h1>
                        <div className={`bottom-btns ${slide.fadeItemClass}`}>
                          <a
                            href={slide.btnHref}
                            className="tf-btn style-secondary"
                          >
                            {slide.btnText}
                            <i className={slide.btnIconClass} />
                          </a>
                        </div>
                      </div>
                      <div className="widget-video">
                        <a
                          onClick={() => setOpen(true)}
                          className="popup-youtube"
                        >
                          <i className={slide.videoIconClass} />
                        </a>
                        <h6 className="mb-0">{slide.videoText}</h6>
                      </div>
                    </div>
                    <div className="bot-wrap" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* If we need pagination */}
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </Swiper>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="MLpWrANjFbI"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
