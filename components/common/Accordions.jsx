import React from "react";

export default function Accordions() {
  return (
    <>
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
          className="tf-accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="tf-accordion-content">
            <p>
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod
              ex tempor incididunt labore dolore magna aliquaenim ad minim
              eniam.
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
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod
              ex tempor incididunt labore dolore magna aliquaenim ad minim
              eniam.
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
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod
              ex tempor incididunt labore dolore magna aliquaenim ad minim
              eniam.
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
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod
              ex tempor incididunt labore dolore magna aliquaenim ad minim
              eniam.
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
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod
              ex tempor incididunt labore dolore magna aliquaenim ad minim
              eniam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
