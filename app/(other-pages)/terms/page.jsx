import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Instractors from "@/components/otherPages/Instractors";
import React from "react";
import Link from "next/link";
export const metadata = {
  title:
    "Terms || UpSkill - Education Online Courses LMS React Nextjs Template",
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
        <div className="page-title page-title-terms">
          <div className="tf-container">
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
                  <h2 className="font-cardo fw-7">Terms &amp; Conditions</h2>
                  <h6>
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content pt-0">
          <section className="section-page-terms">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="content">
                    <div className="basic-terms">
                      <h2
                        className="text-22 fw-5 font-outfit wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        Basic Terms
                      </h2>
                      <p
                        className="text-1 fs-15 wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        Lorem ipsum dolor sit amet consectur adipisicing elit,
                        sed do eiusmod tempor inc idid unt ut labore et dolore
                        magna aliqua enim ad minim veniam, quis nostrud exerec
                        tation ullamco laboris nis aliquip commodo consequat
                        duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur enim
                        ipsam.
                      </p>
                      <p
                        className="text-2 fs-15 wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        Excepteur sint occaecat cupidatat non proident sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium totam rem
                        aperiam
                      </p>
                    </div>
                    <div className="right-and-restriction">
                      <h2
                        className="text-22 fw-5 font-outfit wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        Rights &amp; Restrictions
                      </h2>
                      <ul className="list-text">
                        <li
                          className="item-text fs-15 wow fadeInUp"
                          data-wow-delay="0s"
                        >
                          There are no skill prerequisites for this course
                          although it's helpful if you are familiar with
                          operating your computer and usin.
                        </li>
                        <li
                          className="item-text fs-15 wow fadeInUp"
                          data-wow-delay="0s"
                        >
                          You can take this course using a Mac, PC or LInux
                          machine.
                        </li>
                        <li
                          className="item-text fs-15 wow fadeInUp"
                          data-wow-delay="0s"
                        >
                          It is recommended that you download the free Komodo
                          text editor.
                        </li>
                      </ul>
                    </div>
                    <div className="acces-and-use">
                      <h2
                        className="text-22 fw-5 font-outfit wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        Access and Use of the Services
                      </h2>
                      <p
                        className="text-1 fs-15 wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <p
                        className="text-2 fs-15 wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
