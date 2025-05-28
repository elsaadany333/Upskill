"use client";
import Image from "next/image";
import { blogArticles2 } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Blogs() {
  const options = {
    spaceBetween: 27,
    speed: 1000,

    slidesPerView: 5,
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
    <section className="section-latest-blog tf-spacing-8">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2
                className="fw-7 letter-spacing-1 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Latest From The Blog
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
            <Swiper
              className="swiper-container tf-sw-mobile wow fadeInUp"
              data-wow-delay="0.3s"
              {...options}
            >
              {blogArticles2.map((article, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="blog-article-item hover-img padding-content">
                    <div className="article-thumb image-wrap">
                      <Image
                        className="lazyload"
                        data-src={article.imgSrc}
                        alt=""
                        src={article.imgSrc}
                        width={article.width}
                        height={article.height}
                      />
                    </div>
                    <div className="article-content">
                      <div className="article-label">
                        <Link href={`/blog-single/${article.id}`} className="">
                          {article.label}
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
            <div className="latest-blog-btn flex justify-center">
              <Link
                href={`/blog-grid`}
                className="tf-btn-arrow wow fadeInUp"
                data-wow-delay="0.35s"
              >
                View All News
                <i className="icon-arrow-top-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
