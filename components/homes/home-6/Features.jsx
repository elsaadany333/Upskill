import React from "react";

export default function Features() {
  return (
    <section className="section-icon bg-main">
      <div className="tf-container">
        <div className="row">
          <div className="wrap-icon-box">
            <div
              className="icons-box style-3 text-p wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="icons">
                <i className="flaticon-play" />
              </div>
              <div className="content">
                <p>30,000 online courses</p>
                <span>Enjoy a variety of fresh topics</span>
              </div>
            </div>
            <div
              className="icons-box style-3 text-p justify-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icons">
                <i className="flaticon-medal" />
              </div>
              <div className="content">
                <p>Expert instruction</p>
                <span>Find the right instructor for you</span>
              </div>
            </div>
            <div
              className="icons-box style-3 text-p justify-end wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icons">
                <i className="flaticon-key" />
              </div>
              <div className="content">
                <p>Lifetime access</p>
                <span>Learn on your schedule</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
