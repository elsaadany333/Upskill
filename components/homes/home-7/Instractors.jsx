import React from "react";
import Image from "next/image";
export default function Instractors() {
  return (
    <section className="section-become-instructor-2 tf-spacing-25">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-md-6 col-xl-6 col-xxl-5">
            <div className="content-left">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Your Instructor</p>
                </div>
              </div>
              <h2
                className="fw-7 letter-spacing-1 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Hi, I’m&nbsp;Ali Tufan,
                <br />I Will Be Taking You Through Lessons.
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                Create beautiful website with this UpSkill UI template. Get
                started building a site today.
              </p>
              <div className="counter style-3">
                <div
                  className="number-counter wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="counter-content">
                    <span
                      className="number"
                      data-speed={2500}
                      data-to={45}
                      data-inviewport="yes"
                    >
                      45
                    </span>
                  </div>
                  <p className="fs-15">Lesson</p>
                </div>
                <div
                  className="number-counter wow fadeInUp"
                  data-wow-delay="0.45s"
                >
                  <div className="counter-content">
                    <span
                      className="number"
                      data-speed={2500}
                      data-to={20500}
                      data-inviewport="yes"
                    >
                      20500
                    </span>
                    +
                  </div>
                  <p className="fs-15">Students</p>
                </div>
                <div
                  className="number-counter wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="counter-content">
                    <span
                      className="number"
                      data-speed={2500}
                      data-to={24}
                      data-inviewport="yes"
                    >
                      24
                    </span>
                    +
                  </div>
                  <p className="fs-15">Learning Hours</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 col-xxl-5">
            <div className="image-right">
              <Image
                className="ls-is-cached lazyloaded"
                data-src="/images/section/become-instructor-3.png"
                alt=""
                src="/images/section/become-instructor-3.png"
                width={1300}
                height={1129}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
