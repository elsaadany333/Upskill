import React from "react";
import MyCourses from "../course-single/MyCourses";
import Reviews from "../course-single/Reviews";
import Replay from "../course-single/Replay";
import Image from "next/image";
export default function InstractorSingle() {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="instructor-single-inner">
            <div className="instructor-about">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                About Me
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
            <div className="instructor-my-course">
              <MyCourses />
            </div>
            <div className="instructor-review-wrap review-wrap">
              <Reviews />
            </div>
            <div className="instructor-add-review add-review-wrap">
              <Replay />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-instructor">
            <div className="instructor-img">
              <Image
                className="ls-is-cached lazyloaded"
                data-src="/images/instructors/instructors-03.jpg"
                alt=""
                src="/images/instructors/instructors-03.jpg"
                width={520}
                height={521}
              />
            </div>
            <div className="sidebar-instructor-content">
              <h5 className="fw-5">Contact Me</h5>
              <ul>
                <li>
                  <i className="flaticon-location" />
                  <a className="fs-15" href="#">
                    PO Box 16122 Collins Street West Victoria
                  </a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-mail-1" />
                  <a href="mailto:info@upskill.com">info@upskill.com</a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-call" />
                  <a href="tel:+890762205">+89 (619) 076-2205</a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-programming" />
                  <a href="#">www.alitfn.com</a>
                </li>
              </ul>
            </div>
            <div className="instructor-social">
              <h6 className="fw-5">Flow me</h6>
              <ul>
                <li>
                  <a href="#">
                    {" "}
                    <i className="flaticon-facebook-1" />
                  </a>
                </li>
                <li className="course-social-item">
                  <a href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li className="course-social-item">
                  <a href="#">
                    <i className="flaticon-instagram" />
                  </a>
                </li>
                <li className="course-social-item">
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
  );
}
