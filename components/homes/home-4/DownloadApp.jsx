import React from "react";
import Image from "next/image";
export default function DownloadApp() {
  return (
    <section className="section-mobile-app style2 bg-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-left">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Download &amp; Enjoy</p>
                </div>
              </div>
              <h2
                className="fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.2s"
              >
                The Best Place To{" "}
                <span className="tf-secondary-color">Learn?</span>
                <br />
                Wherever You Are.
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                With the UpSkill App, you can learn no matter where you are.
                <br />
                Download now to learn anything, anytime for free.
              </p>
              <ul
                className="tf-app-download tf-app-download-style-2 app-download-mobie wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <li>
                  <a href="#">
                    <div className="icon">
                      <i className="icon-apple" />
                    </div>
                    <div className="app">
                      <div>Download on the</div>
                      <div>Apple Store</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <i className="icon-chplay" />
                    </div>
                    <div className="app">
                      <div>Get in on</div>
                      <div>Google Play</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <Image
                className="lazyload"
                data-src="/images/section/mobile-app-3.png"
                alt=""
                src="/images/section/mobile-app-3.png"
                width={1352}
                height={991}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
