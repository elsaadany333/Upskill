"use client";
import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="page-title-home3">
      <div className="image-bg">
        <div className="image1">
          <Image
            alt=""
            src="/images/page-title/home3-01.png"
            width={200}
            height={200}
          />
        </div>
        <div className="image2">
          <Image
            alt=""
            src="/images/page-title/home3-02.png"
            width={400}
            height={400}
          />
        </div>
        <div className="image3">
          <Image
            alt=""
            src="/images/page-title/home3-03.png"
            width={300}
            height={300}
          />
        </div>
        <div className="image4">
          <Image
            alt=""
            src="/images/page-title/home3-04.png"
            width={200}
            height={200}
          />
        </div>
        <div className="image5">
          <Image
            alt=""
            src="/images/page-title/home3-05.png"
            width={200}
            height={200}
          />
        </div>
        <div className="image6">
          <Image
            alt=""
            src="/images/page-title/home3-06.png"
            width={400}
            height={400}
          />
        </div>
        <div className="image7">
          <Image
            alt=""
            src="/images/page-title/home3-07.png"
            width={300}
            height={300}
          />
        </div>
        <div className="image8">
          <Image
            alt=""
            src="/images/page-title/home3-08.png"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="tf-container full">
        <div className="row justify-center">
          <div className="col-12">
            <div className="content">
              <h1 className="fw-7 wow fadeInUp" data-wow-delay="0.1s">
                Grow Your Skills And Advance Career
              </h1>
              <h6 className="wow fadeInUp" data-wow-delay="0.2s">
                Start, switch, or advance your career with more than 5,000
                courses, Professional Certificates, and degrees from world-class
                universities and companies.
              </h6>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-search-courses wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="icon">
                  <i className="icon-keyboard" />
                </div>
                <fieldset>
                  <input
                    className=""
                    type="text"
                    placeholder="Search our 4000+ courses"
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
              <ul className="wrap-list-text-check1">
                <li className="wow fadeInUp" data-wow-delay="0.3s">
                  <i className="icon-check" />
                  Over 12 million students
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.33s">
                  <i className="icon-check" />
                  More than 60,000 courses
                </li>
                <li className="wow fadeInUp" data-wow-delay="0.36s">
                  <i className="icon-check" />
                  Learn anything online
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
