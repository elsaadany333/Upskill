"use client";
import React from "react";
import Image from "next/image";
import SortDropdown from "../common/SortDropdown";

export default function Quiz() {
  return (
    <div className="col-xl-9 col-lg-12">
      <div className="section-quizzes-right">
        <div className="section-inner">
          <div className="box-1 section-right">
            <div className="heading-section mb-0 flex justify-between items-center">
              <h6 className="fw-5 fs-22 wow fadeInUp">Quiz</h6>
              <a
                href="#"
                className="tf-btn-arrow wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Add New Quiz <i className="icon-arrow-top-right" />
              </a>
            </div>
            <div className="table-box-1">
              <ul>
                <li>
                  <div className="list-quizzes flex items-center border-bottom wow fadeInUp">
                    <div className="img-name">
                      <Image
                        src="/images/item/js.jpg"
                        data-=""
                        alt=""
                        width={200}
                        height={160}
                      />
                      <a href="" className="fs-15 fw-5">
                        Javascript Basic Quiz
                      </a>
                    </div>
                    <div className="icons">
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-question" />
                          <p>15 Questions</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-clock" />
                          <p>30 Minutes</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-book" />
                          <p>Result</p>
                        </div>
                      </div>
                    </div>
                    <div className="selling-course-btn btn-style-2">
                      <a href="#" className="btn-edit btn">
                        <i className="flaticon-setting-1" />
                      </a>
                      <a href="#" className="btn-remove btn">
                        <i className="flaticon-close" />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list-quizzes flex items-center border-bottom wow fadeInUp">
                    <div className="img-name">
                      <Image
                        src="/images/item/react.jpg"
                        data-=""
                        alt=""
                        width={200}
                        height={160}
                      />
                      <a href="" className="fs-15 fw-5">
                        React Basic Quiz
                      </a>
                    </div>
                    <div className="icons">
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-question" />
                          <p>15 Questions</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-clock" />
                          <p>30 Minutes</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-book" />
                          <p>Result</p>
                        </div>
                      </div>
                    </div>
                    <div className="selling-course-btn btn-style-2">
                      <a href="#" className="btn-edit btn">
                        <i className="flaticon-setting-1" />
                      </a>
                      <a href="#" className="btn-remove btn">
                        <i className="flaticon-close" />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list-quizzes flex items-center border-bottom wow fadeInUp">
                    <div className="img-name">
                      <Image
                        src="/images/item/css.jpg"
                        data-=""
                        alt=""
                        width={200}
                        height={160}
                      />
                      <a href="" className="fs-15 fw-5">
                        CSS Beginner Quiz
                      </a>
                    </div>
                    <div className="icons">
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-question" />
                          <p>15 Questions</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-clock" />
                          <p>30 Minutes</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-book" />
                          <p>Result</p>
                        </div>
                      </div>
                    </div>
                    <div className="selling-course-btn btn-style-2">
                      <a href="#" className="btn-edit btn">
                        <i className="flaticon-setting-1" />
                      </a>
                      <a href="#" className="btn-remove btn">
                        <i className="flaticon-close" />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list-quizzes flex items-center border-bottom wow fadeInUp">
                    <div className="img-name">
                      <Image
                        src="/images/item/vue.jpg"
                        data-=""
                        alt=""
                        width={200}
                        height={160}
                      />
                      <a href="" className="fs-15 fw-5">
                        Vue.js Basic Quiz
                      </a>
                    </div>
                    <div className="icons">
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-question" />
                          <p>15 Questions</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-clock" />
                          <p>30 Minutes</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-book" />
                          <p>Result</p>
                        </div>
                      </div>
                    </div>
                    <div className="selling-course-btn btn-style-2">
                      <a href="#" className="btn-edit btn">
                        <i className="flaticon-setting-1" />
                      </a>
                      <a href="#" className="btn-remove btn">
                        <i className="flaticon-close" />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list-quizzes flex items-center wow fadeInUp">
                    <div wow="" fadeinup="" className="img-name">
                      <Image
                        src="/images/item/html5.jpg"
                        data-=""
                        alt=""
                        width={200}
                        height={160}
                      />
                      <a href="" className="fs-15 fw-5">
                        HTML 5 Basic Quiz
                      </a>
                    </div>
                    <div className="icons">
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-question" />
                          <p>15 Questions</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-clock" />
                          <p>30 Minutes</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-book" />
                          <p>Result</p>
                        </div>
                      </div>
                    </div>
                    <div className="selling-course-btn btn-style-2">
                      <a href="#" className="btn-edit btn">
                        <i className="flaticon-setting-1" />
                      </a>
                      <a href="#" className="btn-remove btn">
                        <i className="flaticon-close" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-2 section-right">
            <div className="heading-section flex justify-between items-center">
              <h6 className="fw-5 fs-22 wow fadeInUp">
                Result - React Basic Quiz
              </h6>
              <a
                href="#"
                className="tf-btn-arrow wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Add New Quiz <i className="icon-arrow-top-right" />
              </a>
            </div>
            <div className="filter pd-40">
              <div className="header-search flex-grow wow fadeInUp">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-search"
                >
                  <fieldset>
                    <input
                      className=""
                      type="text"
                      placeholder="Search for anything"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <div className="button-submit">
                    <button className="" type="submit">
                      <i className="icon-search fs-20" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="sort-by-wrap wow fadeInUp" data-wow-delay="0.1s">
                <div className="sort-wrap">
                  <SortDropdown />
                </div>
              </div>
            </div>
            <div className="wg-box">
              <div className="table-box-2">
                <div className="head wow fadeInUp">
                  <div className="item">
                    <div className="fs-15 fw-5">Students</div>
                  </div>
                  <div className="item">
                    <div className="fs-15 fw-5">Score</div>
                  </div>
                  <div className="item">
                    <div className="fs-15 fw-5">Attempt</div>
                  </div>
                  <div className="item">
                    <div className="fs-15 fw-5">Finishing time</div>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="box-2-item item border-bottom wow fadeInUp">
                      <div className="image">
                        <Image
                          src="/images/instructors/instructors-01.jpg"
                          data-=""
                          alt=""
                          width={520}
                          height={521}
                        />
                      </div>
                      <div className="title">
                        <a className="fs-15 fw-5" href="#">
                          Kristin Watson
                        </a>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">75/100</p>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">3 attempts</p>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">20 July, 9:39am</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="box-2-item item border-bottom wow fadeInUp">
                      <div className="image">
                        <Image
                          src="/images/instructors/instructors-02.jpg"
                          data-=""
                          alt=""
                          width={520}
                          height={521}
                        />
                      </div>
                      <div className="title">
                        <a className="fs-15 fw-5" href="#">
                          Floyd Miles
                        </a>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">75/100</p>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">3 attempts</p>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">20 July, 9:39am</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="box-2-item item border-bottom wow fadeInUp">
                      <div className="image">
                        <Image
                          src="/images/instructors/instructors-03.jpg"
                          data-=""
                          alt=""
                          width={520}
                          height={521}
                        />
                      </div>
                      <div className="title">
                        <a className="fs-15 fw-5" href="#">
                          Wade Warren
                        </a>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">75/100</p>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">3 attempts</p>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">20 July, 9:39am</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="box-2-item item border-bottom wow fadeInUp">
                      <div className="image">
                        <Image
                          src="/images/instructors/instructors-04.jpg"
                          data-=""
                          alt=""
                          width={520}
                          height={521}
                        />
                      </div>
                      <div className="title">
                        <a className="fs-15 fw-5" href="#">
                          Dianne Russell
                        </a>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">75/100</p>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">3 attempts</p>
                      </div>
                      <div>
                        <p className="fs-15 fw-5">20 July, 9:39am</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box-3 section-right">
            <div className="heading-section flex justify-between items-center">
              <h6 className="fw-5 fs-22 wow fadeInUp">
                <Image
                  alt=""
                  src="/images/item/react.jpg"
                  width={200}
                  style={{ width: "fit-content" }}
                  height={160}
                />
                React Basic Quiz
              </h6>
              <span
                className="fs-15 flex items-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <i className="flaticon-clock" /> 00:05:55
              </span>
            </div>
            <div className="line">
              <div className="progress">
                <div className="progress-bar wow fadeInUp">
                  <div
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="exam-progress">
                <span className="fw-5 fs-15 wow fadeInUp">Exam Progress:</span>
                <span className="fw-5 fs-15 wow fadeInUp" data-wow-delay="0.1s">
                  Question 1 out of 5
                </span>
              </div>
            </div>
            <div className="quiz">
              <div className="question">
                <p className="wow fadeInUp">Question 1</p>
                <h5 className="fw-5 fs-20 wow fadeInUp">
                  React is mainly used for building ___.
                </h5>
              </div>
              <div className="answers wow fadeInUp">
                <div className="radio-item">
                  <label htmlFor="radio1">
                    <p>Datebase</p>
                    <input name="radio" type="radio" id="radio1" />
                    <span className="btn-radio" />
                  </label>
                </div>
                <div className="radio-item">
                  <label htmlFor="radio2">
                    <p>Connectivity</p>
                    <input name="radio" type="radio" id="radio2" />
                    <span className="btn-radio" />
                  </label>
                </div>
                <div className="radio-item">
                  <label htmlFor="radio3">
                    <p>User interface</p>
                    <input name="radio" type="radio" id="radio3" />
                    <span className="btn-radio" />
                  </label>
                </div>
                <div className="radio-item">
                  <label htmlFor="radio4">
                    <p>Design Platform</p>
                    <input
                      name="radio"
                      type="radio"
                      id="radio4"
                      defaultChecked=""
                    />
                    <span className="btn-radio" />
                  </label>
                </div>
              </div>
              <a href="" type="submit" className="tf-btn">
                Next <i className="icon-arrow-top-right" />
              </a>
            </div>
            <div className="quiz">
              <div className="question">
                <p className="wow fadeInUp">Question 2</p>
                <a className="fw-5 fs-20 wow fadeInUp">
                  What’s the difference between a 301 and a 302 redirect?
                </a>
              </div>
              <div className="answers wow fadeInUp">
                <div className="checkbox-item">
                  <label htmlFor="checkbox1">
                    <p className="fs-15">
                      301 is used for a permanent page redirection, 302 for a
                      temporary redirection
                    </p>
                    <input name="checkbox" id="checkbox1" type="radio" />
                    <span className="btn-checkbox" />
                  </label>
                </div>
                <div className="checkbox-item">
                  <label htmlFor="checkbox2">
                    <p className="fs-15">
                      301 is used for a permanent page redirection, 302 for a
                      temporary redirection
                    </p>
                    <input
                      name="checkbox"
                      id="checkbox2"
                      type="radio"
                      defaultChecked=""
                    />
                    <span className="btn-checkbox" />
                  </label>
                </div>
                <div className="checkbox-item">
                  <label htmlFor="checkbox3">
                    <p className="fs-15">
                      301 is used for a permanent page redirection, 302 for a
                      temporary redirection
                    </p>
                    <input name="checkbox" id="checkbox3" type="radio" />
                    <span className="btn-checkbox" />
                  </label>
                </div>
                <div className="checkbox-item">
                  <label htmlFor="checkbox4">
                    <p className="fs-15">
                      301 is used for a permanent page redirection, 302 for a
                      temporary redirection.
                    </p>
                    <input name="checkbox" id="checkbox4" type="radio" />
                    <span className="btn-checkbox" />
                  </label>
                </div>
              </div>
              <a href="" type="submit" className="tf-btn">
                Next <i className="icon-arrow-top-right" />
              </a>
            </div>
            <div className="quiz">
              <div className="question">
                <p className="wow fadeInUp">Question 3</p>
                <h5 className="fw-5 fs-20 wow fadeInUp">
                  ___ can be done while multiple elements need to be returned
                  from a component.
                </h5>
              </div>
              <div className="answers style-2 wow fadeInUp">
                <div className="answer">Abstraction</div>
                <div className="answer">Packing</div>
                <div className="answer">Insulation</div>
                <div className="answer">Wrapping</div>
              </div>
              <a href="#" type="submit" className="tf-btn">
                Finish Quiz <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
