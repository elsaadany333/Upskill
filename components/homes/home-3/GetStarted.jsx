import React from "react";
import Image from "next/image";
export default function GetStarted() {
  return (
    <section className="section-get-started tf-spacing-4">
      <div className="tf-container">
        <div className="row justify-between ">
          <div className="col-xl-6 col-md-6">
            <div className="get-started-image">
              <Image
                className="lazyload"
                src="/images/section/get-started-2.png"
                width={1300}
                height={1217}
                alt="image"
              />
              <div className="badge">
                <div className="badge-item badge-item-default">
                  <div className="badge-item-icon">
                    <i className="icon-play" />
                  </div>
                  <div className="content">
                    <h5 className="title">Ul Design Course</h5>
                    <span className="text">753 Student in this Classes</span>
                  </div>
                </div>
              </div>
              <div className="badge-1">
                <Image
                  alt=""
                  src="/images/section/get-started-video.jpg"
                  width={560}
                  height={454}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <div className="get-started-content">
              <h2 className="title fw-7 wow fadeInUp" data-wow-delay="0.1s">
                Learn Latest Skills; Advance Your Career
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim minim.
              </p>
              <div className="tags wow fadeInUp" data-wow-delay="0.3s">
                <div className="tag ">
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
                className="tf-btn get-started-btn wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Get Started <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
