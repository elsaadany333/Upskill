"use client";
import Image from "next/image";
import { blogSlides } from "@/data/blogs";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
              modules={[Pagination, Navigation]}
            >
              {blogSlides.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="blog-article-item hover-img">
                    <div className="article-thumb image-wrap">
                      <Image
                        className="lazyload"
                        data-src={slide.imgSrc}
                        alt={slide.imgAlt}
                        src={slide.imgSrc}
                        width={slide.imgWidth}
                        height={slide.imgHeight}
                      />
                    </div>
                    <div className="article-content">
                      <div className="article-label">
                        <Link href={`/blog-single/${slide.id}`} className="">
                          {slide.labelText}
                        </Link>
                      </div>
                      <h5 className="fw-5">
                        <Link href={`/blog-single/${slide.id}`}>
                          {slide.title}
                        </Link>
                      </h5>
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-calendar" />
                          <p>{slide.date}</p>
                        </div>
                        <a href="#" className="meta-item">
                          <i className="flaticon-user-1" />
                          <p>{slide.authorName}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="latest-blog-btn flex justify-center wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <Link href={`/blog-grid`} className="tf-btn-arrow">
                View All News
                <i className="icon-arrow-top-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-blog-img">
        <Image
          className="lazyloaded"
          src="/images/item/item-18.png"
          data-=""
          alt=""
          width={492}
          height={522}
        />
      </div>
    </section>
  );
}
