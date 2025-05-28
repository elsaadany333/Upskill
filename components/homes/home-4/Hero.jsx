import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="page-title-home4">
      <div className="image-bg">
        <div className="image1">
          <Image alt="" src="/images/item/item-5.png" width={30} height={102} />
        </div>
        <div className="image2">
          <Image alt="" src="/images/item/item-6.png" width={178} height={74} />
        </div>
        <div className="image3">
          <Image
            alt=""
            src="/images/item/item-7.png"
            width={134}
            height={182}
          />
        </div>
        <div className="image5">
          <Image
            alt=""
            src="/images/item/item-9.png"
            width={1494}
            height={1109}
          />
        </div>
        <div className="image4">
          <Image
            alt=""
            src="/images/item/item-8.png"
            width={256}
            height={253}
          />
        </div>
        <div className="image6">
          <Image
            alt=""
            src="/images/item/item-10.png"
            width={274}
            height={280}
          />
        </div>
        <div className="image7">
          <Image
            alt=""
            src="/images/item/item-11.png"
            width={136}
            height={217}
          />
        </div>
      </div>
      <div className="tf-container">
        <div className="row items-center">
          <div className="col-lg-6">
            <div className="content">
              <h1
                className="fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <span className="tf-secondary-color">#1 Learning</span>
                Website <br />
                for Artists
              </h1>
              <h6 className="wow fadeInUp" data-wow-delay="0.2s">
                Start, switch, or advance your career with more than 5,000
                courses, <br />
                Professional Certificates, and degrees from world-class
                universities and <br />
                companies.
              </h6>
              <div className="bottom-btns wow fadeInUp" data-wow-delay="0.3s">
                <a href="#" className="tf-btn style-secondary">
                  Find Courses
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image">
              <div className="image1">
                <Image
                  className="lazyload"
                  data-src="/images/page-title/page-title-home4-1.jpg"
                  alt=""
                  src="/images/page-title/page-title-home4-1.jpg"
                  width={600}
                  height={900}
                />
              </div>
              <div>
                <div className="image2">
                  <Image
                    className="lazyload"
                    data-src="/images/page-title/page-title-home4-2.jpg"
                    alt=""
                    src="/images/page-title/page-title-home4-2.jpg"
                    width={600}
                    height={540}
                  />
                </div>
                <div className="image3">
                  <Image
                    className="lazyload"
                    data-src="/images/page-title/page-title-home4-3.jpg"
                    alt=""
                    src="/images/page-title/page-title-home4-3.jpg"
                    width={600}
                    height={540}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
