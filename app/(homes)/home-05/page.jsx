import Brands from "@/components/common/Brands";
import Header5 from "@/components/headers/Header5";
import Faqs from "@/components/homes/home-5/Faqs";
import Blogs from "@/components/homes/home-5/Blogs";
import Courses from "@/components/homes/home-5/Courses";
import Features from "@/components/homes/home-5/Features";
import GetStarted from "@/components/homes/home-5/GetStarted";
import Hero from "@/components/homes/home-5/Hero";
import Instractors from "@/components/homes/home-5/Instractors";
import Testimonials from "@/components/homes/home-5/Testimonials";
import React from "react";
import WidgetInstagram from "@/components/homes/home-5/WidgetInstagram";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title:
    "Home 5 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header5 />
        <Hero />
        <div className="main-content pt-0">
          <Features />
          <Courses />
          <GetStarted />
          <Testimonials />
          <Instractors />
          <Brands />
          <Blogs />

          <Faqs />
          <WidgetInstagram />
        </div>
        <div className="pt-66"></div>
        <Footer1 />
      </div>
    </>
  );
}
