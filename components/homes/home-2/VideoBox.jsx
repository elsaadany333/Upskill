"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
export default function VideoBox() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="section-video-box tf-spacing-4">
        <div className="tf-container">
          <div className="row flex items-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                  <div className="sub-tag-icon">
                    <i className="icon-flash" />
                  </div>
                  <div className="sub-tag-title">
                    <p>Flexible Supported Learning</p>
                  </div>
                </div>
                <h2
                  className="fw-7 letter-spacing-1 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Learn Latest Skills ; Advance Your Career
                </h2>
                <p className="text-content wow fadeInUp" data-wow-delay="0.3s">
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod ex tempor incididunt labore dolore magna aliquaenim
                  minim.
                </p>
                <a
                  className="tf-btn wow fadeInUp"
                  data-wow-delay="0.4s"
                  href="#"
                >
                  Get Started
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="widget-video">
                <Image
                  className="lazyload"
                  data-src="/images/section/video-placeholder.jpg"
                  alt=""
                  src="/images/section/video-placeholder.jpg"
                  width={1372}
                  height={1101}
                />
                <a onClick={() => setOpen(true)} className="popup-youtube">
                  <i className="flaticon-play fs-18" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="MLpWrANjFbI"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
