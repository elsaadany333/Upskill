import React from "react";
import Link from "next/link";
export default function CourseContent() {
  return (
    <>
      <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
        Course Content
      </h2>
      <div className="tf-accordion-style-3 tf-accordion style-course-single">
        <div className="tf-accordion-item">
          <div className="tf-accordion-header">
            <span
              className="tf-accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse11"
              aria-expanded="false"
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
            <div className="tf-accordion-content ">
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-play-1" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    About The Course
                  </Link>
                </li>
                <li className="sub-list">
                  <p>01:20</p>
                  <p className="preview">Preview</p>
                </li>
              </ul>
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-document" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    Tools Introduction
                  </Link>
                </li>
                <li className="sub-list">
                  <p>07:50</p>
                  <p className="preview">Preview</p>
                </li>
              </ul>
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-question" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    Basic Document Structure
                  </Link>
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
                  <Link href={`/lesson`} className="text">
                    HTML5 Foundations Certification Final Project
                  </Link>
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
                  <Link href={`/lesson`} className="text">
                    {" "}
                    About The Course
                  </Link>
                </li>
                <li className="sub-list">
                  <p>01:20</p>
                  <p className="preview">Preview</p>
                </li>
              </ul>
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-document" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    Tools Introduction
                  </Link>
                </li>
                <li className="sub-list">
                  <p>07:50</p>
                  <p className="preview">Preview</p>
                </li>
              </ul>
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-question" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    HTML5 Basic Document Structure
                  </Link>
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
                  <Link href={`/lesson`} className="text">
                    HTML5 Foundations Certification Final Project
                  </Link>
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
                  <Link href={`/lesson`} className="text">
                    {" "}
                    About The Course
                  </Link>
                </li>
                <li className="sub-list">
                  <p>01:20</p>
                  <p className="preview">Preview</p>
                </li>
              </ul>
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-document" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    Tools Introduction
                  </Link>
                </li>
                <li className="sub-list">
                  <p>07:50</p>
                  <p className="preview">Preview</p>
                </li>
              </ul>
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-question" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    HTML5 Basic Document Structure
                  </Link>
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
                  <Link href={`/lesson`} className="text">
                    HTML5 Foundations Certification Final Project
                  </Link>
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
                  <Link href={`/lesson`} className="text">
                    {" "}
                    About The Course
                  </Link>
                </li>
                <li className="sub-list">
                  <p>01:20</p>
                  <p className="preview">Preview</p>
                </li>
              </ul>
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-document" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    Tools Introduction
                  </Link>
                </li>
                <li className="sub-list">
                  <p>07:50</p>
                  <p className="preview">Preview</p>
                </li>
              </ul>
              <ul className="list">
                <li className="icon">
                  <i className="flaticon-question" />
                  <Link href={`/lesson`} className="text">
                    {" "}
                    HTML5 Basic Document Structure
                  </Link>
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
                  <Link href={`/lesson`} className="text">
                    HTML5 Foundations Certification Final Project
                  </Link>
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
      <a href="#" className="tf-btn">
        78 More Sections <i className="icon-arrow-top-right" />
      </a>
    </>
  );
}
