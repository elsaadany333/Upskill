"use client";

import { reviews } from "@/data/testimonials";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const swiperOptions = {
    spaceBetween: 28,
    observer: true,
    loop: true,
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
  };
  return (
    <section className="section-review bg-4 tf-spacing-11">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section">
              <div className="flex items-center justify-between flex-wrap gap-10">
                <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                  What Our Customers Say
                </h2>
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                  Rated 4.7 / 5 based on 28,370 reviews Showing our 4 &amp; 5
                  star reviews
                </div>
              </div>
            </div>
            <Swiper
              className="swiper-container slider-courses-9 wow fadeInUp"
              data-wow-delay="0.3s"
              {...swiperOptions}
              modules={[Navigation, Pagination]}
            >
              {reviews.map((review, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="box-review">
                    <div className="review-head">
                      <div className="head-icon">
                        {[...Array(review.rating)].map((_, i) => (
                          <i className="icon-star-3" key={i} />
                        ))}
                      </div>
                      {review.verified && (
                        <p className="head-verified">
                          <i className="icon-check" />
                          Verified
                        </p>
                      )}
                    </div>
                    <div className="review-inner">
                      <h6>{review.title}</h6>
                      <p>{review.content}</p>
                    </div>
                    <p className="review-bottom">
                      <a href="#">{review.author}</a>, {review.time}
                    </p>
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
