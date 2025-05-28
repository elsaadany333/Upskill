import React from "react";
import Image from "next/image";
export default function GetStarted() {
  return (
    <section className="section-get-started style8">
      <div className="tf-container">
        <div className="row items-center">
          <div className="col-md-6">
            <div className="image">
              <Image
                className="ls-is-cached lazyloaded"
                src="/images/section/get-started-7.jpg"
                data-=""
                alt=""
                width={1372}
                height={1400}
              />
              <div className="box-sub-tag-item">
                <ul className="sub-tag-list">
                  <li
                    className="sub-tag-item wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="sub-tag-icon">
                      <i className="flaticon-check" />
                    </div>
                    <p>Live classes online 24/7</p>
                  </li>
                  <li
                    className="sub-tag-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="sub-tag-icon">
                      <i className="flaticon-check" />
                    </div>
                    <p>Online Remote Learning</p>
                  </li>
                  <li
                    className="sub-tag-item wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="sub-tag-icon">
                      <i className="flaticon-check" />
                    </div>
                    <p>Free 7-day trial</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>About Us</p>
                </div>
              </div>
              <h2
                className="title fw-7 lesp-1 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                25K + Client Using <br />
                Our Services
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim minim.
              </p>
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
