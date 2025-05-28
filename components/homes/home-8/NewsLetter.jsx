import React from "react";

export default function NewsLetter() {
  return (
    <section className="section-start-banner-h8 bg-main">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="start-banner-inner">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title text-white">
                  <p>The Leader in Online Learning</p>
                </div>
              </div>
              <div className="heading-section text-center">
                <h2
                  className="lesp-1 text-white wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Join over 120 million learners
                  <br />
                  on UpSkill
                </h2>
                <div
                  className="sub fs-15 text-white wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  An award-winning language learning platform for new and
                  advanced learners.
                </div>
              </div>
              <a
                className="tf-btn get-ticked fw-5 wow fadeInUp"
                data-wow-delay="0.4s"
                href="#"
              >
                Get Started Now
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
