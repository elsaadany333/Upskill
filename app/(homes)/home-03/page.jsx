import Header3 from "@/components/headers/Header3";
import Brands from "@/components/common/Brands";
import Categories from "@/components/homes/home-3/Categories";
import Hero from "@/components/homes/home-3/Hero";
import React from "react";
import Courses from "@/components/homes/home-3/Courses";
import GetStarted from "@/components/homes/home-3/GetStarted";
import Facts from "@/components/homes/home-3/Facts";
import Instractor from "@/components/homes/home-3/Instractor";
import Events from "@/components/homes/home-3/Events";
import Banner from "@/components/homes/home-3/Banner";
import Blogs from "@/components/homes/home-3/Blogs";
import Newsletter from "@/components/homes/home-3/Newsletter";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title:
    "Home 3 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar style-1 flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>

        <Header3 />
        <Hero />
        <div className="main-content pb-182">
          <Categories />
          <Brands />
          <Courses />
          <GetStarted />
          <Facts />
          <Instractor />
          <Events />
          <Banner />
          <Blogs />
          <Newsletter />
        </div>
        <Footer1 parentClass="footer style-3" />
      </div>
    </>
  );
}
