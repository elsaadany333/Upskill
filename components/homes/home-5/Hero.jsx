"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="page-title-home5">
        <div className="tf-container">
          <div className="row items-center">
            <div className="col-lg-6">
              <div className="content">
                <div
                  className="widget box-sub-tag wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="sub-tag-icon">
                    <i className="icon-flash" />
                  </div>
                  <div className="sub-tag-title">
                    <p>The Leader in Online Learning</p>
                  </div>
                </div>
                <h1 className="fw-7 wow fadeInUp" data-wow-delay="0.1s">
                  Online <br />
                  Yoga Classes
                </h1>
                <h6 className="wow fadeInUp" data-wow-delay="0.2s">
                  Yoka is the most popular online yoga classes, trusted by
                  100,000+ customers.
                  <br />
                  Our instructers are well-known and certified.
                </h6>
                <div className="bottom-btns">
                  <a
                    href="#"
                    className="tf-btn wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Explore courses
                    <i className="icon-arrow-top-right" />
                  </a>
                  <div
                    className="widget-video wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <a onClick={() => setOpen(true)} className="popup-youtube">
                      <i className="flaticon-play fs-18" />
                    </a>
                    <h6 className="mb-0">Watch Demo</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src="/images/page-title/page-title-home5-1.png"
                  alt=""
                  src="/images/page-title/page-title-home5-1.png"
                  width={1162}
                  height={1350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="MLpWrANjFbI"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
