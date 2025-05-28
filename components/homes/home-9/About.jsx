import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <section className="section-about-box-style2 tf-spacing-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-7">
            <div className="image">
              <div className="image-one">
                <Image
                  className="ls-is-cached lazyloaded"
                  src="/images/section/about-5.jpg"
                  data-=""
                  alt=""
                  width={681}
                  height={900}
                />
              </div>
              <div className="image-two">
                <Image
                  className="ls-is-cached lazyloaded"
                  src="/images/section/about-6.jpg"
                  data-=""
                  alt=""
                  width={681}
                  height={900}
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="content">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>knowledge meets innovation</p>
                </div>
              </div>
              <h2
                className="title fw-7 lesp-1 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                About University
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim minim.
              </p>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.4s">
                Our mission is to foster intellectual curiosity, empower
                individuals to realize their fullest potential, and contribute
                meaningfully to the betterment of society. commitment to
                academic excellence, diversity, and community engagement.
              </p>
              <a href="#" className="tf-btn wow fadeInUp" data-wow-delay="0.5s">
                View Our Program
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
