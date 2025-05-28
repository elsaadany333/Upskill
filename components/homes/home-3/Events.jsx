"use client";
import { events } from "@/data/events";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Events() {
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
    <section className="section-event style-2 tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="title fw-7 wow fadeInUp" data-wow-delay="0.1s">
                Upcoming Events
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet elit
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              className="swiper-container tf-sw-mobile wow fadeInUp"
              data-wow-delay="0.3s"
              {...options}
              modules={[Navigation, Pagination]}
            >
              {events.map((event, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="events-item style2 hover-img">
                    <div className="event-item-img image-wrap">
                      <Image
                        className="lazyload"
                        data-src={event.imgSrc}
                        alt={event.alt}
                        src={event.imgSrc}
                        width={658}
                        height={481}
                      />
                      <div className="event-item-date">
                        <h2 className="date-text fw-5">{event.date.day}</h2>
                        <h6 className="date-text fw-5">{event.date.month}</h6>
                      </div>
                    </div>
                    <div className="event-item-content">
                      <div className="event-item-sub">
                        <div className="item-sub-address">
                          <i className="flaticon-location" />
                          <p>{event.location}</p>
                        </div>
                        <div className="item-sub-time">
                          <i className="flaticon-clock" />
                          <p>{event.time}</p>
                        </div>
                      </div>
                      <div className="event-item-title fw-5 fs-18">
                        <Link href={`/event-single/${event.id}`}>
                          {event.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="event-btn flex justify-center">
              <Link
                href={`/event-list`}
                className="tf-btn-arrow wow fadeInUp"
                data-wow-delay="0.4s"
              >
                View All
                <i className="icon-arrow-top-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
