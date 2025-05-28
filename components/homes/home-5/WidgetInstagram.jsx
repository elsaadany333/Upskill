"use client";
import { instagramImages } from "@/data/instagram";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function WidgetInstagram() {
  const options = {
    spaceBetween: 15,
    observer: true,
    slidesPerView: 7,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      },
      1440: {
        slidesPerView: 7,
      },
    },
  };
  return (
    <section className="widget-instagram">
      <div className="tf-container full">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                Follow Me On Instagram
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination]}
              className="swiper-container slider-instagram"
              {...options}
            >
              {instagramImages.map((imgSrc, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="instagram-item hover-img style-column">
                    <a href="#" className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src={imgSrc}
                        alt=""
                        src={imgSrc}
                        width={515}
                        height={515}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
