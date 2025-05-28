import React from "react";
import Image from "next/image";
export default function GetStarted() {
  return (
    <section className="section-get-started style7 tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="row items-center">
          <div className="col-md-6">
            <div className="getstared-image">
              <Image
                className="lazyload"
                data-src="/images/section/get-started-7.png"
                alt=""
                src="/images/section/get-started-7.png"
                width={481}
                height={573}
              />
              <Image
                className="lazyload image-video-started"
                data-src="/images/section/get-started-video.jpg"
                alt=""
                src="/images/section/get-started-video.jpg"
                width={560}
                height={454}
              />
              <div className="badge-item badge-item-style-2">
                <div className="badge-item-icon">
                  <i className="icon-play" />
                </div>
                <div className="content">
                  <h5 className="title">Ul Design Course</h5>
                  <span className="text"> 753 Student in this Classes </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="getstared-content">
              <h2
                className="title fw-7 lesp-1 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Learn Latest Skills; Advance Your Career
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim minim.
              </p>
              <div className="tags wow fadeInUp" data-wow-delay="0.3s">
                <div className="tag">
                  <i className="flaticon-check" />
                  <span>Expert Trainers</span>
                </div>
                <div className="tag">
                  <i className="flaticon-check" />
                  <span>Online Remote Learning</span>
                </div>
                <div className="tag">
                  <i className="flaticon-check" />
                  <span>Lifetime Access</span>
                </div>
              </div>
              <a
                href="#"
                className="tf-btn bdru-12 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Get Started
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
