"use client";
import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="page-title-home6">
      <div className="tf-container">
        <div className="row items-center">
          <div className="col-lg-6">
            <div className="content">
              <h1 className="fw-7 wow fadeInUp" data-wow-delay="0s">
                <span className="tf-secondary-color">Skills</span>
                that drive <br />
                you forward
              </h1>
              <h6 className="wow fadeInUp" data-wow-delay="0.2s">
                Technology and the world of work change fast — with us, you’re
                <br />
                faster. Get the skills to achieve goals and stay competitive.
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
                    Search
                  </button>
                </div>
              </form>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.4s">
                <span>Popular Searches &nbsp;</span>
                Commercial, <span>Corporate</span>, IT and Media, IP and
                Copyright
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image">
              <Image
                className="lazyload"
                data-src="/images/page-title/page-title-home6.png"
                alt=""
                src="/images/page-title/page-title-home6.png"
                width={1422}
                height={1244}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
