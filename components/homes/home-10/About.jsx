import React from "react";
import Image from "next/image";
import { counters4 } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function About() {
  return (
    <section className="section-about-box tf-spacing-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-box-image">
              <div className="about-box-img-1">
                <Image
                  className="lazyloaded"
                  src="/images/section/about-7.jpg"
                  data-=""
                  alt=""
                  width={1133}
                  height={1132}
                />
              </div>
              <div className="about-box-img-2">
                <Image
                  className="lazyloaded"
                  src="/images/section/about-8.jpg"
                  data-=""
                  alt=""
                  width={681}
                  height={680}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-box-content">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Play &amp; Learn</p>
                </div>
              </div>
              <div className="heading-section">
                <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.2s">
                  The best education for your children
                </h2>
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.3s">
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod ex tempor incididunt labore dolore magna aliquaenim
                  minim.
                </div>
              </div>
              <div className="counter style-2">
                {counters4.map((counter, index) => (
                  <div
                    className="number-counter wow fadeInUp"
                    data-wow-delay={counter.delay}
                    key={index}
                  >
                    <div className="counter-content">
                      <span className="number">
                        <Counter max={counter.to} />
                      </span>
                      {counter.text}
                    </div>
                    <p>{counter.description}</p>
                  </div>
                ))}
              </div>
              <div className="about-box-btn wow fadeInUp" data-wow-delay="0.5s">
                <a href="#" className="tf-btn">
                  View Our Program
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
