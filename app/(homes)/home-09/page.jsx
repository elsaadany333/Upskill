import Brands from "@/components/common/Brands";
import Courses from "@/components/common/Courses";
import Header9 from "@/components/headers/Header9";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Events from "@/components/homes/home-9/Events";
import About from "@/components/homes/home-9/About";
import Academic from "@/components/homes/home-9/Academic";
import CampusLife from "@/components/homes/home-9/CampusLife";
import Facts from "@/components/homes/home-9/Facts";
import Hero from "@/components/homes/home-9/Hero";
import React from "react";
import Blogs from "@/components/common/Blogs";
import WidgetInstagram from "@/components/homes/home-9/WidgetInstagram";
import NewsLetter from "@/components/homes/home-9/NewsLetter";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title:
    "Home 9 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <div id="wrapper">
      <Header9 />
      <Hero />
      <div className="main-content pt-0">
        <Academic />
        <About />
        <Facts />
        <Courses titleFont="" />
        <CampusLife />
        <div className="section-saying-h9 tf-spacing-8 pt-0"></div>
        <Testimonials titleFont="" />
        <Brands />
        <Events />
        <div className="section-saying-h9 tf-spacing-8 pt-0"></div>
        <Blogs titleFont="" />
        <WidgetInstagram />
        <NewsLetter />
      </div>
      <Footer1 parentClass="footer has-border-top style-4" />
    </div>
  );
}
