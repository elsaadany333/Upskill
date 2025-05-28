import React from "react";
import Reviews from "../course-single/Reviews";
import Replay from "../course-single/Replay";
import Image from "next/image";
export default function EventSingle({}) {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="event-single-inner">
            <div className="event-decs">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                Event Description
              </h2>
              <p className="text-1 fs-15">
                Lorem ipsum dolor sit amet consectur adipisicing elit, sed do
                eiusmod tempor inc idid unt ut labore et dolore magna aliqua
                enim ad minim veniam, quis nostrud exerec tation ullamco laboris
                nis aliquip commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur enim ipsam.
              </p>
              <p className="text-2 fs-15">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam.
              </p>
            </div>
            <div className="event-content">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                Event Content
              </h2>
              <ul>
                <li className="fs-15">
                  There are no skill prerequisites for this course although it's
                  helpful if you are familiar with operating your computer and .
                </li>
                <li className="fs-15">
                  You can take this course using a Mac, PC or LInux machine.
                </li>
                <li className="fs-15">
                  It is recommended that you download the free Komodo text
                  editor.
                </li>
              </ul>
            </div>
            <div className="event-speaker">
              <h2
                className="text-22 font-outfit fw-5 wow fadeInUp"
                data-wow-delay="0s"
              >
                Event Speakers
              </h2>
              <div className="speaker">
                <div className="swiper-container slider-courses-4 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                  <div
                    className="swiper-wrapper"
                    id="swiper-wrapper-9ebc38c84274317c"
                    aria-live="polite"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 7"
                    >
                      <div
                        className="speaker-item wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/instructors-01.jpg"
                            alt=""
                            src="/images/instructors/instructors-01.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="#" className="h6 fw-5">
                            Theresa Webb
                          </a>
                          <p>Professional Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="2 / 7"
                    >
                      <div
                        className="speaker-item wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/instructors-02.jpg"
                            alt=""
                            src="/images/instructors/instructors-02.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="#" className="h6 fw-5">
                            Ronald Richards
                          </a>
                          <p>Professional Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="3 / 7"
                    >
                      <div
                        className="speaker-item wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/instructors-03.jpg"
                            alt=""
                            src="/images/instructors/instructors-03.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="#" className="h6 fw-5">
                            Savannah Nguyen
                          </a>
                          <p>Professional Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="4 / 7"
                    >
                      <div
                        className="speaker-item wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/instructors-04.jpg"
                            alt=""
                            src="/images/instructors/instructors-04.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="#" className="h6 fw-5">
                            Kristin Watson
                          </a>
                          <p>Professional Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-review-wrap review-wrap">
              <Reviews />
            </div>
            <div className="event-add-review add-review-wrap">
              <Replay />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-event">
            <div className="event-img">
              <Image
                className="ls-is-cached lazyloaded"
                data-src="/images/events/event-7.jpg"
                alt=""
                src="/images/events/event-7.jpg"
                width={658}
                height={480}
              />
            </div>
            <div className="sidebar-event-content">
              <h5 className="fw-5">Event Info</h5>
              <ul>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-dollar"> </i>
                    <p>Cost:</p>
                  </div>
                  <p className="cost">$435</p>
                </li>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-user"> </i>
                    <p>Total Slot:</p>
                  </div>
                  <p>87</p>
                </li>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-unlock"> </i>
                    <p>Booked Slot:</p>
                  </div>
                  <p>4</p>
                </li>
              </ul>
              <a href="#" className="tf-btn">
                Book Now <i className="icon-arrow-top-right" />
              </a>
              <div className="event-social">
                <h6 className="fw-5">Share</h6>
                <ul className="social-list">
                  <li className="social-list">
                    <a href="#">
                      {" "}
                      <i className="flaticon-facebook-1" />
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <i className="flaticon-instagram" />
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <i className="flaticon-linkedin-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
