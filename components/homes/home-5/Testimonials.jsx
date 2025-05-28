"use client";

import { testimonials2 } from "@/data/testimonials";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const options = {
    spaceBetween: 28.75,
    observer: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 4,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".spd7",
      clickable: true,
    },
  };
  return (
    <section className="section-saying tf-spacing-11 bg-4">
      <div className="tf-container full">
        <div className="row justify-center">
          <div className="col-lg-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                What Clients Are Saying
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet elit
              </div>
            </div>
            <Swiper
              {...options}
              modules={[Pagination, Navigation]}
              style={{ maxWidth: "100vw" }}
              className="swiper-container slider-courses-6"
            >
              {testimonials2.map((testimonial, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="testimonials-item-style-2">
                    <div className="testimonials-item-header">
                      <div className="image-wrap">
                        <Image
                          className="lazyload"
                          data-src={testimonial.imgSrc}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          width={240}
                          height={241}
                        />
                      </div>
                      <div className="content-wrap">
                        <h5>{testimonial.name}</h5>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                    <p>{testimonial.testimonial}</p>
                    <div className="statings-wrap">
                      <div className="stating">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <i className="icon-star-1" key={i} />
                          ))}
                      </div>
                      <div className="icon">
                        <i className="icon-quote" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination pagination-slider pagination-courses1 pt-40 spd7" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
