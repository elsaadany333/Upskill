"use client";

import { academicSlides } from "@/data/categories";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Academic() {
  const options = {
    spaceBetween: 25,
    observer: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 28,
      },
    },
  };

  return (
    <section className="section-academisc">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                Academics At UpSkill
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet elit
              </div>
            </div>
            <Swiper
              modules={[Pagination, Navigation]}
              className="swiper-container slider-category"
              {...options}
            >
              {academicSlides.map((slide, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <a href={slide.href}>
                    <div className="academisc-item">
                      <div className="image-wrap">
                        <Image
                          className="ls-is-cached lazyloaded"
                          src={slide.imgSrc}
                          alt={slide.imgAlt}
                          width={slide.imgWidth}
                          height={slide.imgHeight}
                        />
                      </div>
                      <div className="content">
                        <p dangerouslySetInnerHTML={{ __html: slide.text }} />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
