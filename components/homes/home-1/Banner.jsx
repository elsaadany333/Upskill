import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="section-get-started tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="get-started-wrap flex">
              <div className="wrap-content">
                <h2
                  className="font-cardo fw-7 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Learn Latest Skills;
                  <br /> Advance&nbsp;Your Career
                </h2>
                <p className="fs-15 wow fadeInUp" data-wow-delay="0.1s">
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod ex tempor incididunt labore dolore magna aliquaenim
                  minim.
                </p>
                <a
                  className="tf-btn wow fadeInUp"
                  data-wow-delay="0.2s"
                  href="#"
                >
                  Get Started <i className="icon-arrow-top-right" />
                </a>
              </div>
              <div className="img-right">
                <Image
                  className="lazyload"
                  data-src="/images/section/get-started-1.jpg"
                  alt=""
                  src="/images/section/get-started-1.jpg"
                  width={1370}
                  height={1201}
                />
                <div className="tags-list style2">
                  <ul className="tag-list">
                    <li
                      className="tag-list-item wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <a className="font-outfit" href="#">
                        Expert Trainers
                      </a>
                    </li>
                    <li
                      className="tag-list-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <a className="font-outfit" href="#">
                        Online Remote Learning
                      </a>
                    </li>
                    <li
                      className="tag-list-item wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <a className="font-outfit" href="#">
                        Lifetime Access
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
