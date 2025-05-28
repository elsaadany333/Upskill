import Blogs from "@/components/common/Blogs";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header7 from "@/components/headers/Header7";
import Categories from "@/components/homes/home-7/Categories";
import Courses from "@/components/homes/home-7/Courses";
import Courses2 from "@/components/homes/home-7/Courses2";
import Foundamentals from "@/components/homes/home-7/Foundamentals";
import GetStarted from "@/components/homes/home-7/GetStarted";
import Hero from "@/components/homes/home-7/Hero";
import Instractors from "@/components/homes/home-7/Instractors";
import NewsLetter from "@/components/homes/home-7/NewsLetter";
import Skills from "@/components/homes/home-7/Skills";
import React from "react";

export const metadata = {
  title:
    "Home 7 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="tf-top-bar style-1 flex items-center justify-center">
        <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
      </div>
      <div className="home-7">
        <Header7 />
      </div>
      <Hero />
      <div className="main-content pt-0">
        <Categories />
        <GetStarted />
        <Courses />
        <Instractors />
        <Brands />
        <Courses2 />
        <Skills />
        <Foundamentals />
        <Blogs titleFont="" />
        <NewsLetter />
      </div>
      <Footer1 parentClass="footer style-2 ft-h7" />
    </>
  );
}
