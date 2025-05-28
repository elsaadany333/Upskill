import React from "react";
import Image from "next/image";
export default function Faq() {
  return (
    <section className="section-faq-h6 tf-spacing-11">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="faq-content">
              <div className="heading-section">
                <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                  Transform Your Education <br />
                  With Our Accessible Online Courses
                </h2>
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod ex tempor incididunt labore dolore magna aliquaenim
                  minim.
                </div>
              </div>
              <div
                className="tf-accordion-style-2 tf-accordion wow fadeInUp"
                data-wow-delay="0.3s"
              >
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
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eius mod ex tempor incididunt labore dolore magna
                        aliquaenim ad minim eniam.
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
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eius mod ex tempor incididunt labore dolore magna
                        aliquaenim ad minim eniam.
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
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eius mod ex tempor incididunt labore dolore magna
                        aliquaenim ad minim eniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq-image">
              <Image
                className="lazyload"
                data-src="/images/section/get-started-5.png"
                alt=""
                src="/images/section/get-started-5.png"
                width={1148}
                height={1149}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
