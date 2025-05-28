"use client";
import { courses2 } from "@/data/courese";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { useEffect, useState } from "react";
const categories = [
  "Popular Courses",
  "New Courses",
  "Trending Courses",
  "Best Seller",
];
export default function Courses() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const [allProducts, setallProducts] = useState(courses2);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [filtered, setFiltered] = useState(allProducts);
  useEffect(() => {
    setFiltered(
      allProducts.filter((elm) =>
        elm.filterCategories.includes(currentCategory)
      )
    );
  }, [currentCategory, allProducts]);
  const options = {
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".spd5",
      clickable: true,
    },
    navigation: {
      clickable: true,
      nextEl: ".courses1-next",
      prevEl: ".courses1-prev",
    },
  };
  return (
    <section className="tf-spacing-1 section-top-course pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2
                className="fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.1s"
              >
                The World’s Top{" "}
                <span className="tf-secondary-color">Courses</span>
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Online video courses with new additions published every month.
              </div>
            </div>
            <div className="tabs-with-filter style-small type-center">
              <ul
                className="widget-menu-tab overflow-x-auto wow fadeInUp"
                data-wow-delay="0.3s"
              >
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrentCategory(category)}
                    className={`item-title ${
                      currentCategory === category ? "active" : ""
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <div
                className="widget-content-tab wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="widget-content-inner active">
                  <Swiper
                    {...options}
                    modules={[Pagination, Navigation]}
                    className="swiper-container slider-courses-4"
                  >
                    {filtered.map((course, index) => (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <div className="course-item style-2 has-bg hover-img">
                          <div className="features image-wrap">
                            <Image
                              className="lazyload"
                              data-src={course.imgSrc}
                              alt={course.alt}
                              src={course.imgSrc}
                              width={640}
                              height={481}
                            />
                            <div
                              className={`box-wishlist tf-action-btns ${
                                isAddedtoWishlist(course.id) ? "active" : ""
                              } `}
                              onClick={() => toggleWishlist(course.id)}
                            >
                              <i className="flaticon-heart" />
                            </div>
                          </div>
                          <div className="content">
                            <div className="meta">
                              <div className="meta-item">
                                <i className="flaticon-calendar" />
                                <p>{course.calendar}</p>
                              </div>
                              <div className="meta-item">
                                <i className="flaticon-user" />
                                <p>{course.users}</p>
                              </div>
                              <div className="meta-item">
                                <i className="flaticon-clock" />
                                <p>{course.time}</p>
                              </div>
                            </div>
                            <h5 className="fw-5 line-clamp-2">
                              <Link href={`/course-single-v5`}>
                                {course.title}
                              </Link>
                            </h5>
                            <div className="ratings">
                              <div className="number">{course.rating}</div>
                              <i className="icon-star-1" />
                              <i className="icon-star-1" />
                              <i className="icon-star-1" />
                              <i className="icon-star-1" />
                              <svg
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
                              <div className="total">
                                ({course.totalRatings})
                              </div>
                            </div>
                            <div className="author">
                              By:{" "}
                              <a href="#" className="author">
                                {course.author}
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h6 price fw-5">
                                ${course.price}
                              </div>
                              <Link
                                href={`/course-single-v5`}
                                className="tf-btn-arrow"
                              >
                                <span className="fw-5 h6">Enroll Course</span>
                                <i className="icon-arrow-top-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="swiper-pagination pagination-slider pagination-courses1 spd5" />
                  </Swiper>
                  <div className="swiper-button-prev btns-style-arrow courses1-prev" />
                  <div className="swiper-button-next btns-style-arrow courses1-next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
