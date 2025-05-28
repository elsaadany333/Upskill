"use client";

import { testimonials2 } from "@/data/testimonials";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const options = {
    spaceBetween: 28.75,
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
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".spd9",
      clickable: true,
    },
  };
  return (
    <section className="section-saying tf-spacing-11 bg-main">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-lg-12">
            <div className="heading-section text-center">
              <h2
                className="fw-7 lesp-1 text-white wow fadeInUp"
                data-wow-delay="0.1s"
              >
                What Clients Are{" "}
                <span className="tf-secondary-color">Saying</span>
              </h2>
              <div
                className="sub fs-15 text-white wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Lorem ipsum dolor sit amet elit
              </div>
            </div>
            <Swiper
              {...options}
              modules={[Pagination, Navigation]}
              className="swiper-container slider-courses-7"
            >
              {testimonials2.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="testimonials-item-style-2">
                    <div className="testimonials-item-header">
                      <div className="image-wrap">
                        <Image
                          className="lazyload"
                          alt=""
                          src={elm.imgSrc}
                          width={240}
                          height={241}
                        />
                      </div>
                      <div className="content-wrap">
                        <h5>{elm.name}</h5>
                        <span>{elm.role}</span>
                      </div>
                    </div>
                    <p>{elm.testimonial}</p>
                    <div className="statings-wrap">
                      <div className="stating">
                        {Array(elm.rating).map((elm2, i2) => (
                          <i key={i2} className="icon-star-1" />
                        ))}
                      </div>
                      <div className="icon">
                        <i className="icon-quote" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination pagination-slider pagination-courses1 pagination-white pt-40 spd9" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
