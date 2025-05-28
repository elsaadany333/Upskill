import React from "react";
import Image from "next/image";
export default function Instractor() {
  return (
    <section className="section-teachers tf-spacing-8 pt-0">
      <div className="tf-container">
        <div className="row justify-between">
          <div className="col-lg-6 col-xl-4">
            <div className="teachers-content">
              <h2 className="title fw-7 wow fadeInUp" data-wow-delay="0.1s">
                Truested By Best Instrunctor
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet consectur adipiscing elit incididunt
                labore dolore magna aliquaenim minim.
              </p>
              <div className="tags">
                <div className="tag wow fadeInUp" data-wow-delay="0.3s">
                  <i className="flaticon-check" />
                  <span>Last Education of Bachelor Degree</span>
                </div>
                <div className="tag wow fadeInUp" data-wow-delay="0.35s">
                  <i className="flaticon-check" />
                  <span>More Than 15 Years Experience</span>
                </div>
                <div className="tag wow fadeInUp" data-wow-delay="0.38s">
                  <i className="flaticon-check" />
                  <span>12 Education Award Winning</span>
                </div>
              </div>
              <a
                href="#"
                className="tf-btn teachers-btn wow fadeInUp"
                data-wow-delay="0.4s"
              >
                See All Instructor
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7">
            <div className="teachers-right">
              <div className="user-box-2">
                <Image
                  alt=""
                  className="lazyload"
                  src="/images/instructors/instructors-02.jpg"
                  width={520}
                  height={521}
                />
                <div className="teachers-inner">
                  <div className="top">
                    <div className="item">
                      <i className="flaticon-user" />
                      <span>345 Students</span>
                    </div>
                    <div className="item">
                      <i className="flaticon-play" />
                      <span>34 Course</span>
                    </div>
                  </div>
                  <h6 className="fw-5">Theresa Webb</h6>
                  <p>Professional Web Developer</p>
                  <span>
                    4.9 <i className="icon-star-1" />
                  </span>
                </div>
              </div>
              <div className="max-right">
                <div className="users-box">
                  <div className="box-agent style2">
                    <ul className="agent-img-list">
                      <li className="agent-img-item">
                        <Image
                          className="lazyload"
                          data-src="/images/avatar/user-1.png"
                          alt=""
                          src="/images/avatar/user-1.png"
                          width={84}
                          height={84}
                        />
                      </li>
                      <li className="agent-img-item">
                        <Image
                          className="lazyload"
                          data-src="/images/avatar/user-2.png"
                          alt=""
                          src="/images/avatar/user-2.png"
                          width={84}
                          height={84}
                        />
                      </li>
                      <li className="agent-img-item">
                        <Image
                          className="lazyload"
                          data-src="/images/avatar/user-3.png"
                          alt=""
                          src="/images/avatar/user-3.png"
                          width={84}
                          height={84}
                        />
                      </li>
                      <li className="agent-img-item">
                        <p>1M+</p>
                      </li>
                    </ul>
                  </div>
                  <span>Instrunctor</span>
                </div>
                <div className="user-box-2">
                  <Image
                    alt=""
                    className="lazyload"
                    src="/images/instructors/instructors-01.jpg"
                    width={520}
                    height={521}
                  />
                  <div className="teachers-inner">
                    <div className="top">
                      <div className="item">
                        <i className="flaticon-user" />
                        <span>345 Students</span>
                      </div>
                      <div className="item">
                        <i className="flaticon-play" />
                        <span>34 Course</span>
                      </div>
                    </div>
                    <h6 className="fw-5">Theresa Webb</h6>
                    <p>Professional Web Developer</p>
                    <span>
                      4.9 <i className="icon-star-1" />
                    </span>
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
