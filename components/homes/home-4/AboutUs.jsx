import React from "react";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="section-about-box style-1 tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="row items-center">
          <div className="col-md-6 col-lg-7">
            <div className="box-img">
              <div className="wrap-image-agent">
                <div className="image">
                  <Image
                    className="lazyload"
                    data-src="/images/section/about-2.jpg"
                    alt=""
                    src="/images/section/about-2.jpg"
                    width={681}
                    height={1001}
                  />
                </div>
              </div>
              <div className="wrap-images">
                <div className="image">
                  <Image
                    className="lazyload"
                    data-src="/images/section/about-3.jpg"
                    alt=""
                    src="/images/section/about-3.jpg"
                    width={681}
                    height={681}
                  />
                </div>
                <div className="image">
                  <Image
                    className="lazyload"
                    data-src="/images/section/about-4.jpg"
                    alt=""
                    src="/images/section/about-4.jpg"
                    width={681}
                    height={681}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="content-wrap">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Our Story</p>
                </div>
              </div>
              <h2
                className="title-content fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <span className="tf-secondary-color">Exploring</span> Color
                Theory: Mixing <br />
                And Matching Hues
              </h2>
              <p className="text-content wow fadeInUp" data-wow-delay="0.3s">
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim minim.
              </p>
              <a
                className="tf-btn style-secondary wow fadeInUp"
                data-wow-delay="0.4s"
                href="#"
              >
                Learn More
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
