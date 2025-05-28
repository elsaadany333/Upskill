import CourseSingle1 from "@/components/course-single/CourseSingle1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { allCourses } from "@/data/courese";
import React from "react";

export const metadata = {
  title:
    "Course Single 1 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page({ params }) {
  const courseItem =
    allCourses.filter((elm) => elm.id == params.id)[0] || allCourses[0];
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>

        <Header1 />
        <div className="main-content pt-0">
          <CourseSingle1 courseItem={courseItem} />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
