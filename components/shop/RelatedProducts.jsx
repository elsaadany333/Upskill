"use client";
import { shopItems } from "@/data/products";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
export default function RelatedProducts() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
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
    pagination: {
      el: ".spd13",
      clickable: true,
    },
  };
  return (
    <section className="section-related-product shop-single-related pb-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="fw-7 font-cardo wow fadeInUp" data-wow-delay="0s">
                Related Products
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0s">
                  Lorem ipsum dolor sit amet elit
                </div>
                <Link
                  href={`/blog-grid`}
                  className="tf-btn-arrow wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Show More Products <i className="icon-arrow-top-right" />
                </Link>
              </div>
            </div>
            <Swiper
              {...options}
              modules={[Pagination, Navigation]}
              className="swiper-container slider-courses-5 "
            >
              {shopItems.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="shop-item wow fadeInUp" data-wow-delay="0s">
                    <div className="shop-item-img">
                      <Image
                        className="ls-is-cached lazyloaded"
                        src={elm.imgSrc}
                        data-=""
                        alt=""
                        width={360}
                        height={441}
                      />
                    </div>
                    <div className="content">
                      <h6 className="price fw-5">${elm.price}</h6>
                      <h6 className="fs-16 fw-5 name-book">
                        <Link href={`/shop-single/${elm.id}`}>{elm.title}</Link>
                      </h6>
                      <div className="ratings">
                        <div className="number">{elm.rating}</div>
                        {Array.from({ length: Math.round(elm.rating) }).map(
                          (_, i2) => (
                            <i className="icon-star-1" key={i2} />
                          )
                        )}
                        {Array.from({
                          length: Math.round(5 - elm.rating),
                        }).map((_, i2) => (
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
                        <div className="total">({elm.totalReviews})</div>
                      </div>
                    </div>
                    <a
                      className="tf-btn style-third"
                      onClick={() => addProductToCart(elm.id)}
                    >
                      <i className="flaticon-cart" />
                      {isAddedToCartProducts(elm.id)
                        ? "Already Added"
                        : "Add To Cart"}
                    </a>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination pagination-slider pagination-courses1 pt-32 swiper-pagination-clickable swiper-pagination-bullets pagination-courses5 spd13"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
