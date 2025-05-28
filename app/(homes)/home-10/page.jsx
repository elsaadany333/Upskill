import Brands from "@/components/common/Brands";

import Footer2 from "@/components/footers/Footer2";
import Header10 from "@/components/headers/Header10";
import Testimonials from "@/components/homes/home-1/Testimonials";
import About from "@/components/homes/home-10/About";
import Blogs from "@/components/homes/home-10/Blogs";
import Events from "@/components/homes/home-10/Events";
import Features from "@/components/homes/home-10/Features";
import Features2 from "@/components/homes/home-10/Features2";
import Hero from "@/components/homes/home-10/Hero";
import Instagram from "@/components/homes/home-10/Instagram";
import Instractors from "@/components/homes/home-10/Instractors";
import Offers from "@/components/homes/home-10/Offers";
import React from "react";

export const metadata = {
  title:
    "Home 10 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header10 />
        <Hero />
        <div className="main-content pt-0">
          <Features />
          <Offers />
          <Events />
          <About />
          <Brands />

          <Testimonials
            titleFont=""
            parentClass="tf-spacing-5 widget-saying bg-4"
          />
          <Instractors />
          <Features2 />
          <Blogs />
          <Instagram />
        </div>
        <div className="relative">
          <Footer2 parentClass="footer style-3 style-6" />{" "}
        </div>
      </div>
    </>
  );
}
