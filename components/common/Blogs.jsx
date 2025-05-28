"use client";
import { blogArticles } from "@/data/blogs";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Blogs({ titleFont = "font-cardo" }) {
  const options = {
    spaceBetween: 28,
    speed: 1000,

    slidesPerView: 4,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className="section-blog tf-spacing-7 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2
                className={`fw-7 ${titleFont} wow fadeInUp`}
                data-wow-delay="0s"
              >
                Latest From The <span className="tf-secondary-color">Blog</span>
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
                <Link
                  href={`/blog-grid`}
                  className="tf-btn-arrow wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  View All News <i className="icon-arrow-top-right" />
                </Link>
              </div>
            </div>
            <Swiper
              {...options}
              modules={[Pagination, Navigation]}
              className="swiper-container tf-sw-mobile wow fadeInUp"
              data-wow-delay="0.4s"
            >
              {blogArticles.map((article, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="blog-article-item hover-img">
                    <div className="article-thumb image-wrap">
                      <Image
                        className="lazyload"
                        data-src={article.imgSrc}
                        alt={article.alt}
                        src={article.imgSrc}
                        width={1880}
                        height={1100}
                      />
                    </div>
                    <div className="article-content">
                      <div className="article-label">
                        <Link href={`/blog-single/${article.id}`}>
                          {article.category}
                        </Link>
                      </div>
                      <h5 className="fw-5">
                        <Link href={`/blog-single/${article.id}`}>
                          {article.title}
                        </Link>
                      </h5>
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-calendar" />
                          <p>{article.date}</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-message" />
                          <p>{article.comments}</p>
                        </div>
                        <a href="#" className="meta-item">
                          <i className="flaticon-user-1" />
                          <p>{article.author}</p>
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
