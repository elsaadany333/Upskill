import React from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="col-xl-9 col-lg-12">
      <div className="section-dashboard-right">
        <div className="section-icons">
          <div className="row">
            <div className="icons-items">
              <div className="icons-box style-4 wow fadeInUp">
                <div className="icons">
                  <i className="flaticon-play-2" />
                </div>
                <div className="content">
                  <h6>Total Course</h6>
                  <span className="num-count fs-26 fw-5">90</span>
                </div>
              </div>
              <div
                className="icons-box style-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="icons">
                  <i className="flaticon-alarm" />
                </div>
                <div className="content">
                  <h6>Published Course</h6>
                  <span className="num-count fs-26 fw-5">28</span>
                </div>
              </div>
              <div
                className="icons-box style-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icons">
                  <i className="flaticon-video" />
                </div>
                <div className="content">
                  <h6>Pending Course</h6>
                  <span className="num-count fs-26 fw-5">45</span>
                </div>
              </div>
            </div>
            <div className="icons-items">
              <div className="icons-box style-4 wow fadeInUp">
                <div className="icons">
                  <i className="flaticon-user" />
                </div>
                <div className="content">
                  <h6>Total Student</h6>
                  <span className="num-count fs-26 fw-5">78</span>
                </div>
              </div>
              <div
                className="icons-box style-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="icons">
                  <i className="flaticon-user-2" />
                </div>
                <div className="content">
                  <h6>Student Completed</h6>
                  <span className="num-count fs-26 fw-5">94</span>
                </div>
              </div>
              <div
                className="icons-box style-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icons">
                  <i className="flaticon-graduation" />
                </div>
                <div className="content">
                  <h6>Student In-progress</h6>
                  <span className="num-count fs-26 fw-5">53</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section-learn */}
        <div className="section-learn">
          <div className="heading-section flex justify-between items-center">
            <h6 className="fw-5 fs-22 wow fadeInUp">Best Selling Courses</h6>
            <a
              href="#"
              className="tf-btn-arrow wow fadeInUp"
              data-wow-delay="0.1s"
            >
              View All <i className="icon-arrow-top-right" />
            </a>
          </div>
          <div className="wg-box">
            <div className="table-selling-course wow fadeInUp">
              <div className="head">
                <div className="item">
                  <div className="fs-15 fw-5">Course Name</div>
                </div>
                <div className="item">
                  <div className="fs-15 fw-5">Sales</div>
                </div>
                <div className="item">
                  <div className="fs-15 fw-5">Amount</div>
                </div>
                <div className="item">
                  <div className="fs-15 fw-5">Action</div>
                </div>
              </div>
              <ul>
                <li>
                  <div className="selling-course-item item my-20 ptable-20 border-bottom">
                    <div className="image">
                      <Image
                        className="lazyload"
                        src="/images/courses/courses-01.jpg"
                        data-=""
                        alt=""
                        width={520}
                        height={380}
                      />
                    </div>
                    <div className="title">
                      <a className="fs-15 fw-5" href="#">
                        Building Scalable APIs with GraphQL
                      </a>
                    </div>
                    <div>
                      <p className="fs-15 fw-5">34</p>
                    </div>
                    <div>
                      <p className="fs-15 fw-5">$1,25,478</p>
                    </div>
                    <div>
                      <div className="selling-course-btn btn-style-2">
                        <a href="#" className="btn-edit btn">
                          <i className="flaticon-edit" />
                        </a>
                        <a href="#" className="btn-remove btn">
                          <i className="flaticon-close" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="selling-course-item item my-20 ptable-20 border-bottom">
                    <div className="image">
                      <Image
                        className="lazyload"
                        src="/images/courses/courses-23.jpg"
                        data-=""
                        alt=""
                        width={596}
                        height={480}
                      />
                    </div>
                    <div className="title">
                      <a className="fs-15 fw-5" href="#">
                        HTML5 Web Front End Development
                      </a>
                    </div>
                    <div>
                      <p className="fs-15 fw-5">34</p>
                    </div>
                    <div>
                      <p className="fs-15 fw-5">$1,25,478</p>
                    </div>
                    <div>
                      <div className="selling-course-btn btn-style-2">
                        <a href="#" className="btn-edit btn">
                          <i className="flaticon-edit" />
                        </a>
                        <a href="#" className="btn-remove btn">
                          <i className="flaticon-close" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="selling-course-item item my-20 ptable-20 border-bottom">
                    <div className="image">
                      <Image
                        className="lazyload"
                        src="/images/courses/courses-24.jpg"
                        data-=""
                        alt=""
                        width={520}
                        height={381}
                      />
                    </div>
                    <div className="title">
                      <a className="fs-15 fw-5" href="#">
                        Learn JavaScript Courses from Scratch
                      </a>
                    </div>
                    <div>
                      <p className="fs-15 fw-5">34</p>
                    </div>
                    <div>
                      <p className="fs-15 fw-5">$1,25,478</p>
                    </div>
                    <div>
                      <div className="selling-course-btn btn-style-2">
                        <a href="#" className="btn-edit btn">
                          <i className="flaticon-edit" />
                        </a>
                        <a href="#" className="btn-remove btn">
                          <i className="flaticon-close" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="selling-course-item item ptable-20 border-bottom">
                    <div className="image">
                      <Image
                        className="lazyload"
                        src="/images/courses/courses-25.jpg"
                        data-=""
                        alt=""
                        width={520}
                        height={381}
                      />
                    </div>
                    <div className="title">
                      <a className="fs-15 fw-5" href="#">
                        Get Started: React Js Courses
                      </a>
                    </div>
                    <div>
                      <p className="fs-15 fw-5">34</p>
                    </div>
                    <div>
                      <p className="fs-15 fw-5">$1,25,478</p>
                    </div>
                    <div>
                      <div className="selling-course-btn btn-style-2">
                        <a href="#" className="btn-edit btn">
                          <i className="flaticon-edit" />
                        </a>
                        <a href="#" className="btn-remove btn">
                          <i className="flaticon-close" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <ul className="wg-pagination justify-center pt-0">
            <Pagination />
          </ul>
        </div>
      </div>
      {/* section-learn */}
    </div>
  );
}
