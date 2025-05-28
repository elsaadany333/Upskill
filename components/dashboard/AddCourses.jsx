"use client";
import React from "react";

export default function AddCourses() {
  return (
    <div className="col-xl-9">
      <section className="section-add-course-right section-right">
        <div className="box">
          <div className="widget-tabs style-small">
            <ul className="widget-menu-tab overflow-x-auto pd-40">
              <li className="item-title active">Basic Info</li>
              <li className="item-title">Media</li>
              <li className="item-title">Curriculum</li>
              <li className="item-title">Additional information</li>
            </ul>
            <div className="widget-content-tab">
              <div className="widget-content-inner active">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="shop-checkout"
                >
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field4"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field4">
                      Course Title
                    </label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field4"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field4">
                      Courses category
                    </label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field4"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field4">
                      Courses level
                    </label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <textarea
                      className="tf-input style-1"
                      name="message"
                      rows={4}
                      placeholder=""
                      tabIndex={2}
                      aria-required="true"
                      required
                      defaultValue={""}
                    />
                    <label
                      className="tf-field-label type-textarea fs-15"
                      htmlFor=""
                    >
                      Course Description
                    </label>
                  </fieldset>
                </form>
                <div className="flex justify-between items-center">
                  <a href="#" className="tf-btn style-third">
                    Previous <i className="icon-arrow-top-right" />
                  </a>
                  <a href="#" className="tf-btn">
                    Next <i className="icon-arrow-top-right" />
                  </a>
                </div>
              </div>
              <div className="widget-content-inner">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="shop-checkout"
                >
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field4"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field4">
                      Select Video Sources
                    </label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field4"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field4">
                      Add Your Video URL
                    </label>
                  </fieldset>
                </form>
                <div className="flex justify-between items-center">
                  <a href="#" className="tf-btn style-third">
                    Previous <i className="icon-arrow-top-right" />
                  </a>
                  <a href="#" className="tf-btn">
                    Next <i className="icon-arrow-top-right" />
                  </a>
                </div>
              </div>
              <div className="widget-content-inner">
                <div className="tf-accordion-style-3 tf-accordion">
                  <div className="tf-accordion-item">
                    <h3 className="tf-accordion-header">
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
                      <div className="tf-accordion-btn btn-style-2">
                        <a href="#" className="btn-edit btn">
                          <i className="flaticon-edit" />
                        </a>
                        <a href="#" className="btn-remove btn">
                          <i className="flaticon-close" />
                        </a>
                      </div>
                    </h3>
                    <div
                      id="collapse11"
                      className="tf-accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="tf-accordion-content">
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-play-1" />
                          </li>
                          <li>
                            <span className="text">About The Course</span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-document" />
                          </li>
                          <li>
                            <span className="text">Tools Introduction</span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-question" />
                          </li>
                          <li>
                            <span className="text">Basic Document</span>
                          </li>
                          Structure
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-play-1" />
                          </li>
                          <li>
                            <span className="text">
                              HTML5 Foundations Certification Final Project
                            </span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <div className="btn-add">
                          <a href="#" className="tf-btn style-fifth fs-14 fw-5">
                            Add Article{" "}
                            <i className="icon-arrow-top-right fs-14 fw-5" />
                          </a>
                          <a
                            href="#"
                            className="tf-btn style-fourth fs-14 fw-5"
                          >
                            Add Description{" "}
                            <i className="icon-arrow-top-right fs-14 fw-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tf-accordion-item">
                    <h3 className="tf-accordion-header">
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
                      <div className="tf-accordion-btn btn-style-2">
                        <a href="#" className="btn-edit btn">
                          <i className="flaticon-edit" />
                        </a>
                        <a href="#" className="btn-remove btn">
                          <i className="flaticon-close" />
                        </a>
                      </div>
                    </h3>
                    <div
                      id="collapse12"
                      className="tf-accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="tf-accordion-content">
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-play-1" />
                          </li>
                          <span className="text">About The Course</span>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-document" />
                          </li>
                          <span className="text">Tools Introduction</span>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-question" />
                            <span className="text">
                              Basic Document Structure
                            </span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-play-1" />
                            <span className="text">
                              HTML5 Foundations Certification Final Project
                            </span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <div className="btn-add">
                          <a href="#" className="tf-btn style-fifth fs-14 fw-5">
                            Add Article{" "}
                            <i className="icon-arrow-top-right fs-14 fw-5" />
                          </a>
                          <a
                            href="#"
                            className="tf-btn style-fourth fs-14 fw-5"
                          >
                            Add Description{" "}
                            <i className="icon-arrow-top-right fs-14 fw-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tf-accordion-item">
                    <h3 className="tf-accordion-header">
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
                      <div className="tf-accordion-btn btn-style-2">
                        <a href="#" className="btn-edit btn">
                          <i className="flaticon-edit" />
                        </a>
                        <a href="#" className="btn-remove btn">
                          <i className="flaticon-close" />
                        </a>
                      </div>
                    </h3>
                    <div
                      id="collapse13"
                      className="tf-accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="tf-accordion-content">
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-play-1" />
                            <span className="text">About The Course</span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-document" />
                            <span className="text">Tools Introduction</span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-question" />
                            <span className="text">
                              Basic Document Structure
                            </span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-play-1" />
                            <span className="text">
                              HTML5 Foundations Certification Final Project
                            </span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <div className="btn-add">
                          <a href="#" className="tf-btn style-fifth fs-14 fw-5">
                            Add Article{" "}
                            <i className="icon-arrow-top-right fs-14 fw-5" />
                          </a>
                          <a
                            href="#"
                            className="tf-btn style-fourth fs-14 fw-5"
                          >
                            Add Description{" "}
                            <i className="icon-arrow-top-right fs-14 fw-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tf-accordion-item">
                    <h3 className="tf-accordion-header">
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
                      <div className="tf-accordion-btn btn-style-2">
                        <a href="#" className="btn-edit btn">
                          <i className="flaticon-edit" />
                        </a>
                        <a href="#" className="btn-remove btn">
                          <i className="flaticon-close" />
                        </a>
                      </div>
                    </h3>
                    <div
                      id="collapse14"
                      className="tf-accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="tf-accordion-content">
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-play-1" />
                            <span className="text">About The Course</span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-document" />
                            <span className="text">Tools Introduction</span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-question" />
                            <span className="text">
                              Basic Document Structure
                            </span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="icon">
                            <i className="flaticon-play-1" />
                            <span className="text">
                              HTML5 Foundations Certification Final Project
                            </span>
                          </li>
                          <li className="tf-accordion-btn btn-style-2">
                            <a href="#" className="btn-edit btn">
                              <i className="flaticon-edit" />
                            </a>
                            <a href="#" className="btn-remove btn">
                              <i className="flaticon-close" />
                            </a>
                          </li>
                        </ul>
                        <div className="btn-add">
                          <a href="#" className="tf-btn style-fifth fs-14 fw-5">
                            Add Article{" "}
                            <i className="icon-arrow-top-right fs-14 fw-5" />
                          </a>
                          <a
                            href="#"
                            className="tf-btn style-fourth fs-14 fw-5"
                          >
                            Add Description{" "}
                            <i className="icon-arrow-top-right fs-14 fw-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="tf-btn style-third">
                    Previous <i className="icon-arrow-top-right" />
                  </a>
                  <a href="#" className="tf-btn">
                    Next <i className="icon-arrow-top-right" />
                  </a>
                </div>
              </div>
              <div className="widget-content-inner">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="shop-checkout"
                >
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field4"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field4">
                      Tags
                    </label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      id="field4"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field4">
                      Languange
                    </label>
                  </fieldset>
                  <fieldset className="tf-field">
                    <textarea
                      className="tf-input style-1"
                      name="message"
                      rows={4}
                      placeholder=""
                      tabIndex={2}
                      aria-required="true"
                      required
                      defaultValue={""}
                    />
                    <label
                      className="tf-field-label type-textarea fs-15"
                      htmlFor=""
                    >
                      Course Tags
                    </label>
                  </fieldset>
                </form>
                <div className="flex justify-between items-center">
                  <a href="#" className="tf-btn style-third">
                    Previous <i className="icon-arrow-top-right" />
                  </a>
                  <a href="#" type="submit" className="tf-btn style-secondary">
                    Create Course
                    <i className="icon-arrow-top-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
