"use client";

import { blogArticles3 } from "@/data/blogs";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Blogs() {
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
    <section className="tf-spacing-11 bg-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                Latest From The Blog
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
              className="swiper-container tf-sw-mobile wow fadeInUp"
              data-wow-delay="0.4s"
              {...options}
              modules={[Navigation, Pagination]}
            >
              {blogArticles3.map((article, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="blog-article-item style-2 hover-img">
                    <div className="article-thumb image-wrap">
                      <Image
                        className="lazyload"
                        data-src={article.imgSrc}
                        alt=""
                        src={article.imgSrc}
                        width={660}
                        height={521}
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
