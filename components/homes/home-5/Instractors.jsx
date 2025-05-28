"use client";
import { instructors2 } from "@/data/instractors";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Instractors() {
  const options = {
    spaceBetween: 25,
    observer: true,
    observeParents: true,
    breakpoints: {
      425: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 2.3,
      },
      1000: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="section-instructor tf-spacing-12">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                Course Instructors
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
                <Link
                  href={`/instructor-list`}
                  className="tf-btn-arrow wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  See All Instructors <i className="icon-arrow-top-right" />
                </Link>
              </div>
            </div>
            <Swiper
              className="swiper-container slider-courses-5 wow fadeInUp"
              data-wow-delay="0.4s"
              {...options}
              modules={[Pagination, Navigation]}
            >
              {instructors2.map((instructor, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="instructors-item hover-img style-column">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src={instructor.imgSrc}
                        alt=""
                        src={instructor.imgSrc}
                        width={520}
                        height={581}
                      />
                    </div>
                    <div className="entry-content">
                      <ul className="entry-meta">
                        <li>
                          <i className="flaticon-user" />
                          {instructor.students} Students
                        </li>
                        <li>
                          <i className="flaticon-play" />
                          {instructor.courses} Course
                        </li>
                      </ul>
                      <h6 className="entry-title">
                        <Link href={`/instructor-single/${instructor.id}`}>
                          {instructor.name}
                        </Link>
                      </h6>
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
