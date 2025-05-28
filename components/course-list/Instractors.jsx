import React from "react";
import Image from "next/image";
export default function Instractors() {
  return (
    <section className="section-categories-instructors">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section">
              <h3 className="fw-5 wow fadeInUp" data-wow-delay={0}>
                Popular&nbsp;Instructors
              </h3>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay={0}>
                These real-world experts are highly rated by learners like you.
              </div>
            </div>
            <div className="wrap-instructor">
              <div className="instructors-item wow fadeInUp" data-wow-delay={0}>
                <div className="image-wrapper">
                  <Image
                    className="lazyload"
                    data-src="/images/instructors/instructors-01.jpg"
                    alt=""
                    src="/images/instructors/instructors-01.jpg"
                    width={520}
                    height={521}
                  />
                </div>
                <div className="entry-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="flaticon-user" />
                      345 Students
                    </li>
                    <li>
                      <i className="flaticon-play" />
                      34 Course
                    </li>
                  </ul>
                  <h6 className="entry-title">
                    <a href="#">Theresa Webb</a>
                  </h6>
                  <p className="short-description">
                    Professional Web Developer
                  </p>
                  <div className="ratings">
                    <div className="number">4.9</div>
                    <i className="icon-star-1" />
                  </div>
                </div>
              </div>
              <div
                className="instructors-item wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="image-wrapper">
                  <Image
                    className="lazyload"
                    data-src="/images/instructors/instructors-02.jpg"
                    alt=""
                    src="/images/instructors/instructors-02.jpg"
                    width={520}
                    height={521}
                  />
                </div>
                <div className="entry-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="flaticon-user" />
                      345 Students
                    </li>
                    <li>
                      <i className="flaticon-play" />
                      34 Course
                    </li>
                  </ul>
                  <h6 className="entry-title">
                    <a href="#">Ronald Richards</a>
                  </h6>
                  <p className="short-description">
                    Professional Web Developer
                  </p>
                  <div className="ratings">
                    <div className="number">4.9</div>
                    <i className="icon-star-1" />
                  </div>
                </div>
              </div>
              <div
                className="instructors-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="image-wrapper">
                  <Image
                    className="lazyload"
                    data-src="/images/instructors/instructors-03.jpg"
                    alt=""
                    src="/images/instructors/instructors-03.jpg"
                    width={520}
                    height={521}
                  />
                </div>
                <div className="entry-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="flaticon-user" />
                      345 Students
                    </li>
                    <li>
                      <i className="flaticon-play" />
                      34 Course
                    </li>
                  </ul>
                  <h6 className="entry-title">
                    <a href="#">Savannah Nguyen</a>
                  </h6>
                  <p className="short-description">
                    Professional Web Developer
                  </p>
                  <div className="ratings">
                    <div className="number">4.9</div>
                    <i className="icon-star-1" />
                  </div>
                </div>
              </div>
              <div
                className="instructors-item wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="image-wrapper">
                  <Image
                    className="lazyload"
                    data-src="/images/instructors/instructors-04.jpg"
                    alt=""
                    src="/images/instructors/instructors-04.jpg"
                    width={520}
                    height={521}
                  />
                </div>
                <div className="entry-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="flaticon-user" />
                      345 Students
                    </li>
                    <li>
                      <i className="flaticon-play" />
                      34 Course
                    </li>
                  </ul>
                  <h6 className="entry-title">
                    <a href="#">Kristin Watson</a>
                  </h6>
                  <p className="short-description">
                    Professional Web Developer
                  </p>
                  <div className="ratings">
                    <div className="number">4.9</div>
                    <i className="icon-star-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
