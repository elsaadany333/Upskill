"use client";
import { brandLogos } from "@/data/brands";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  const options = {
    spaceBetween: 30,
    slidesPerView: 2,
    observer: true,
    observeParents: true,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 10000,
    breakpoints: {
      450: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      868: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 90,
      },
    },
  };
  return (
    <>
      <div className="page-title-home2">
        <div className="tf-container">
          <div className="row items-center">
            <div className="col-lg-6">
              <div className="content">
                <div
                  className="widget box-sub-tag wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="sub-tag-icon">
                    <i className="icon-flash" />
                  </div>
                  <div className="sub-tag-title">
                    <p>The Leader in Online Learning</p>
                  </div>
                </div>
                <h1 className="fw-7 wow fadeInUp" data-wow-delay="0.2s">
                  Learning That Gets You
                </h1>
                <h6 className="wow fadeInUp" data-wow-delay="0.3s">
                  Skills for your present (and your future). Get started with
                  us.
                </h6>
                <div className="bottom-btns">
                  <a
                    href="#"
                    className="tf-btn wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    Explore Courses
                    <i className="icon-arrow-top-right" />
                  </a>
                  <div
                    className="widget-video wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <a onClick={() => setOpen(true)} className="popup-youtube">
                      <i className="flaticon-play fs-18" />
                    </a>
                    <h6 className="mb-0">Watch Demo</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <div className="image1 align-items-end">
                  <Image
                    className="lazyload"
                    data-src="/images/page-title/page-title-home2-1.jpg"
                    alt=""
                    src="/images/page-title/page-title-home2-1.jpg"
                    width={591}
                    height={680}
                  />
                  <div className="box box1">
                    <div className="icon">
                      <i className="flaticon-online-training" />
                    </div>
                    <h2 className="fw-7">35K</h2>
                    <p className="fz-15">Happy Students</p>
                  </div>
                </div>
                <div className="image2">
                  <div className="box box2">
                    <div className="icon">
                      <i className="flaticon-graduation" />
                    </div>
                    <h2 className="fw-7">500K</h2>
                    <p className="fz-15">Graduated</p>
                  </div>
                  <Image
                    className="lazyload"
                    data-src="/images/page-title/page-title-home2-2.jpg"
                    alt=""
                    src="/images/page-title/page-title-home2-2.jpg"
                    width={592}
                    height={681}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-brand">
            <Swiper
              {...options}
              modules={[Autoplay]}
              className="slide-brand style-2 swiper-container"
            >
              {brandLogos.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="slogan-logo">
                    <Image
                      className="lazyload"
                      src={elm.imgSrc}
                      data-=""
                      alt=""
                      width={elm.width}
                      height={elm.height}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
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
