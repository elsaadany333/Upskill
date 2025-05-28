import React from "react";
import Image from "next/image";
export default function CampusLife() {
  return (
    <section className="section-campus-life bg-main sp-border">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section text-center">
              <h2
                className="fw-7 lesp-1 text-white wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Campus Life
              </h2>
              <div
                className="sub fs-15 text-white wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Building a vibrant community of creative and accomplished people
                from around the world
              </div>
            </div>
            <div className="campus-life-wrap">
              <div className="campus-life-item">
                <Image
                  className="ls-is-cached lazyloaded"
                  src="/images/section/campus-life-1.jpg"
                  data-=""
                  alt=""
                  width={880}
                  height={681}
                />
                <a href="#">
                  <h4>Student Life</h4>
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
              <div className="campus-life-item">
                <Image
                  className="ls-is-cached lazyloaded"
                  src="/images/section/campus-life-2.jpg"
                  data-=""
                  alt=""
                  width={880}
                  height={681}
                />
                <a href="#">
                  <h4>Arts &amp; Culture</h4>
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
              <div className="campus-life-item">
                <Image
                  className="ls-is-cached lazyloaded"
                  src="/images/section/campus-life-3.jpg"
                  data-=""
                  alt=""
                  width={880}
                  height={681}
                />
                <a href="#">
                  <h4>Recreation &amp; Wellness</h4>
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
