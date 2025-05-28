"use client";
import { instagramSlides2 } from "@/data/instagram";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Instagram() {
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
        slidesPerView: 6,
      },
    },
  };
  return (
    <section className="widget-instagram tf-spacing-8 bg-4 pb-0">
      <div className="tf-container">
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
              className="swiper-container slider-instagram"
              {...options}
              modules={[Pagination, Navigation]}
            >
              {instagramSlides2.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="instagram-item hover-img style-column">
                    <a href="#" className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src={slide.imgSrc}
                        alt={slide.imgAlt}
                        src={slide.imgSrc}
                        width={slide.imgWidth}
                        height={slide.imgHeight}
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
