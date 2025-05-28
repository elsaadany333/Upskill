"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { courses } from "@/data/courese";
import { useContextElement } from "@/context/Context";
export default function MyCourses() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const swiperOptions = {
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
  };
  return (
    <>
      <div className="heading-section">
        <h6 className="fw-5 text-22 wow fadeInUp" data-wow-delay="0s">
          More Course By&nbsp;Theresa Edin
        </h6>
      </div>
      <Swiper
        {...swiperOptions}
        className="swiper-container slider-courses-7 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      >
        {courses.map((elm, i) => (
          <SwiperSlide key={i}>
            <div
              className="course-item hover-img title-small wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="features image-wrap">
                <Image
                  className=" ls-is-cached lazyloaded"
                  alt=""
                  src={elm.imgSrc}
                  width={520}
                  height={380}
                />
                {elm.tag ? (
                  <div className="box-tags">
                    <a href="#" className="item best-seller">
                      Best Seller
                    </a>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`box-wishlist tf-action-btns ${
                    isAddedtoWishlist(elm.id) ? "active" : ""
                  } `}
                  onClick={() => toggleWishlist(elm.id)}
                >
                  <i className="flaticon-heart" />
                </div>
              </div>
              <div className="content">
                <div className="meta">
                  <div className="meta-item">
                    <i className="flaticon-calendar" />
                    <p>{elm.lessons}</p>
                  </div>
                  <div className="meta-item">
                    <i className="flaticon-clock" />
                    <p>{elm.duration}</p>
                  </div>
                </div>
                <h6 className="fw-5 line-clamp-2">
                  <a href="#">{elm.title}</a>
                </h6>
                <div className="ratings pb-30">
                  <div className="number">{elm.rating}</div>
                  {Array(Math.round(elm.rating))
                    .fill(0)
                    .map((_, i2) => (
                      <i className="icon-star-1" key={i2} />
                    ))}
                  {Array(5 - Math.round(elm.rating))
                    .fill(0)
                    .map((_, i2) => (
                      <svg
                        key={i2}
                        width={12}
                        height={11}
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.54831 7.10382L3.58894 6.85477L3.41273 6.67416L1.16841 4.37373L4.24914 3.90314L4.51288 3.86286L4.62625 3.62134L5.99989 0.694982L7.37398 3.62182L7.48735 3.86332L7.75108 3.9036L10.8318 4.37419L8.58749 6.67462L8.41128 6.85523L8.4519 7.10428L8.98079 10.3465L6.24201 8.8325L6.00014 8.69879L5.75826 8.83247L3.01941 10.3461L3.54831 7.10382ZM11.0444 4.15626L11.0442 4.15651L11.0444 4.15626Z"
                          stroke="#131836"
                        />
                      </svg>
                    ))}
                  <div className="total">({elm.reviews})</div>
                </div>
                <div className="author">
                  By:
                  <a href="#" className="author">
                    {elm.author}
                  </a>
                </div>
                <div className="bottom">
                  <div className="h6 price fw-5">${elm.price}</div>
                  <a href="#" className="tf-btn-arrow">
                    <span className="fw-5 fs-15">Enroll Course</span>
                    <i className="icon-arrow-top-right" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
