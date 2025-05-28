"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

export default function Lesson() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const loadMoreParagraph = () => {
      const showMoreItems = document.querySelectorAll(".show-more-desc-item");

      if (showMoreItems.length > 0) {
        showMoreItems.forEach((item) => {
          const showMoreBtn = item.querySelector(".view-more-paragraph");

          const paragraph = item.querySelector(".showmore-paragraph");

          if (showMoreBtn && paragraph) {
            // Show more paragraph
            showMoreBtn.addEventListener("click", function () {
              paragraph.style.height = paragraph.scrollHeight + "px";

              showMoreBtn.style.display = "none";
            });

            // Hide paragraph
          }
        });
      }
    };

    loadMoreParagraph();

    // Cleanup event listeners when the component unmounts
    return () => {
      const showMoreItems = document.querySelectorAll(".show-more-desc-item");
      showMoreItems.forEach((item) => {
        const showMoreBtn = item.querySelector(".btn-show-more-decs");
        const hideBtn = item.querySelector(".btn-hide-decs");

        if (showMoreBtn && hideBtn) {
          showMoreBtn.removeEventListener("click", function () {});
          hideBtn.removeEventListener("click", function () {});
        }
      });
    };
  }, []);
  return (
    <>
      <div className="main-content main-content-page-lesson">
        <section className="lesson-page-sidebar overflow-y-auto">
          <div className="sidebar-title">
            <h2 className="text-22 fw-5">Course Content</h2>
            <i className="flaticon-close-1 sidebar-title-close" />
          </div>
          <div className="sidebar-search-lesson">
            <form onSubmit={(e) => e.preventDefault()} className="form-search">
              <fieldset>
                <input
                  className=""
                  type="text"
                  placeholder="Search Lesson"
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
          <div className="page-lesson-accordion tf-accordion-style-3 tf-accordion">
            <div className="tf-accordion-item">
              <div className="tf-accordion-header">
                <span
                  className="tf-accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse11"
                  aria-expanded="true"
                  aria-controls="collapse11"
                >
                  Program Information 2023/2024 Edition
                </span>
                <div className="sub-header">
                  <p>3 lectures</p>
                  <p>9 min</p>
                </div>
              </div>
              <div
                id="collapse11"
                className="tf-accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="tf-accordion-content">
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-play-1" />
                      <a href="#" className="text">
                        {" "}
                        About The Course
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>01:20</p>
                      <p className="preview">Preview</p>
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-document" />
                      <a href="#" className="text">
                        {" "}
                        Tools Introduction
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>07:50</p>
                      <p className="preview">Preview</p>
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-question" />
                      <a href="#" className="text">
                        Basic Document Structure
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>06:30</p>
                      <p className="preview">Preview</p>
                      <i className="flaticon-lock" />
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-play-1" />
                      <p className="text">
                        HTML5 Foundations Certification Final Project
                      </p>
                    </li>
                    <li className="sub-list">
                      <p>02:40</p>
                      <i className="flaticon-lock" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tf-accordion-item">
              <div className="tf-accordion-header">
                <span
                  className="tf-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse12"
                  aria-expanded="false"
                  aria-controls="collapse12"
                >
                  Certified HTML5 Foundations 2023/2024
                </span>
                <div className="sub-header">
                  <p>3 lectures</p>
                  <p>9 min</p>
                </div>
              </div>
              <div
                id="collapse12"
                className="tf-accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="tf-accordion-content">
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-play-1" />
                      <a href="#" className="text">
                        {" "}
                        About The Course
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>01:20</p>
                      <p className="preview">Preview</p>
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-document" />
                      <a href="#" className="text">
                        {" "}
                        Tools Introduction
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>07:50</p>
                      <p className="preview">Preview</p>
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-question" />
                      <span className="text">
                        {" "}
                        HTML5 Basic Document Structure
                      </span>
                    </li>
                    <li className="sub-list">
                      <p>06:30</p>
                      <p className="preview">Preview</p>
                      <i className="flaticon-lock" />
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-play-1" />
                      <span className="text">
                        HTML5 Foundations Certification Final Project
                      </span>
                    </li>
                    <li className="sub-list">
                      <p>02:40</p>
                      <i className="flaticon-lock" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tf-accordion-item">
              <div className="tf-accordion-header">
                <span
                  className="tf-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse13"
                  aria-expanded="false"
                  aria-controls="collapse13"
                >
                  Your Development Toolbox
                </span>
                <div className="sub-header">
                  <p>3 lectures</p>
                  <p>9 min</p>
                </div>
              </div>
              <div
                id="collapse13"
                className="tf-accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="tf-accordion-content">
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-play-1" />
                      <a href="#" className="text">
                        {" "}
                        About The Course
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>01:20</p>
                      <p className="preview">Preview</p>
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-document" />
                      <a href="#" className="text">
                        {" "}
                        Tools Introduction
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>07:50</p>
                      <p className="preview">Preview</p>
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-question" />
                      <span className="text">
                        {" "}
                        HTML5 Basic Document Structure
                      </span>
                    </li>
                    <li className="sub-list">
                      <p>06:30</p>
                      <p className="preview">Preview</p>
                      <i className="flaticon-lock" />
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-play-1" />
                      <span className="text">
                        HTML5 Foundations Certification Final Project
                      </span>
                    </li>
                    <li className="sub-list">
                      <p>02:40</p>
                      <i className="flaticon-lock" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tf-accordion-item">
              <div className="tf-accordion-header">
                <span
                  className="tf-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse14"
                  aria-expanded="false"
                  aria-controls="collapse14"
                >
                  JavaScript Specialist
                </span>
                <div className="sub-header">
                  <p>3 lectures</p>
                  <p>9 min</p>
                </div>
              </div>
              <div
                id="collapse14"
                className="tf-accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="tf-accordion-content">
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-play-1" />
                      <a href="#" className="text">
                        {" "}
                        About The Course
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>01:20</p>
                      <p className="preview">Preview</p>
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-document" />
                      <a href="#" className="text">
                        {" "}
                        Tools Introduction
                      </a>
                    </li>
                    <li className="sub-list">
                      <p>07:50</p>
                      <p className="preview">Preview</p>
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-question" />
                      <span className="text">
                        {" "}
                        HTML5 Basic Document Structure
                      </span>
                    </li>
                    <li className="sub-list">
                      <p>06:30</p>
                      <p className="preview">Preview</p>
                      <i className="flaticon-lock" />
                    </li>
                  </ul>
                  <ul className="list">
                    <li className="icon">
                      <i className="flaticon-play-1" />
                      <span className="text">
                        HTML5 Foundations Certification Final Project
                      </span>
                    </li>
                    <li className="sub-list">
                      <p>02:40</p>
                      <i className="flaticon-lock" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /section sidebar lesson */}
        <section className="lesson-page-content section-page-course">
          <div className="lesson-top">
            <div className="top-left">
              <Link href={`course-single-v1/1`} className="btns-style-arrow">
                <i className="icon-arrow-left" />
              </Link>
              <h4 className="fw-5">
                The Complete Histudy 2023: From Zero to Expert!
              </h4>
            </div>
            <div className="icon-right">
              <i className="flaticon-close-1" />
              <a className="btn-nav-lesson" href="#menu"></a>
            </div>
          </div>
          <div className="lesson-video widget-video">
            <Image
              className="ls-is-cached lazyloaded"
              data-src="/images/courses/courses-04.jpg"
              alt=""
              src="/images/courses/courses-04.jpg"
              width={520}
              height={380}
            />
            <a onClick={() => setOpen(true)} className="popup-youtube">
              <i className="flaticon-play fs-18" />
            </a>
          </div>
          <div className="lesson-inner course-single-inner">
            <div className="page-learn">
              <h2 className="learn-head text-22 fw-5">What you'll learn</h2>
              <div className="learn-inner">
                <ul className="learn-list">
                  <li className="item">
                    <i className="flaticon-check" />
                    Prepare for Industry Certification Exam
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    Hours and Hours of Video Instruction
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    Over 25 Engaging Lab Exercises
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    Instructor Available by Email or on the Forums
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    Comprehensive Coverage of HTML and CSS
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    Server Side Development with PHP
                  </li>
                </ul>
                <ul className="learn-list">
                  <li className="item">
                    <i className="flaticon-check" />
                    Earn Certification that is Proof of your Competence
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    Dozens of Code Examples to Download and Study
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    All Lab Solutions
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    All Free Tools
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    Client Side Programming with Javascript
                  </li>
                  <li className="item">
                    <i className="flaticon-check" />
                    Learn Database Development with mySQL
                  </li>
                </ul>
              </div>
            </div>
            <div className="page-requirement">
              <h2 className="text-22 fw-5">Requirements</h2>
              <ul className="list">
                <li className="item">
                  There are no skill prerequisites for this course although it's
                  helpful if you are familiar with operating your internet
                  internet internet internet internet internet.
                </li>
                <li className="item">
                  You can take this course using a Mac, PC or LInux machine.
                </li>
                <li className="item">
                  It is recommended that you download the free Komodo text
                  editor.
                </li>
              </ul>
            </div>
            <div className="page-desc show-more-desc-item">
              <h2 className="text-22 fw-5">About This Course</h2>
              <p className="fw-4 fs-15">
                Lorem ipsum dolor sit amet consectur adipisicing elit, sed do
                eiusmod tempor inc idid unt ut labore et dolore magna aliqua
                enim ad minim veniam, quis nostrud exerec tation ullamco laboris
                nis aliquip commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur enim ipsam. <br />
                <br />
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam. <br />
                <br />
              </p>
              <div
                className="showmore-paragraph"
                style={{
                  display: "block",
                  height: "0px",
                  overflow: "hidden",
                  transition: "0.4s",
                }}
              >
                <p className="fw-4 fs-15">
                  Lorem ipsum dolor sit amet consectur adipisicing elit, sed do
                  eiusmod tempor inc idid unt ut labore et dolore magna aliqua
                  enim ad minim veniam, quis nostrud exerec tation ullamco
                  laboris nis aliquip commodo consequat duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur enim ipsam. <br />
                  <br />
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam.
                </p>
              </div>
              <div className="more-text">
                <div className="btn-show-more-decs view-more-paragraph fw-5">
                  Show More <i className="icon-arrow-bottom" />
                </div>
              </div>
            </div>
            <div className="page-btn">
              <a href="#" className="tf-btn btn-prev">
                Previous
                <i className="icon-arrow-top-right" />
              </a>
              <a href="#" className="tf-btn btn-next">
                Next
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="MLpWrANjFbI"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
