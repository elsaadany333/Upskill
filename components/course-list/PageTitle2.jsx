import React from "react";
import Link from "next/link";

export default function PageTitle2() {
  return (
    <div className="page-title all-course">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <ul className="breadcrumbs flex items-center gap-10">
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
              <h2 className="font-cardo fw-7">All Course List Style</h2>
              <h6 className="letter-spacing-2">
                With one of our online web development courses, you can explore
                different areas of this in-demand field.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
