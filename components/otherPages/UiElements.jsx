"use client";
import React from "react";
import Link from "next/link";
export default function UiElements() {
  return (
    <>
      <div className="page-title page-ui-elements">
        <div className="tf-container full">
          <div className="row">
            <div className="col-12">
              <div className="content text-center">
                <ul className="breadcrumbs flex items-center justify-center gap-10">
                  <li>
                    <Link href={`/`} className="flex">
                      <i className="icon-home" />
                    </Link>
                  </li>
                  <li>
                    <i className="icon-arrow-right" />
                  </li>
                  <li>Pages</li>
                  <li>
                    <i className="icon-arrow-right" />
                  </li>
                  <li>Instructor</li>
                </ul>
                <h2 className="font-cardo fw-7">UI Elements</h2>
                <h6>
                  We’re on a mission to deliver engaging, curated courses at a
                  reasonable price.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /page-title*/}
      {/* main-content */}
      <div className="main-content pt-0">
        <div className="page-inner">
          <div className="tf-container">
            <section className="wg-accordions tf-spacing-27 section-faq style-2">
              <div className="tf-container">
                <div className="row justify-center">
                  <div className="col-xl-10 col-sm-12">
                    <div className="heading-section w-800">
                      <h4 className="fw-5">Accordions</h4>
                    </div>
                    <div className="tf-accordion-default tf-accordion bg-4 w-800">
                      <div className="tf-accordion-item">
                        <h3 className="tf-accordion-header">
                          <span
                            className="tf-accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="rectangle-314" />
                            High-Quality Video Lessons
                          </span>
                        </h3>
                        <div
                          id="collapseOne"
                          className="tf-accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="tf-accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet consectur adipiscing
                              elit sed eius mod ex tempor incididunt labore
                              dolore magna aliquaenim ad minim eniam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tf-accordion-item">
                        <h3 className="tf-accordion-header">
                          <span
                            className="tf-accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            <span className="rectangle-314" />
                            Personalized Feedback and Support
                          </span>
                        </h3>
                        <div
                          id="collapseTwo"
                          className="tf-accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="tf-accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet consectur adipiscing
                              elit sed eius mod ex tempor incididunt labore
                              dolore magna aliquaenim ad minim eniam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tf-accordion-item">
                        <h3 className="tf-accordion-header">
                          <span
                            className="tf-accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            <span className="rectangle-314" />
                            Access to Course Materials and Resources
                          </span>
                        </h3>
                        <div
                          id="collapseThree"
                          className="tf-accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="tf-accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet consectur adipiscing
                              elit sed eius mod ex tempor incididunt labore
                              dolore magna aliquaenim ad minim eniam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tf-accordion-item">
                        <h3 className="tf-accordion-header">
                          <span
                            className="tf-accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            <span className="rectangle-314" />
                            Can I distribute this product?
                          </span>
                        </h3>
                        <div
                          id="collapseFour"
                          className="tf-accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="tf-accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet consectur adipiscing
                              elit sed eius mod ex tempor incididunt labore
                              dolore magna aliquaenim ad minim eniam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tf-accordion-item">
                        <h3 className="tf-accordion-header">
                          <span
                            className="tf-accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            <span className="rectangle-314" />
                            What is your refund policy?
                          </span>
                        </h3>
                        <div
                          id="collapseFive"
                          className="tf-accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="tf-accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet consectur adipiscing
                              elit sed eius mod ex tempor incididunt labore
                              dolore magna aliquaenim ad minim eniam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-tabs tf-spacing-28">
              <div className="tf-container">
                <div className="row justify-center">
                  <div className="col-xl-10 col-sm-12">
                    <div className="heading-section w-800">
                      <h4 className="fw-5">Tabs</h4>
                    </div>
                    <div className="widget-tabs style-2 w-800">
                      <ul className="widget-menu-tab overflow-x-auto pd-40">
                        <li className="item-title style-2 active">
                          Development &amp; IT
                        </li>
                        <li className="item-title style-2">
                          Design &amp; Creative
                        </li>
                        <li className="item-title style-2">
                          Digital Marketing
                        </li>
                      </ul>
                      <div className="widget-content-tab">
                        <div className="widget-content-inner active">
                          <div className="row">
                            Pharetra nulla ullamcorper sit lectus. Fermentum
                            mauris pellentesque nec nibh sed et, vel diam,
                            massa. Placerat quis vel fames interdum urna
                            lobortis sagittis sed pretium. Aliquam eget posuere
                            sit enim elementum nulla vulputate magna. Morbi sed
                            arcu proin quis tortor non risus.
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="row">
                            Pharetra nulla ullamcorper sit lectus. Fermentum
                            mauris pellentesque nec nibh sed et, vel diam,
                            massa. Placerat quis vel fames interdum urna
                            lobortis sagittis sed pretium. Aliquam eget posuere
                            sit enim elementum nulla vulputate magna. Morbi sed
                            arcu proin quis tortor non risus.
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="row">
                            Pharetra nulla ullamcorper sit lectus. Fermentum
                            mauris pellentesque nec nibh sed et, vel diam,
                            massa. Placerat quis vel fames interdum urna
                            lobortis sagittis sed pretium. Aliquam eget posuere
                            sit enim elementum nulla vulputate magna. Morbi sed
                            arcu proin quis tortor non risus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-tabs style-small w-800">
                      <ul className="widget-menu-tab overflow-x-auto pd-40">
                        <li className="item-title style-2 active">Item 1</li>
                        <li className="item-title style-2">Item 2</li>
                        <li className="item-title style-2">Item 3</li>
                      </ul>
                      <div className="widget-content-tab">
                        <div className="widget-content-inner active">
                          <div className="row">
                            Pharetra nulla ullamcorper sit lectus. Fermentum
                            mauris pellentesque nec nibh sed et, vel diam,
                            massa. Placerat quis vel fames interdum urna
                            lobortis sagittis sed pretium. Aliquam eget posuere
                            sit enim elementum nulla vulputate magna. Morbi sed
                            arcu proin quis tortor non risus.
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="row">
                            Pharetra nulla ullamcorper sit lectus. Fermentum
                            mauris pellentesque nec nibh sed et, vel diam,
                            massa. Placerat quis vel fames interdum urna
                            lobortis sagittis sed pretium. Aliquam eget posuere
                            sit enim elementum nulla vulputate magna. Morbi sed
                            arcu proin quis tortor non risus.
                          </div>
                        </div>
                        <div className="widget-content-inner">
                          <div className="row">
                            Pharetra nulla ullamcorper sit lectus. Fermentum
                            mauris pellentesque nec nibh sed et, vel diam,
                            massa. Placerat quis vel fames interdum urna
                            lobortis sagittis sed pretium. Aliquam eget posuere
                            sit enim elementum nulla vulputate magna. Morbi sed
                            arcu proin quis tortor non risus.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-table tf-spacing-29">
              <div className="row justify-center">
                <div className="col-xl-10 col-sm-12">
                  <div className="heading-section w-800">
                    <h4 className="fw-5">Table</h4>
                  </div>
                  <div className="wg-box">
                    <div className="table-order w-800">
                      <div className="head">
                        <div className="item">
                          <div className="fs-15 fw-5">Order ID</div>
                        </div>
                        <div className="item">
                          <div className="fs-15 fw-5">Course Name</div>
                        </div>
                        <div className="item">
                          <div className="fs-15 fw-5">Date</div>
                        </div>
                        <div className="item">
                          <div className="fs-15 fw-5">Price</div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="order-item item border-bottom">
                            <div>
                              <p className="fs-15 fw-5">#405</p>
                            </div>
                            <div>
                              <a href="#" className="fs-15 fw-5">
                                Building Scalable APIs with GraphQL
                              </a>
                            </div>
                            <div>
                              <p className="fs-15 fw-5">April 27, 2024</p>
                            </div>
                            <div>
                              <p className="fs-15 fw-5">$100.99</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="order-item item border-bottom">
                            <div>
                              <p className="fs-15 fw-5">#405</p>
                            </div>
                            <div>
                              <a href="#" className="fs-15 fw-5">
                                Building Scalable APIs with GraphQL
                              </a>
                            </div>
                            <div>
                              <p className="fs-15 fw-5">April 27, 2024</p>
                            </div>
                            <div>
                              <p className="fs-15 fw-5">$100.99</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="order-item item border-bottom">
                            <div>
                              <p className="fs-15 fw-5">#405</p>
                            </div>
                            <div>
                              <a href="#" className="fs-15 fw-5">
                                Building Scalable APIs with GraphQL
                              </a>
                            </div>
                            <div>
                              <p className="fs-15 fw-5">April 27, 2024</p>
                            </div>
                            <div>
                              <p className="fs-15 fw-5">$100.99</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-message-boxes tf-spacing-29">
              <div className="row justify-center">
                <div className="col-xl-10 col-sm-12">
                  <div className="heading-section w-800">
                    <h4 className="fw-5">Message Boxes</h4>
                  </div>
                  {/* wd message-box-item */}
                  <div className="message-box-item w-800">
                    <div className="text fw-5">Info: User pending action</div>
                    <i className="flaticon-close-1 icon-close-ms-box" />
                  </div>
                  {/* wd message-box-item style2*/}
                  <div className="message-box-item style2 w-800">
                    <div className="text fw-5">
                      Warning: User has to be admin
                    </div>
                    <i className="flaticon-close-1 icon-close-ms-box" />
                  </div>
                  {/* wd message-box-item style3*/}
                  <div className="message-box-item style3 w-800">
                    <div className="text fw-5">
                      Error: Internal Server Error
                    </div>
                    <i className="flaticon-close-1 icon-close-ms-box" />
                  </div>
                  {/* wd message-box-item style4*/}
                  <div className="message-box-item style4 w-800">
                    <div className="text fw-5">
                      Success: Updated members status
                    </div>
                    <i className="flaticon-close-1 icon-close-ms-box" />
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-buttons tf-spacing-30">
              <div className="row justify-center">
                <div className="col-xl-10 col-sm-12">
                  <div className="heading-section w-800">
                    <h4 className="fw-5">Buttons</h4>
                  </div>
                  <div className="button-items w-800 pb-26">
                    <a href="#" className="tf-btn">
                      Button Primary <i className="icon-arrow-top-right" />
                    </a>
                    <a href="#" className="tf-btn">
                      Button Primary Hover{" "}
                      <i className="icon-arrow-top-right" />
                    </a>
                    <a href="#" className="tf-btn style-secondary">
                      Button Secondary <i className="icon-arrow-top-right" />
                    </a>
                  </div>
                  <div className="button-items w-800 pb-26">
                    <a href="#" className="tf-btn style-secondary">
                      Button Secondary Hover
                      <i className="icon-arrow-top-right" />
                    </a>
                    <a href="#" className="tf-btn style-third">
                      Button Third
                      <i className="icon-arrow-top-right" />
                    </a>
                    <a href="#" className="tf-btn style-third">
                      Button Third Hover
                      <i className="icon-arrow-top-right" />
                    </a>
                  </div>
                  <div className="button-items w-800">
                    <a href="#" className="tf-btn style-fourth">
                      Button Fourth
                      <i className="icon-arrow-top-right" />
                    </a>
                    <a href="#" className="tf-btn style-fourth">
                      Button Fourth Hover
                      <i className="icon-arrow-top-right" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-form tf-spacing-30">
              <div className="row justify-center">
                <div className="col-xl-10 col-sm-12">
                  <div className="heading-section w-800">
                    <h4 className="fw-5">Form</h4>
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="shop-checkout w-800"
                  >
                    <fieldset className="tf-field mb-40">
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
                    <fieldset className="tf-field mb-40">
                      <input
                        className="tf-input style-1"
                        id="field2"
                        type="text"
                        placeholder=""
                        name="text"
                        tabIndex={2}
                        defaultValue="Ali Tufan"
                        aria-required="true"
                        required
                      />
                      <label className="tf-field-label fs-15" htmlFor="field2">
                        First Name
                      </label>
                    </fieldset>
                    <div className="tf-select mb-40 tf-select-label">
                      <select
                        className="default"
                        name="region-choose"
                        id="region-choose"
                      >
                        <option value="" />
                        <option value="UX/UI Designer">UX/UI Designer</option>
                        <option value="Banking">Banking</option>
                        <option value="Digital & Creative">
                          Digital &amp; Creative
                        </option>
                        <option value="Retail">Retail</option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                      </select>
                      <label className="select-label" htmlFor="">
                        Course Category
                      </label>
                    </div>
                    <div className="tf-select mb-40 tf-select-label">
                      <select
                        className="default"
                        name="region-choose"
                        id="region-choose"
                      >
                        <option value="" />
                        <option value="UX/UI Designer">UX/UI Designer</option>
                        <option value="Banking">Banking</option>
                        <option value="Digital & Creative">
                          Digital &amp; Creative
                        </option>
                        <option value="Retail">Retail</option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                      </select>
                      <label className="select-label" htmlFor="">
                        Course Category
                      </label>
                    </div>
                    <fieldset className="tf-field mb-16">
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
                        Textarea
                      </label>
                    </fieldset>
                  </form>
                  <div className="wg-radiobox">
                    <div className="head w-800">
                      <h4 className="fw-5">Radiobox</h4>
                    </div>
                    <div className="answers w-800">
                      <div className="radio-item">
                        <label htmlFor="radio1">
                          <p>Items</p>
                          <input name="radio" type="radio" id="radio1" />
                          <span className="btn-radio" />
                        </label>
                      </div>
                      <div className="radio-item">
                        <label htmlFor="radio2">
                          <p>Items</p>
                          <input name="radio" type="radio" id="radio2" />
                          <span className="btn-radio" />
                        </label>
                      </div>
                      <div className="radio-item">
                        <label htmlFor="radio3">
                          <p>Items</p>
                          <input name="radio" type="radio" id="radio3" />
                          <span className="btn-radio" />
                        </label>
                      </div>
                      <div className="radio-item">
                        <label htmlFor="radio4">
                          <p>Items</p>
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
                  </div>
                  <div className="wg-checkbox">
                    <div className="head w-800">
                      <h4 className="fw-5">Checkbox</h4>
                    </div>
                    <div className="answers w-800">
                      <div className="checkbox-item">
                        <label htmlFor="checkbox1">
                          <p className="fs-15">Items</p>
                          <input name="checkbox" id="checkbox1" type="radio" />
                          <span className="btn-checkbox" />
                        </label>
                      </div>
                      <div className="checkbox-item">
                        <label htmlFor="checkbox2">
                          <p className="fs-15">Items</p>
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
                          <p className="fs-15">Items</p>
                          <input name="checkbox" id="checkbox3" type="radio" />
                          <span className="btn-checkbox" />
                        </label>
                      </div>
                      <div className="checkbox-item">
                        <label htmlFor="checkbox4">
                          <p className="fs-15">Items</p>
                          <input name="checkbox" id="checkbox4" type="radio" />
                          <span className="btn-checkbox" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="wg-switch">
                    <div className="head w-800">
                      <h4 className="fw-5">Switch</h4>
                    </div>
                    <div className="switch-items w-800">
                      <input
                        className="switch-item"
                        type="checkbox"
                        defaultValue="checkbox"
                        name="check"
                      />
                      <input
                        className="switch-item"
                        type="checkbox"
                        defaultValue="checkbox"
                        name="check"
                        defaultChecked=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-tooltips tf-spacing-31">
              <div className="row justify-center">
                <div className="col-xl-10 col-sm-12">
                  <div className="heading-section w-800">
                    <h4 className="fw-5">Tooltips</h4>
                  </div>
                  <div className="tooltips w-800">
                    <ul className="tooltips-list">
                      <li className="tooltips-item">
                        <div
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Top!"
                        >
                          <p>Top</p>
                        </div>
                      </li>
                      <li className="tooltips-item">
                        <div
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Bottom!"
                        >
                          Bottom
                        </div>
                      </li>
                      <li className="tooltips-item">
                        <div
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Left!"
                        >
                          Left
                        </div>
                      </li>
                      <li className="tooltips-item">
                        <div
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Right!"
                        >
                          Right
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-range-slider tf-spacing-33">
              <div className="row justify-center">
                <div className="col-xl-10 col-sm-12">
                  <div className="heading-section w-800">
                    <h4 className="fw-5">Range Slider</h4>
                  </div>
                  <div className="range-slider w-447">
                    <div id="range-two-val" />
                    <div className="value">
                      <div id="skip-value-lower" />
                      &nbsp;-&nbsp;
                      <div id="skip-value-upper" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-progress-bars tf-spacing-30">
              <div className="row justify-center">
                <div className="col-xl-10 col-sm-12">
                  <div className="heading-section w-800">
                    <h4 className="fw-5">Progress bars</h4>
                  </div>
                  <div className="progess-bars-item">
                    <div className="progress-bars w-568 mb-40">
                      <div className="progress-bars-line">
                        <div data-progress={90} data-max={100} className="">
                          <p className="progress-bars-number">90%</p>
                        </div>
                      </div>
                    </div>
                    <div className="progress-bars w-568 mb-40">
                      <div className="progress-bars-line">
                        <div data-progress={50} data-max={100} className="">
                          <p className="progress-bars-number">50%</p>
                        </div>
                      </div>
                    </div>
                    <div className="progress-bars w-568">
                      <div className="progress-bars-line">
                        <div data-progress={40} data-max={100} className="">
                          <p className="progress-bars-number">40%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wg-typography tf-spacing-32">
              <div className="row justify-center">
                <div className="col-xl-10 col-sm-12">
                  <div className="head w-800">
                    <h4 className="fw-5">Typography</h4>
                  </div>
                  <div className="desc w-800">
                    <p className="fs-15">
                      Lorem ipsum dolor sit amet consectur adipisicing elit, sed
                      do eiusmod tempor inc idid unt ut labore et dolore magna
                      aliqua enim ad minim veniam, quis nostrud exerec tation
                      ullamco laboris nis aliquip commodo consequat duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur enim ipsam.
                      <br />
                      <br />
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium totam rem aperiam.
                    </p>
                  </div>
                  <div className="blockquote w-800">
                    <p className="fs-15">
                      Aliquam hendrerit sollicitudin purus, quis rutrum mi
                      accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                      malesuada orci congue.
                    </p>
                    <br />
                    <p className="fs-16 fw-5">Luis Pickford</p>
                  </div>
                  <div className="learn w-800">
                    <div className="head w-800">
                      <h4 className="fw-5">What you'll learn</h4>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <ul className="list-text">
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Prepare for Industry Certification Exam
                            </span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Hours and Hours of Video Instruction
                            </span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Over 25 Engaging Lab Exercises
                            </span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Instructor Available by Email or on the Forums
                            </span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Comprehensive Coverage of HTML and CSS
                            </span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Server Side Development with PHP
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul className="list-text">
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Earn Certification that is Proof of your
                              Competence
                            </span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Dozens of Code Examples to Download and Study
                            </span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">All Lab Solutions</span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">All Free Tools</span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Client Side Programming with Javascript
                            </span>
                          </li>
                          <li className="flex items-center gap-10">
                            <i className="flaticon-check" />
                            <span className="fs-15">
                              Learn Database Development with mySQL
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
