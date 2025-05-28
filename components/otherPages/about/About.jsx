import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <section className="flat-about ">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7">
            <div className="heading-content ">
              <div className="widget box-sub-tag wow fadeInUp">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Best Quality</p>
                </div>
              </div>
              <h2 className="font-cardo wow fadeInUp">
                UpSkill Education Theme, Built Specifically For The Education
                Centers Which Is Dedicated To Teaching And Involve Learners.
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="content-right wow fadeInUp" data-wow-delay="0.1s">
              <p>
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim minim.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <div className="about-item item-1 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/section/about-9.jpg"
                  alt=""
                  width={895}
                  height={520}
                  src="/images/section/about-9.jpg"
                />
              </div>
              <div className="about-item item-2 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/section/about-10.jpg"
                  alt=""
                  width={893}
                  height={1100}
                  src="/images/section/about-10.jpg"
                />
              </div>
              <div className="about-item item-3 wow fadeInUp">
                <Image
                  className="lazyload"
                  alt=""
                  src="/images/page-title/page-title-home2-1.jpg"
                  width="591"
                  height="680"
                />
              </div>
              <div className="about-item item-4 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/courses/courses-04.jpg"
                  alt=""
                  width={520}
                  height={380}
                  src="/images/courses/courses-04.jpg"
                />
              </div>
              <div className="about-item item-5 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/section/about-1.jpg"
                  alt=""
                  width={681}
                  height={681}
                  src="/images/section/about-1.jpg"
                />
              </div>
              <div className="about-item item-6 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/courses/courses-01.jpg"
                  alt=""
                  width={520}
                  height={380}
                  src="/images/courses/courses-01.jpg"
                />
              </div>
              <div className="about-item item-7 wow fadeInUp">
                <p>
                  “Be open to new ideas and approaches. Develop your
                  problem-solving skills.”{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
