import CourseSingle4 from "@/components/course-single/CourseSingle4";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title:
    "Course Single 4 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />
        <div className="main-content pt-0">
          <CourseSingle4 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
