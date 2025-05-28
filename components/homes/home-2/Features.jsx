import React from "react";

export default function Features() {
  return (
    <section className="section-icon">
      <div className="tf-container">
        <div className="row">
          <div className="wrap-icon-box">
            <div
              className="icons-box style-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="icons">
                <i className="flaticon-play" />
              </div>
              <div className="content">
                <p>
                  Learn in- skills with over 24,000 video <br />
                  courses
                </p>
              </div>
            </div>
            <div
              className="icons-box style-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icons">
                <i className="flaticon-medal" />
              </div>
              <div className="content">
                <p>
                  Choose courses taught by real-world <br />
                  experts
                </p>
              </div>
            </div>
            <div
              className="icons-box style-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icons">
                <i className="flaticon-key" />
              </div>
              <div className="content">
                <p>
                  Learn at your own pace, with lifetime <br />
                  access on mobile and desktop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
