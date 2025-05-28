import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="page-title-home10">
      <div className="image-bg">
        <div className="image1">
          <Image
            alt=""
            src="/images/item/item-12.png"
            width={358}
            height={736}
          />
        </div>
        <div className="image2">
          <Image
            alt=""
            src="/images/item/item-13.png"
            width={520}
            height={590}
          />
        </div>
        <div className="image3">
          <Image
            alt=""
            src="/images/item/item-14.png"
            width={422}
            height={320}
          />
        </div>
      </div>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content text-center">
              <h1 className="fw-7 wow fadeInUp" data-wow-delay="0.1s">
                Develop and learn through fun <br />
                and creativity!
              </h1>
              <h6 className="wow fadeInUp" data-wow-delay="0.2s">
                A wonderful environment where children can learn and grow.
              </h6>
              <div
                className="bottom-btns justify-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a href="#" className="tf-btn style-third">
                  About Us
                  <i className="icon-arrow-top-right" />
                </a>
                <a href="#" className="tf-btn style-secondary">
                  Enroll Now!
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container full">
        <div className="row">
          <div className="col-12">
            <div className="image-bot">
              <Image
                className="lazyload"
                data-src="/images/page-title/page-title-home10.jpg"
                alt=""
                src="/images/page-title/page-title-home10.jpg"
                width={3400}
                height={1360}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
