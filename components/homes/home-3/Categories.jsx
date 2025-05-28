import { categories2 } from "@/data/categories";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Categories() {
  return (
    <section className="tf-spacing-5 section-categories pt-0">
      <div className="tf-container">
        <div className="heading-section text-center">
          <h2 className="fw-7 wow fadeInUp" data-wow-delay="0.1s">
            Top Categories
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Lorem ipsum dolor sit amet elit
          </p>
        </div>
        <div className="categories-items">
          <div className="row">
            {categories2.map((category, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <div
                  className="categories-item categories-item-default wow fadeInUp"
                  data-wow-delay={category.delay}
                >
                  <div className="categories-item-image">
                    <Image
                      className="lazyload"
                      src={category.imgSrc}
                      alt={category.alt}
                      style={{ width: "fit-content" }}
                      width={180}
                      height={180}
                    />
                  </div>
                  <div className="categories-item-content">
                    <Link href={`/categories`} className="text">
                      {category.category}
                    </Link>
                    <div className="categories-item-btn">
                      <a href="#" className="flex items-center gap-10">
                        <span>{category.courses}</span>
                        <i className="icon-arrow-top-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="categories-btn flex justify-center">
          <Link
            href={`/categories`}
            className="tf-btn-arrow wow fadeInUp"
            data-wow-delay="0.4s"
          >
            Show More Categories
            <i className="icon-arrow-top-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
