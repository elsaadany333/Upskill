import React from "react";
import Image from "next/image";
import { offers } from "@/data/offers";
export default function Offers() {
  return (
    <section className="section-we-offer tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                What Care We Offer.
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                cons ectetur adipiscing elit, sed do eiusmod tempor
              </div>
            </div>
            <div className="we-offer-wrap pt-40">
              {offers.map((offer, index) => (
                <div
                  className="offer-item wow fadeInUp"
                  data-wow-delay={offer.delay}
                  key={index}
                >
                  <div className="offer-item-img">
                    <Image
                      className="lazyloaded"
                      src={offer.imgSrc}
                      alt={offer.title}
                      width={640}
                      height={768}
                    />
                  </div>
                  <div className="offer-item-content">
                    <a href="#">
                      <h4>{offer.title}</h4>
                    </a>
                    <p>{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="we-offer-img">
        <Image
          className="lazyloaded"
          src="/images/item/item-15.png"
          data-=""
          alt=""
          width={660}
          height={616}
        />
      </div>
    </section>
  );
}
