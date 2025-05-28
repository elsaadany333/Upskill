"use client";
import { categories } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
export default function Hero() {
  const swiperOptions = {
    spaceBetween: 20,
    observer: true,
    loop: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 7,
      },
      1440: {
        slidesPerView: 10,
      },
    },

    navigation: {
      clickable: true,
      nextEl: ".courses10-next",
      prevEl: ".courses10-prev",
    },
  };
  return (
    <div className="page-title-home1">
      <div className="tf-container">
        <div className="row items-center">
          <div className="col-lg-7">
            <div className="content">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>The Leader in Online Learning</p>
                </div>
              </div>
              <h1
                className="fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Get <span className="tf-secondary-color">2500+</span> Best
                Online <br />
                Courses From UpSkilll
              </h1>
              <h6 className="wow fadeInUp" data-wow-delay="0.2s">
                Start, switch, or advance your career with more than 5,000
                courses, <br />
                Professional Certificates, and degrees from world-class
                universities and <br />
                companies.
              </h6>
              <div className="bottom-btns">
                <a
                  href="#"
                  className="tf-btn wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Get Started
                  <i className="icon-arrow-top-right" />
                </a>
                <a
                  href="#"
                  className="tf-btn style-third wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Explore courses
                  <i className="icon-arrow-top-right" />
                </a>
                <div className="box-agent wow fadeInUp" data-wow-delay="0.5s">
                  <ul className="agent-img-list">
                    <li className="agent-img-item">
                      <Image
                        className=" ls-is-cached lazyloaded"
                        data-src="/images/avatar/user-1.png"
                        alt=""
                        width={84}
                        height={84}
                        src="/images/avatar/user-1.png"
                      />
                    </li>
                    <li className="agent-img-item">
                      <Image
                        className=" ls-is-cached lazyloaded"
                        data-src="/images/avatar/user-2.png"
                        alt=""
                        width={84}
                        height={84}
                        src="/images/avatar/user-2.png"
                      />
                    </li>
                    <li className="agent-img-item">
                      <Image
                        className=" ls-is-cached lazyloaded"
                        data-src="/images/avatar/user-3.png"
                        alt=""
                        width={84}
                        height={84}
                        src="/images/avatar/user-3.png"
                      />
                    </li>
                  </ul>
                  <div className="rate">
                    <div className="ratings">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </div>
                    <div className="number-rate">35k+ happy students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="image">
              <Image
                className="lazyload"
                data-src="/images/page-title/page-title-home1.png"
                alt=""
                width={960}
                height={1161}
                src="/images/page-title/page-title-home1.png"
              />
              <Image
                className="item1 animate-cir45"
                alt=""
                width={242}
                height={242}
                src="/images/item/item-1.png"
              />
              <Image
                className="item2 animate-dot-anim-2"
                alt=""
                width={216}
                height={216}
                src="/images/item/item-2.png"
              />
              <Image
                className="item3 animate-dot-anim-3"
                alt=""
                width={230}
                height={230}
                src="/images/item/item-3.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bot-categories">
        <Swiper
          {...swiperOptions}
          className="swiper-container slider-courses-10"
          modules={[Pagination, Navigation]}
        >
          {categories.map((category, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="item">
                <div className="icon">
                  <Image
                    alt={category.title}
                    src={category.src}
                    width={category.width}
                    height={category.height}
                  />
                </div>
                <h6>{category.title}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
