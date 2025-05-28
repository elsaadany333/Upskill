"use client";
import Counter from "@/components/common/Counter";
import React from "react";

export default function Countdown() {
  return (
    <section className="section-form-home-8 tf-spacing-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-7">
            <div className="content">
              <h2
                className="title fw-7 lesp-1 text-white wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Free Resources Learning <br />
                English For Beginner
              </h2>
              <p
                className="fs-15 text-white wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Lorem ipsum dolor sit amet consectur adipiscing elit sed
                <br />
                eiusmod ex tempor incididunt labore dolore magna aliquaenim
                <br />
                minim.
              </p>
              {/* count-down */}
              <span className="js-countdown wow fadeInUp" data-wow-delay="0.3s">
                <Counter max={3146400} />
              </span>
              {/* ./count-down */}
            </div>
          </div>
          <div className="col-md-5">
            <div className="forms-courses">
              <h3>
                Create your free account now and immediately get access to 100s
                of online courses.
              </h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-get-it-now"
              >
                <div className="cols">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field1"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field1">
                      First Name
                    </label>
                  </fieldset>
                </div>
                <div className="cols">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field2"
                      type="email"
                      placeholder=""
                      name="email"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field2">
                      Email
                    </label>
                  </fieldset>
                </div>
                <div className="cols">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field2"
                      type="tel"
                      placeholder=""
                      name="tel"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field2">
                      Phone
                    </label>
                  </fieldset>
                </div>
                <button className="button-submit tf-btn w-100" type="submit">
                  Get It Now
                  <i className="icon-arrow-top-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
