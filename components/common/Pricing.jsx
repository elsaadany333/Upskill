"use client";

import { pricingPlans } from "@/data/pricing";
import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="section-pricing-page tf-spacing-8">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0s">
                Our <span className="tf-secondary-color">Pricing</span>
              </h2>
              <div className="choose-sale">
                <p className="fs-15">Billed Monthly</p>
                <input
                  className="switch-item"
                  type="checkbox"
                  defaultValue="checkbox"
                  name="check"
                  readOnly
                  onClick={() => setIsYearly((pre) => !pre)}
                />
                <p>Billed Yearly</p>
                <p className="sale-off">-20% off</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`pricing-item ${plan.buttonStyle} ${plan.name
                  .toLowerCase()
                  .split(" ")
                  .join("-")} wow fadeInUp`}
                data-wow-delay={plan.delay}
              >
                <div className="pricing-price">
                  {!isYearly ? (
                    <div className="price-month">
                      <h2 className="fw-5">${plan.monthlyPrice.toFixed(2)}</h2>
                      <h6>/ monthly</h6>
                    </div>
                  ) : (
                    <div className="price-yearly">
                      <h2 className="fw-5">${plan.yearlyPrice.toFixed(2)}</h2>
                      <h6>/ yearly</h6>
                    </div>
                  )}
                  <h4>{plan.name}</h4>
                </div>
                <ul className="pricing-benefit-list">
                  {plan.benefits.map((benefit, index) => (
                    <li className="benefit-item" key={index}>
                      <i className="icon-check" />
                      <p>{benefit}</p>
                    </li>
                  ))}
                </ul>
                <a className={`tf-btn w-100 fw-5 ${plan.buttonStyle}`} href="#">
                  Get Started
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
