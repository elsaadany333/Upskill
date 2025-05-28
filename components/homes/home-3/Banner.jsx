import React from "react";

export default function Banner() {
  return (
    <section className="section-browse-course-banner tf-spacing-1 pt-0 pb-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="browse-course-banner">
              <div className="icon">
                <i className="icon-flash" />
              </div>
              <span className="browse-course-banner-text">
                Are You Ready To Start Your Course?
              </span>
              <a href="#" className="tf-btn">
                <span>Browse Courses</span>
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
