import React from "react";
import Image from "next/image";
export default function Faqs() {
  return (
    <section className="section-faq-h8 tf-spacing-4 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="faq-content">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>FAQ</p>
                </div>
              </div>
              <div className="heading-section">
                <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.2s">
                  Frequently asked questions
                </h2>
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.3s">
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod ex tempor incididunt labore dolore magna aliquaenim
                  minim.
                </div>
              </div>
              <div
                className="tf-accordion-style-2 tf-accordion wow fadeInUp"
                data-wow-delay="0.4s"
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
                      What learning materials will I get?
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
                      Concretely, what happens in a class?
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
                      Is UpSkill a language learning app?
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
                className="ls-is-cached lazyloaded"
                data-src="/images/section/faq.jpg"
                alt=""
                src="/images/section/faq.jpg"
                width={1372}
                height={1401}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
