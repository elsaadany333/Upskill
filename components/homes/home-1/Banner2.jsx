import React from "react";

export default function Banner2() {
  return (
    <section className="section-start-banner">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-section">
              <div className="heading-section style-white mb-0">
                <h2 className="font-cardo wow fadeInUp" data-wow-delay="0.1s">
                  Join More Than 1 Million
                  <br /> Learners Worldwide
                </h2>
                <p className="sub wow fadeInUp" data-wow-delay="0.2s">
                  {" "}
                  Effective learning starts with assessment. Learning a new
                  skill <br />
                  is hard work—Signal makes it easier.
                </p>
              </div>
              <a
                href="#"
                className="tf-btn style-secondary wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Get Started Now <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
