import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ContactForm from "@/components/otherPages/contact/ContactForm";
import Features from "@/components/otherPages/contact/Features";
import Map from "@/components/otherPages/contact/Map";

import React from "react";
import Link from "next/link";
export const metadata = {
  title:
    "Contact || UpSkill - Education Online Courses LMS React Nextjs Template",
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
        <div className="page-title about">
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
                  <h2 className="font-cardo fw-7">Contact Us</h2>
                  <h6>
                    Become an instructor and change lives — including your own
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content pt-0">
          <div className="tf-spacing-24 pb-0">
            <Features />
            <ContactForm />
            <Brands />
            <Map />
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
