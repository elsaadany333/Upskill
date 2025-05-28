import React from "react";

export default function Topics() {
  return (
    <section className="section-categories-topics">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section">
              <h3 className="fw-5 wow fadeInUp">Popular Topics</h3>
              <div className="sub fs-15 wow fadeInUp">
                Explore courses from experienced, real-world experts.
              </div>
            </div>
            <ul className="tags-list style-large">
              <li>
                <a
                  href="#"
                  className="tags-item wow fadeInUp"
                  data-wow-delay={0}
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tags-item wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  UX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tags-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Java
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tags-item wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tags-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Python
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tags-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  Digital Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tags-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  Software Development
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
