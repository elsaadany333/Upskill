import React from "react";
import Image from "next/image";
import { instructors3 } from "@/data/instractors";
export default function Instractors() {
  return (
    <section className="section-instructors tf-spacing-36">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                Education which promotes characters.
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
            <div className="instructors-teacher-wrap">
              {instructors3.map((instructor, index) => (
                <div className="instructors-teacher-item" key={index}>
                  <div className="instructors-img">
                    <Image
                      className="lazyloaded"
                      src={instructor.imgSrc}
                      alt={instructor.name}
                      width={520}
                      height={581}
                    />
                  </div>
                  <div className="instructors-content">
                    <a href="#">
                      <h6>{instructor.name}</h6>
                    </a>
                    <p>{instructor.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="item-event-btn">
              <a href="#" className="tf-btn">
                See All Teacher
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="instructors-teacher-img">
        <Image
          className="lazyloaded"
          src="/images/item/item-17.png"
          data-=""
          alt=""
          width={358}
          height={344}
        />
      </div>
    </section>
  );
}
