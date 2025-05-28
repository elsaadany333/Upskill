"use client";
import { categories3 } from "@/data/categories";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Categories() {
  const swiperOptions = {
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
        spaceBetween: 25,
      },
    },
  };
  return (
    <section className="section-category-h6 tf-spacing-11">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                Outstanding Categories
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                  Lorem ipsum dolor sit amet elit
                </div>
                <Link
                  href={`/categories`}
                  className="tf-btn-arrow wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Show More Categories <i className="icon-arrow-top-right" />
                </Link>
              </div>
            </div>
            <Swiper
              className="swiper-container slider-category wow fadeInUp"
              modules={[Pagination, Navigation]}
              {...swiperOptions}
            >
              {categories3.map((category, i) => (
                <SwiperSlide className="swiper-slide" key={i}>
                  <div className="categories-item-style-4 hover-img">
                    <Link
                      href={`/categories`}
                      className="categories-image image-wrap"
                    >
                      <Image
                        className="lazyload"
                        data-src={category.imgSrc}
                        alt={category.title}
                        src={category.imgSrc}
                        width={240} // Adjust as needed per category
                        height={150} // Adjust as needed per category
                      />
                    </Link>
                    <div className="categories-content text-center">
                      <h6 className="fw-5">
                        <Link href={`/categories`}>{category.title}</Link>
                      </h6>
                      <div className="categories-label">
                        <a href="#" className="">
                          {category.coursesCount} Course{" "}
                          <i className="icon-arrow-top-right" />
                        </a>
                      </div>
                    </div>
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
