"use client";
import React from "react";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";
import { articles, blogArticles5 } from "@/data/blogs";
export default function Blogs2() {
  return (
    <section className="tf-spacing tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="page-blog-list">
              <div className="left">
                <div className="wrap-blog-list">
                  {blogArticles5.map((article, index) => (
                    <div
                      className="blog-article-item style-row hover-img wow fadeInUp"
                      key={index}
                    >
                      <div className="article-thumb image-wrap">
                        <Image
                          className="lazyload"
                          data-src={article.imgSrc}
                          alt={article.alt}
                          src={article.imgSrc}
                          width={article.width}
                          height={article.height}
                        />
                      </div>
                      <div className="article-content">
                        <div className="article-label">
                          <Link
                            href={`/blog-single/${article.id}`}
                            className=""
                          >
                            {article.category}
                          </Link>
                        </div>
                        <h3 className="fw-5 font-outfit">
                          <Link href={`/blog-single/${article.id}`}>
                            {article.title}
                          </Link>
                        </h3>
                        <p>{article.description}</p>
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
                        <Link
                          href={`/blog-single/${article.id}`}
                          className="tf-btn-arrow"
                        >
                          Read More <i className="icon-arrow-top-right" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="wg-pagination justify-center wow fadeInUp">
                  <Pagination />
                </ul>
              </div>
              <div className="right tf-sidebar">
                <div className="sidebar-search">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="form-search"
                  >
                    <fieldset>
                      <input
                        className=""
                        type="text"
                        placeholder="Search"
                        name="text"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <div className="button-submit">
                      <button className="" type="submit">
                        <i className="icon-search fs-20" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="sidebar-item sidebar-categories tf-collapse-item">
                  <div className="sidebar-title tf-collapse-title">
                    <h5 className="fw-5">Categories</h5>
                    <i className="tf-collapse-icon icon-arrow-top" />
                  </div>
                  <ul className="tf-collapse-content">
                    <li className="flex items-center justify-between">
                      <a href="" className="fs-15">
                        Web Development
                      </a>
                      <div className="number">(432)</div>
                    </li>
                    <li className="flex items-center justify-between">
                      <a href="" className="fs-15">
                        Software Testing
                      </a>
                      <div className="number">(12)</div>
                    </li>
                    <li className="flex items-center justify-between">
                      <a href="" className="fs-15">
                        Mobile Development
                      </a>
                      <div className="number">(324)</div>
                    </li>
                    <li className="flex items-center justify-between">
                      <a href="" className="fs-15">
                        Game Development
                      </a>
                      <div className="number">(87)</div>
                    </li>
                    <li className="flex items-center justify-between">
                      <a href="" className="fs-15">
                        Software Engineering
                      </a>
                      <div className="number">(163)</div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-item sidebar-recent tf-collapse-item pb-36">
                  <div className="sidebar-title tf-collapse-title">
                    <h5 className="fw-5">Recent Posts</h5>
                    <i className="tf-collapse-icon icon-arrow-top" />
                  </div>
                  <ul className="tf-collapse-content">
                    {articles.map((article) => (
                      <li key={article.id} className="recent-item hover-img">
                        <div className="image image-wrap">
                          <Image
                            className="lazyload"
                            data-src={article.imgSrc}
                            alt=""
                            src={article.imgSrc}
                            width={article.imgWidth}
                            height={article.imgHeight}
                          />
                        </div>
                        <div className="content">
                          <div className="font-outfit text-15 fw-5">
                            <Link href={`/blog-single/${article.id}`}>
                              {article.title}
                            </Link>
                          </div>
                          <p>{article.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-item tf-collapse-item">
                  <div className="sidebar-title tf-collapse-title">
                    <h5 className="fw-5">Tags</h5>
                    <i className="tf-collapse-icon icon-arrow-top" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="tags-list">
                      <li>
                        <a href="#" className="tags-item">
                          Course
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tags-item">
                          SEO
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tags-item">
                          Designer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tags-item">
                          Software
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tags-item">
                          Java
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tags-item">
                          CSS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
