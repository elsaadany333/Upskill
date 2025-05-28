import CourseSingle2 from "@/components/course-single/CourseSingle2";
import CourseSingle3 from "@/components/course-single/CourseSingle3";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title:
    "Course Single 3 || UpSkill - Education Online Courses LMS React Nextjs Template",
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
        <div className="main-content main-course-single-v3">
          <CourseSingle3 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
