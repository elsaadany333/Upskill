import Accordions from "@/components/common/Accordions";
import React from "react";

export default function Faqs2() {
  return (
    <section className="tf-spacing-26 section-faq pt-0">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-xl-10 col-sm-12">
            <div className="heading-section text-center">
              <h2
                className="fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Making Courses
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.3s">
                Here are the questions about this template.
              </div>
            </div>
            <div
              className="tf-accordion-default tf-accordion w-800"
              id="accordionExample"
            >
              <Accordions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
