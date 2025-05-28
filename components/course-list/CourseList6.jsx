"use client";
import { courses2, courses3 } from "@/data/courese";
import React from "react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
export default function CourseList6() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  return (
    <div className="main-content pt-0">
      <div className="page-inner tf-spacing-20 ">
        <section className="list-style-v1">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="fw-5 font-cardo wow fadeInUp">
                    List Style V1
                  </h2>
                  <div className="sub fs-15 wow fadeInUp">
                    Lorem ipsum dolor sit amet elit
                  </div>
                </div>
                <div className=" list grid-list-items-5 ">
                  {courses3.slice(0, 5).map((elm, i) => (
                    <div
                      key={i}
                      className="course-item hover-img wow fadeInUp"
                      data-wow-delay={elm.wowDelay}
                    >
                      <div className="features image-wrap">
                        <Image
                          className="lazyload"
                          alt=""
                          src={elm.imgSrc}
                          width={520}
                          height={380}
                        />
                        <div className="box-tags">
                          {elm.featured && (
                            <a href="#" className="item featured">
                              Featured
                            </a>
                          )}
                          {elm.bestSeller && (
                            <a href="#" className="item best-seller">
                              Best Seller
                            </a>
                          )}
                        </div>
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
                            <p>{elm.lessons} Lessons</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-clock" />
                            <p>{elm.hours} hours</p>
                          </div>
                        </div>
                        <h6 className="fw-5 line-clamp-2">
                          <Link href={`/course-single-v1/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h6>
                        <div className="ratings pb-30">
                          <div className="number">{elm.rating}</div>
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
                          <div className="total">({elm.totalReviews})</div>
                        </div>
                        <div className="author">
                          By:
                          <a href="#" className="author">
                            {elm.author}
                          </a>
                        </div>
                        <div className="bottom">
                          <div className="h6 price fw-5">${elm.price}</div>
                          <Link
                            href={`/course-single-v1/${elm.id}`}
                            className="tf-btn-arrow"
                          >
                            <span className="fw-5 fs-15">Enroll Course</span>
                            <i className="icon-arrow-top-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="list-style-v2">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="fw-5 font-cardo wow fadeInUp">
                    List Style V2
                  </h2>
                  <div className="sub fs-15 wow fadeInUp">
                    Lorem ipsum dolor sit amet elit
                  </div>
                </div>
                <div className="list grid-list-items-4">
                  {courses3.slice(0, 4).map((elm, i) => (
                    <div
                      key={i}
                      className="course-item hover-img h240 wow fadeInUp"
                      data-wow-delay={elm.wowDelay}
                    >
                      <div className="features image-wrap">
                        <Image
                          className="lazyload"
                          alt=""
                          src={elm.imgSrc}
                          width={520}
                          height={380}
                        />

                        {elm.featured && (
                          <div className="box-tags">
                            <a href="#" className="item featured">
                              Featured
                            </a>
                          </div>
                        )}
                        {elm.bestSeller && (
                          <div className="box-tags">
                            <a href="#" className="item best-seller">
                              Best Seller
                            </a>
                          </div>
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
                            <p>{elm.lessons} Lessons</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-user" />
                            <p>{elm.students} Students</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-clock" />
                            <p>{elm.hours} hours</p>
                          </div>
                        </div>
                        <h5 className="fw-5 line-clamp-2">
                          <Link href={`/course-single-v1/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h5>
                        <div className="ratings pb-30">
                          <div className="number">{elm.rating}</div>
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
                          <div className="total">({elm.totalReviews})</div>
                        </div>
                        <div className="author">
                          By:
                          <a href="#" className="author">
                            {elm.author}
                          </a>
                        </div>
                        <div className="bottom">
                          <div className="h5 price fw-5">${elm.price}</div>
                          <Link
                            href={`/course-single-v1/${elm.id}`}
                            className="tf-btn-arrow"
                          >
                            <span className="fw-5 ">Enroll Course</span>
                            <i className="icon-arrow-top-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="list-style-v3">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="fw-5 font-cardo wow fadeInUp">
                    List Style V3
                  </h2>
                  <div className="sub fs-15 wow fadeInUp">
                    Lorem ipsum dolor sit amet elit
                  </div>
                </div>
                <div className="list grid-list-items-4">
                  {courses3.slice(0, 4).map((elm, i) => (
                    <div
                      key={i}
                      className="course-item style-2 has-boxshadow hover-img h240 wow fadeInUp"
                      data-wow-delay={elm.wowDelay}
                    >
                      <div className="features image-wrap">
                        <Image
                          alt=""
                          src={elm.imgSrc}
                          width={520}
                          height={380}
                        />
                        {elm.featured && (
                          <div className="box-tags">
                            <a href="#" className="item featured">
                              Featured
                            </a>
                          </div>
                        )}
                        {elm.bestSeller && (
                          <div className="box-tags">
                            <a href="#" className="item best-seller">
                              Best Seller
                            </a>
                          </div>
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
                            <i className="flaticon-user" />
                            <p>{elm.students}</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-clock" />
                            <p>{elm.hours} hours</p>
                          </div>
                        </div>
                        <h5 className="fw-5 line-clamp-2">
                          <Link href={`/course-single-v1/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h5>
                        <div className="ratings pb-30">
                          <div className="number">{elm.rating}</div>
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
                          <div className="total">({elm.totalReviews})</div>
                        </div>
                        <div className="author">
                          By:
                          <a href="#" className="author">
                            {elm.author}
                          </a>
                        </div>
                        <div className="bottom">
                          <div className="h5 price fw-5">${elm.price}</div>
                          <Link
                            href={`/course-single-v1/${elm.id}`}
                            className="tf-btn-arrow"
                          >
                            <span className="fw-5 ">Enroll Course</span>
                            <i className="icon-arrow-top-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="list-style-v4">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="fw-5 font-cardo wow fadeInUp">
                    List Style V4
                  </h2>
                  <div className="sub fs-15 wow fadeInUp">
                    Lorem ipsum dolor sit amet elit
                  </div>
                </div>
                <div className="list grid-list-items-4">
                  {courses2.slice(0, 4).map((elm, i) => (
                    <div
                      key={i}
                      className="course-item style-2 has-bg hover-img h240 wow fadeInUp"
                      data-wow-delay={elm.wowDelay}
                    >
                      <div className="features image-wrap">
                        <Image
                          className="lazyload"
                          alt=""
                          src={elm.imgSrc}
                          width={640}
                          height={481}
                        />
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
                            <p>{elm.calendar}</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-user" />
                            <p>{elm.users}</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-clock" />
                            <p>{elm.time} hours</p>
                          </div>
                        </div>
                        <h5 className="fw-5 line-clamp-2">
                          <Link href={`/course-single-v1/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h5>
                        <div className="ratings">
                          <div className="number">{elm.rating}</div>
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
                          <div className="total">({elm.totalRatings})</div>
                        </div>
                        <div className="author">
                          By:
                          <a href="#" className="author">
                            {elm.author}
                          </a>
                        </div>
                        <div className="bottom">
                          <div className="h5 price fw-5">${elm.price}</div>
                          <Link
                            href={`/course-single-v1/${elm.id}`}
                            className="tf-btn-arrow"
                          >
                            <span className="fw-5 ">Enroll Course</span>
                            <i className="icon-arrow-top-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="list-style-v5">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="fw-5 font-cardo wow fadeInUp">
                    List Style V5
                  </h2>
                  <div className="sub fs-15 wow fadeInUp">
                    Lorem ipsum dolor sit amet elit
                  </div>
                </div>
                <div className="list grid-list-items-4">
                  {courses3.slice(0, 4).map((elm, i) => (
                    <div
                      key={i}
                      className="course-item style-3 hover-img h240 wow fadeInUp"
                      data-wow-delay={elm.wowDelay}
                    >
                      <div className="features image-wrap">
                        <Image
                          className="lazyload"
                          alt=""
                          src={elm.imgSrc}
                          width={520}
                          height={380}
                        />
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
                            <i className="flaticon-user" />
                            <p>{elm.students}</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-clock" />
                            <p>{elm.hours} hours</p>
                          </div>
                        </div>
                        <h5 className="fw-5 line-clamp-2">
                          <Link href={`/course-single-v1/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h5>
                        <div className="ratings">
                          <div className="number">{elm.rating}</div>
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
                          <div className="total">({elm.totalReviews})</div>
                        </div>
                        <div className="author">
                          By:
                          <a href="#" className="author">
                            {elm.author}
                          </a>
                        </div>
                        <div className="bottom">
                          <div className="h5 price fw-5">${elm.price}</div>
                          <Link
                            href={`/course-single-v1/${elm.id}`}
                            className="tf-btn-arrow"
                          >
                            <span className="fw-5 ">Enroll Course</span>
                            <i className="icon-arrow-top-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="list-style-v6">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="fw-5 font-cardo wow fadeInUp">
                    List Style V6
                  </h2>
                  <div className="sub fs-15 wow fadeInUp">
                    Lorem ipsum dolor sit amet elit
                  </div>
                </div>
                <div className="list grid-list-items-4">
                  {courses3.slice(0, 4).map((elm, i) => (
                    <div
                      key={i}
                      className="course-item style-2 has-boxshadow has-padding hover-img h240 wow fadeInUp"
                      data-wow-delay={elm.wowDelay}
                    >
                      <div className="features image-wrap">
                        <Image
                          className="lazyload"
                          alt=""
                          src={elm.imgSrc}
                          width={520}
                          height={380}
                        />
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
                            <i className="flaticon-user" />
                            <p>{elm.students}</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-clock" />
                            <p>{elm.hours} hours</p>
                          </div>
                        </div>
                        <h5 className="fw-5 line-clamp-2">
                          <Link href={`/course-single-v1/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h5>
                        <div className="ratings">
                          <div className="number">{elm.rating}</div>
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
                          <div className="total">({elm.totalReviews})</div>
                        </div>
                        <div className="author">
                          By:
                          <a href="#" className="author">
                            {elm.author}
                          </a>
                        </div>
                        <div className="bottom">
                          <div className="h5 price fw-5">${elm.price}</div>
                          <Link
                            href={`/course-single-v1/${elm.id}`}
                            className="tf-btn-arrow"
                          >
                            <span className="fw-5 ">Enroll Course</span>
                            <i className="icon-arrow-top-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="list-style-v7">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="fw-5 font-cardo wow fadeInUp">
                    List Style V7
                  </h2>
                  <div className="sub fs-15 wow fadeInUp">
                    Lorem ipsum dolor sit amet elit
                  </div>
                </div>
                <div className="list grid-list-items-4">
                  {courses3.slice(0, 4).map((elm, i) => (
                    <div
                      key={i}
                      className="course-item style-2 has-border has-padding hover-img h240 wow fadeInUp"
                      data-wow-delay={elm.wowDelay}
                    >
                      <div className="features image-wrap">
                        <Image
                          className="lazyload"
                          alt=""
                          src={elm.imgSrc}
                          width={520}
                          height={380}
                        />
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
                            <i className="flaticon-user" />
                            <p>{elm.students}</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-clock" />
                            <p>{elm.hours} hours</p>
                          </div>
                        </div>
                        <h5 className="fw-5 line-clamp-2">
                          <Link href={`/course-single-v1/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h5>
                        <div className="ratings">
                          <div className="number">{elm.rating}</div>
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
                          <div className="total">({elm.totalReviews})</div>
                        </div>
                        <div className="author">
                          By:
                          <a href="#" className="author">
                            {elm.author}
                          </a>
                        </div>
                        <div className="bottom">
                          <div className="h5 price fw-5">${elm.price}</div>
                          <Link
                            href={`/course-single-v1/${elm.id}`}
                            className="tf-btn-arrow"
                          >
                            <span className="fw-5 ">Enroll Course</span>
                            <i className="icon-arrow-top-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="list-style-v8">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-9">
                <div className="heading-section">
                  <h2 className="fw-5 font-cardo wow fadeInUp">
                    List Style V8
                  </h2>
                  <div className="sub fs-15 wow fadeInUp">
                    Lorem ipsum dolor sit amet elit
                  </div>
                </div>
                {courses3.slice(0, 1).map((elm, i) => (
                  <div
                    key={i}
                    className="course-item style-row hover-img h240 wow fadeInUp"
                  >
                    <div className="features image-wrap">
                      <Image
                        className="lazyload"
                        alt=""
                        src={elm.imgSrc}
                        width={520}
                        height={380}
                      />
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
                      <div className="top">
                        <div className="meta mb-0">
                          <div className="meta-item">
                            <i className="flaticon-calendar" />
                            <p>{elm.lessons} Lessons</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-user" />
                            <p>{elm.students} Students</p>
                          </div>
                          <div className="meta-item">
                            <i className="flaticon-clock" />
                            <p>{elm.hours} hours</p>
                          </div>
                        </div>
                        <div className="h5 price fw-5">${elm.price}</div>
                      </div>
                      <h5 className="fw-5 line-clamp-2">
                        <Link href={`/course-single-v1/${elm.id}`}>
                          {elm.title}
                        </Link>
                      </h5>
                      <p className="short-description">
                        Become a Full-Stack Web Developer with just ONE course.
                        HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and
                        DApps
                      </p>
                      <div className="ratings">
                        <div className="number">{elm.rating}</div>
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
                        <div className="total">({elm.totalReviews})</div>
                      </div>
                      <div className="author">
                        By:
                        <a href="#" className="author">
                          {elm.author}
                        </a>
                      </div>
                      {elm.bestSeller && (
                        <div className="box-tags">
                          <Link
                            href={`/course-single-v1/${elm.id}`}
                            className="item best-seller"
                          >
                            Best Seller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
