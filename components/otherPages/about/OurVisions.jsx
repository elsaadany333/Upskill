import React from "react";
import Image from "next/image";
export default function OurVisions() {
  return (
    <section className="section-vison tf-spacing-8 pt-0 page-about ">
      <div className="tf-container">
        <div className="row  ">
          <div className="col-lg-7">
            <div className="images wow fadeInLeft">
              <Image
                className="lazyload"
                data-src="/images/section/video-placeholder.jpg"
                alt=""
                src="/images/section/video-placeholder.jpg"
                width={1372}
                height={1101}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="content">
              <div className="box-sub-tag wow fadeInUp">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Our Vision</p>
                </div>
              </div>
              <h2 className="fw-7 font-cardo wow fadeInUp">
                35,000+ Happy Students Joined With Us To Achieve Their Goals
              </h2>
              <p className="text-content wow fadeInUp">
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                ex tempor incididunt labore dolore magna aliquaenim minim.
              </p>
              <ul className="list">
                <li className="item wow fadeInUp">
                  Expert-led educational experiences.
                </li>
                <li className="item wow fadeInUp">
                  Flexible pathways to personal and professional achievement.
                </li>
                <li className="item wow fadeInUp">
                  Educational opportunities at every investment level.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
