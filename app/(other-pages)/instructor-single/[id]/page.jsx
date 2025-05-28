import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import InstractorSingle from "@/components/otherPages/InstractorSingle";

import React from "react";
import Link from "next/link";
import { allInstractors } from "@/data/instractors";
export const metadata = {
  title:
    "Instractor Single || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page({ params }) {
  const instractor =
    allInstractors.filter((elm) => elm.id == params.id)[0] || allInstractors[0];
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>

        <Header1 />
        <div className="instructor-page-title page-title style-5">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8">
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
                    <li>Pages</li>
                    <li>
                      <i className="icon-arrow-right" />
                    </li>
                    <li>Instructor</li>
                  </ul>
                  <h2 className="font-cardo fw-7">
                    Hi, I Am {instractor.name}
                  </h2>
                  <p className="except">Developer and Teacher</p>
                  <ul className="entry-meta mb-30">
                    <li>
                      <div className="ratings">
                        <div className="number">4.9</div>
                        <i className="icon-star-1" />
                        <i className="icon-star-1" />
                        <i className="icon-star-1" />
                        <i className="icon-star-1" />
                        <svg
                          width={12}
                          height={11}
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.54831 7.10382L3.58894 6.85477L3.41273 6.67416L1.16841 4.37373L4.24914 3.90314L4.51288 3.86286L4.62625 3.62134L5.99989 0.694982L7.37398 3.62182L7.48735 3.86332L7.75108 3.9036L10.8318 4.37419L8.58749 6.67462L8.41128 6.85523L8.4519 7.10428L8.98079 10.3465L6.24201 8.8325L6.00014 8.69879L5.75826 8.83247L3.01941 10.3461L3.54831 7.10382ZM11.0444 4.15626L11.0442 4.15651L11.0444 4.15626Z"
                            stroke="#131836"
                          />
                        </svg>
                        <p className="total fs-15">315,475 rating</p>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-book fs-16" />
                      <p className="fs-15">11 Lessons</p>
                    </li>
                    <li>
                      <i className="flaticon-user fs-18" />
                      <p className="fs-15">200 Students</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-page-instructor-single">
          <InstractorSingle />
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
