import React from "react";
import Image from "next/image";
export default function GetStarted() {
  return (
    <section className="section-get-started style6 tf-spacing-4">
      <div className="tf-container">
        <div className="row items-center">
          <div className="col-md-6">
            <div className="getstared-image">
              <Image
                className="lazyload"
                data-src="/images/section/get-started-4.png"
                alt=""
                src="/images/section/get-started-4.png"
                width={1300}
                height={1129}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="getstared-content">
              <h2
                className="title fw-7 lesp-1 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Learn Latest Skills; <br />
                Advance Your <span className="tf-secondary-color">Career</span>
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim minim.
              </p>
              <a
                href="#"
                className="tf-btn bdru-12 wow fadeInUp"
                data-wow-delay="0.3s"
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
