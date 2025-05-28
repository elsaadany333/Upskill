import { categories } from "@/data/categories";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Categories() {
  return (
    <section className="section-categories tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="heading-section">
            <h2 className="letter-spacing-1 wow fadeInUp" data-wow-delay="0s">
              Top Categories
            </h2>
            <div className="flex items-center justify-between flex-wrap gap-10">
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet elit
              </div>
              <Link
                href={`/categories`}
                className="tf-btn-arrow wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Show More Categories
                <i className="icon-arrow-top-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wrap-icon-box">
              {categories.slice(0, 3).map((elm, i) => (
                <div
                  key={i}
                  className="icons-box style-2 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="icons">
                    <Image
                      src={elm.src}
                      height={elm.height}
                      width={elm.width}
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <Link className="fw-5" href={`/categories`}>
                        {elm.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wrap-icon-box">
              {categories.slice(3, 6).map((elm, i) => (
                <div
                  key={i}
                  className="icons-box style-2 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="icons">
                    <Image
                      src={elm.src}
                      height={elm.height}
                      width={elm.width}
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <Link className="fw-5" href={`/categories`}>
                        {elm.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wrap-icon-box">
              {categories.slice(6, 9).map((elm, i) => (
                <div
                  key={i}
                  className="icons-box style-2 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="icons">
                    <Image
                      src={elm.src}
                      height={elm.height}
                      width={elm.width}
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <Link className="fw-5" href={`/categories`}>
                        {elm.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
