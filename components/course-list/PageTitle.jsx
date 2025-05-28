import React from "react";
import Link from "next/link";

export default function PageTitle({
  parentClass = "page-title style-2 no-border has-bg4 py-60",
}) {
  return (
    <div className={parentClass}>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <ul className="breadcrumbs flex items-center justify-start gap-10 mb-60">
                <li>
                  <Link href={`/`} className="flex">
                    <i className="icon-home" />
                  </Link>
                </li>
                <li>
                  <i className="icon-arrow-right" />
                </li>
                <li>Development</li>
                <li>
                  <i className="icon-arrow-right" />
                </li>
                <li>Web Development</li>
              </ul>
              <h2 className="font-cardo fw-7">Web Development Courses</h2>
              <p>
                With one of our online web development courses, you can explore
                different areas of this in-demand field.
              </p>
              <div className="widget tags-list style3">
                <h6>Topics related to Web Development</h6>
                <ul className="tag-list">
                  <li className="tag-list-item">
                    <a href="#">Design </a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">UX</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Java</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">SEO</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Python</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Digital Media</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Software Development</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
