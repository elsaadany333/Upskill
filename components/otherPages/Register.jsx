"use client";
import React from "react";
import Image from "next/image";
export default function Register() {
  return (
    <div className="main-content page-register">
      <section className="section-page-register login-wrap tf-spacing-4">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-left wow fadeInLeft" data-wow-delay="0s">
                <Image
                  className="ls-is-cached lazyloaded"
                  data-src="/images/page-title/page-title-home2-2.jpg"
                  alt=""
                  src="/images/page-title/page-title-home2-2.jpg"
                  width={592}
                  height={681}
                />
                <div
                  className="blockquite wow fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <p>
                    Happiness prosperous impression had conviction For every
                    delay <br />
                    in they
                  </p>
                  <p className="author">Ali Tufan</p>
                  <p className="sub-author">Founder &amp; CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-right">
                <h2
                  className="login-title fw-7 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Create A New Account
                </h2>
                <div className="register">
                  <p className="fw-5 fs-15 wow fadeInUp" data-wow-delay="0s">
                    Already have an account?
                  </p>
                  <a
                    href="#"
                    className="fw-5 fs-15 wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    Sign in
                  </a>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-login"
                >
                  <div className="cols">
                    <fieldset
                      className="tf-field field-username wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <input
                        className="tf-input style-1"
                        id="field1"
                        type="email"
                        placeholder=""
                        name="email"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required
                      />
                      <label className="tf-field-label fs-15" htmlFor="field1">
                        Username
                      </label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset
                      className="tf-field field-email wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <input
                        className="tf-input style-1"
                        id="field2"
                        type="email"
                        placeholder=""
                        name="number"
                        tabIndex={2}
                        defaultValue="creativelayers088@gmail.com"
                        aria-required="true"
                        required
                      />
                      <label className="tf-field-label fs-15" htmlFor="field2">
                        Email
                      </label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset
                      className="tf-field field-pass wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <input
                        className="tf-input style-1"
                        id="field3"
                        type="password"
                        placeholder=""
                        name="number"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required
                      />
                      <label className="tf-field-label fs-15" htmlFor="field3">
                        Password
                      </label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset
                      className="tf-field field-pass-again wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <input
                        className="tf-input style-1"
                        id="field4"
                        type="password"
                        placeholder=""
                        name="number"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required
                      />
                      <label className="tf-field-label fs-15" htmlFor="field4">
                        Repoat Password
                      </label>
                    </fieldset>
                  </div>
                  <button
                    className="button-submit tf-btn w-100 wow fadeInUp"
                    data-wow-delay="0s"
                    type="submit"
                  >
                    Sign Up
                    <i className="icon-arrow-top-right" />
                  </button>
                </form>
                <p className="fs-15 wow fadeInUp" data-wow-delay="0s">
                  OR
                </p>
                <ul className="login-social">
                  <li className="login-social-icon">
                    <a
                      href="#"
                      className="tf-btn wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <i className="flaticon-facebook-1" /> Facebook
                    </a>
                  </li>
                  <li className="login-social-icon">
                    <a
                      href="#"
                      className="tf-btn wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <i className="icon-google" />
                      Google
                    </a>
                  </li>
                  <li className="login-social-icon">
                    <a
                      href="#"
                      className="tf-btn wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <i className="icon-apple" />
                      Apple
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
