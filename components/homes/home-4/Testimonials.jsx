"use client";

import { avatars, testimonials } from "@/data/testimonials";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Testimonials() {
  const swiperOptions = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
  };
  const swiperOptions2 = {
    // slidesPerView: 'auto',
    spaceBetween: 80,
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      868: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="tf-spacing-5 widget-saying bg-4">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-xl-10 col-sm-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 font-cardo wow fadeInUp" data-wow-delay="0s">
                What Clients Are Saying
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet elit
              </div>
            </div>
            <div className="gallery">
              <div className="swiper-button-prev widget-saying-button">
                <svg
                  width={35}
                  height={34}
                  viewBox="0 0 35 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M35 16.9832H2.02708" stroke="black" />
                  <path
                    d="M8.96808 24.7926C7.02916 20.5253 5.49308 18.7339 1.66599 16.9949C5.57849 15.0692 7.09716 13.2712 8.96808 9.17383"
                    stroke="black"
                  />
                </svg>
              </div>
              <div className="swiper-button-next widget-saying-button">
                <svg
                  width={35}
                  height={34}
                  viewBox="0 0 35 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 16.9832H32.9729" stroke="black" />
                  <path
                    d="M26.0319 24.7926C27.9708 20.5253 29.5069 18.7339 33.334 16.9949C29.4215 15.0692 27.9028 13.2712 26.0319 9.17383"
                    stroke="black"
                  />
                </svg>
              </div>
              <Swiper
                {...swiperOptions2}
                modules={[Navigation, Thumbs]}
                className="swiper-container gallery-thumbs"
                thumbs={{ swiper: thumbsSwiper }}
              >
                {avatars.map((avatar, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <Image
                      className="lazyload  testimonials-thumb-image"
                      src={avatar.src}
                      alt={avatar.alt}
                      width={avatar.width}
                      height={avatar.height}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                {...swiperOptions}
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                allowTouchMove={false}
                loopAdditionalSlides={7}
                className="swiper-container gallery-slider"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="widget-saying-item">
                      <div className="info">
                        <a href="#">
                          <span className="name">{testimonial.name}</span>
                        </a>
                        <span>{testimonial.role}</span>
                        <div className="ratings">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="icon-star-1" />
                          ))}
                        </div>
                      </div>
                      <div className="widget-saying-content">
                        <p className="text">{testimonial.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
