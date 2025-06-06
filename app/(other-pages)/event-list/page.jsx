import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Events from "@/components/otherPages/Events";

import React from "react";
import Link from "next/link";
export const metadata = {
  title:
    "Event List || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>
        <Header1 />
        <div className="page-title basic">
          <div className="tf-container full">
            <div className="row">
              <div className="col-12">
                <div className="content text-center">
                  <ul className="breadcrumbs flex items-center justify-center gap-10">
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
                  <h2 className="font-cardo fw-7">Events</h2>
                  <h6>
                    Products that help beginner designers become true unicorns.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content pt-0">
          <Events />
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
