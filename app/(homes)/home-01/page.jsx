import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-1/Banner";
import Banner2 from "@/components/homes/home-1/Banner2";
import BecomeInstactor from "@/components/homes/home-1/BecomeInstactor";
import Blogs from "@/components/homes/home-1/Blogs";
import Brands from "@/components/common/Brands";
import Courses from "@/components/common/Courses";
import Facts from "@/components/homes/home-1/Facts";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Instractors from "@/components/homes/home-1/Instractors";
import Testimonials from "@/components/homes/home-1/Testimonials";

export const metadata = {
  title:
    "Home 1 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function HomePage1() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>

        <Header1 />
        <Hero />
        <div className="main-content pb-63">
          <Courses />
          <Features />
          <Facts />
          <Testimonials />
          <Banner />
          <Instractors />
          <BecomeInstactor />
          <Blogs />
          <Brands />
          <Banner2 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
