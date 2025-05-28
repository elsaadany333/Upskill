import CourseList4 from "@/components/course-list/CourseList4";
import PageTitle from "@/components/course-list/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title:
    "Course Grid Right Sidebar || UpSkill - Education Online Courses LMS React Nextjs Template",
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
        <PageTitle parentClass="page-title style-2 has-tags-bg-white" />

        <CourseList4 />

        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
