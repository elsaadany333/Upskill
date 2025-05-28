"use client";
import { languages } from "@/data/language";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Languages() {
  const swiperOptions = {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 4,
      },
      700: {
        slidesPerView: 6,
      },
      1000: {
        slidesPerView: 8,
      },
      1440: {
        slidesPerView: 10,
      },
    },
  };
  return (
    <section className="section-country tf-spacing-8">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                I Want To Learn
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                  Lorem ipsum dolor sit amet elit
                </div>
                <a
                  href="#"
                  className="tf-btn-arrow wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Show More Courses
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
            <Swiper
              className="swiper-container slider-country"
              {...swiperOptions}
              modules={[Navigation, Pagination]}
            >
              {languages.map((language) => (
                <SwiperSlide className="swiper-slide" key={language.id}>
                  <div className="learn-item-style-2">
                    <a href="#">
                      <Image
                        className="ls-is-cached lazyloaded"
                        src={language.imgSrc}
                        alt={language.name}
                        width={language.width}
                        height={language.height}
                      />
                    </a>
                    <h6>
                      <a href="#">{language.name}</a>
                    </h6>
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
