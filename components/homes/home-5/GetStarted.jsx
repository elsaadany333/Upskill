import React from "react";
import Image from "next/image";
export default function GetStarted() {
  return (
    <section className="section-get-started style5 tf-spacing-11">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="getstared-image">
              <Image
                className="lazyload"
                data-src="/images/section/get-started-3.png"
                alt=""
                src="/images/section/get-started-3.png"
                width={1282}
                height={1128}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="getstared-content">
              <h2 className="title fw-7 wow fadeInUp" data-wow-delay="0.1s">
                Modern Yoga
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
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
              <a href="#" className="tf-btn wow fadeInUp" data-wow-delay="0.4s">
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
