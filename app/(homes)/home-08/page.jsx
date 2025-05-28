import Brands from "@/components/common/Brands";
import Pricing from "@/components/common/Pricing";
import Footer1 from "@/components/footers/Footer1";
import Header8 from "@/components/headers/Header8";

import Countdown from "@/components/homes/home-8/Countdown";
import Courses from "@/components/homes/home-8/Courses";
import Facts from "@/components/homes/home-8/Facts";
import Faqs from "@/components/homes/home-8/Faqs";
import GetStarted from "@/components/homes/home-8/GetStarted";
import Hero from "@/components/homes/home-8/Hero";
import Languages from "@/components/homes/home-8/Languages";
import NewsLetter from "@/components/homes/home-8/NewsLetter";
import Teachers from "@/components/homes/home-8/Teachers";
import Testimonials from "@/components/homes/home-8/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home 8 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>

        <Header8 />
        <Hero />
        <div className="main-content pt-0">
          <Languages />
          <GetStarted />
          <Facts />
          <Courses />
          <Testimonials />
          <Teachers />
          <Brands />
          <Countdown />
          <Pricing />
          <Faqs />
          <NewsLetter />
        </div>
        <Footer1 parentClass="footer pt-66" />
      </div>
    </>
  );
}
