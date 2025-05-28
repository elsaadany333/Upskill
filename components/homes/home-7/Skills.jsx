"use client";
import React from "react";
import Image from "next/image";
import { learnItems } from "@/data/skills";
export default function Skills() {
  return (
    <section className="section-learn-h7 bg-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                What Will You Learn
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                10,000+ unique online course list designs
              </div>
            </div>
            <div
              className="widget-learn-wrap pt-25 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {learnItems.map((item, index) => (
                <div key={index} className="learn-item learn-item-default">
                  <div className="image-box">
                    <Image
                      className="ls-is-cached lazyloaded"
                      src={item.src}
                      alt={item.alt}
                      width={66}
                      height={58}
                    />
                  </div>
                  <p className="fs-15">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
