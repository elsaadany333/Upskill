import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="section-become-instructor tf-spacing-2 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-section wow fadeInUp">
              <div className="content-inner">
                <h2 className="font-cardo fw-7">Become An Instructor Today</h2>
                <p className="fs-15">
                  Top instructors from around the world teach millions of
                  students on UpSkill. We provide the tools and skills to teach
                  what you love
                </p>
                <ul className="wrap-list-text-check1">
                  <li>
                    <i className="icon-check" /> Earn money
                  </li>
                  <li>
                    <i className="icon-check" /> Inspire students
                  </li>
                  <li>
                    <i className="icon-check" /> Join our community
                  </li>
                </ul>
              </div>
              <div className="content-user wow fadeInUp" data-wow-delay="0.1s">
                <div className="box-agent style2">
                  <ul className="agent-img-list">
                    <li className="agent-img-item">
                      <Image
                        className="lazyload"
                        data-src="/images/avatar/user-1.png"
                        alt=""
                        src="/images/avatar/user-1.png"
                        width={84}
                        height={84}
                      />
                    </li>
                    <li className="agent-img-item">
                      <Image
                        className="lazyload"
                        data-src="/images/avatar/user-2.png"
                        alt=""
                        src="/images/avatar/user-2.png"
                        width={84}
                        height={84}
                      />
                    </li>
                    <li className="agent-img-item">
                      <Image
                        className="lazyload"
                        data-src="/images/avatar/user-3.png"
                        alt=""
                        src="/images/avatar/user-3.png"
                        width={84}
                        height={84}
                      />
                    </li>
                    <li className="agent-img-item">
                      <p>1M+</p>
                    </li>
                  </ul>
                  <a href="#" className="tf-btn font-outfit">
                    Start Teaching Today
                    <i className="icon-arrow-top-right" />
                  </a>
                </div>
              </div>
              <div className="content-img wow fadeInUp" data-wow-delay="0.2s">
                <Image
                  className="lazyload item-1"
                  data-src="/images/section/become-instructor-1.png"
                  alt=""
                  src="/images/section/become-instructor-1.png"
                  width={708}
                  height={802}
                />
                <Image
                  className="lazyload item-2"
                  data-src="/images/item/item-4.png"
                  alt=""
                  src="/images/item/item-4.png"
                  width={148}
                  height={158}
                />
                <Image
                  className="lazyload item-3"
                  data-src="/images/item/item-20.png"
                  alt=""
                  src="/images/item/item-20.png"
                  width={128}
                  height={128}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
