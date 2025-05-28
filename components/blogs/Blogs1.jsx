"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";
import { blogArticles4 } from "@/data/blogs";
const items = ["Computer Engineering", "Software", "Web Design"];
export default function Blogs1() {
  const [currentCategory, setcurrentCategory] = useState("");
  const [filtered, setFiltered] = useState(blogArticles4);
  useEffect(() => {
    if (currentCategory) {
      setFiltered(
        blogArticles4.filter((elm) =>
          elm.filterCategories.includes(currentCategory)
        )
      );
    } else {
      setFiltered(blogArticles4);
    }
  }, [currentCategory]);

  return (
    <section className="tf-spacing tf-spacing-1 page-blog-grid">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="tabs-with-filter style-row">
              <ul className="widget-menu-tab mb-40 overflow-x-auto">
                <li
                  className={`item-title h4 fw-5 wow fadeInUp  ${
                    currentCategory == "" ? "active" : ""
                  }`}
                  onClick={() => setcurrentCategory("")}
                >
                  All
                </li>
                {items.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setcurrentCategory(item)}
                    className={`item-title h4 fw-5 wow fadeInUp ${
                      currentCategory == item ? "active" : ""
                    }`}
                    data-wow-delay={`${0.1 * (index + 1)}s`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="widget-content-tab">
                <div className="widget-content-inner active">
                  <div className="grid-layout-4">
                    {filtered.map((article, index) => (
                      <div
                        className={`blog-article-item hover-img wow fadeInUp`}
                        data-wow-delay={article.wowDelay}
                        key={index}
                      >
                        <div className="article-thumb image-wrap">
                          <Image
                            className="lazyload"
                            data-src={article.imgSrc}
                            alt={article.imgAlt}
                            src={article.imgSrc}
                            width={article.imgWidth}
                            height={article.imgHeight}
                          />
                        </div>
                        <div className="article-content">
                          <div className="article-label">
                            <Link href={`/blog-single/${article.id}`}>
                              {article.label}
                            </Link>
                          </div>
                          <h5 className="fw-5">
                            <Link href={`/blog-single/${article.id}`}>
                              {article.title}
                            </Link>
                          </h5>
                          <div className="meta">
                            <div className="meta-item">
                              <i className="flaticon-calendar" />
                              <p>{article.date}</p>
                            </div>
                            <div className="meta-item">
                              <i className="flaticon-message" />
                              <p>{article.comments}</p>
                            </div>
                            <a href="#" className="meta-item">
                              <i className="flaticon-user-1" />
                              <p>{article.author}</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ul className="wg-pagination justify-center wow fadeInUp">
              <Pagination />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
