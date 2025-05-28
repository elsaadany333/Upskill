"use client";

import { instagramSlides } from "@/data/instagram";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function WidgetInstagram() {
  const swiperOptions = {
    spaceBetween: 15,
    observer: true,
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
    <section className="widget-instagram sp-border-46">
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
              className="swiper-container slider-instagram"
              {...swiperOptions}
              modules={[Navigation, Pagination]}
            >
              {instagramSlides.map((slide, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="instagram-item hover-img style-column">
                    <a href={slide.href} className="image-wrap">
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
