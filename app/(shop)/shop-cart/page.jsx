import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import PageTitle from "@/components/shop/PageTitle";
import ShopCart from "@/components/shop/ShopCart";

import React from "react";

export const metadata = {
  title:
    "Shop Cart || UpSkill - Education Online Courses LMS React Nextjs Template",
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
        <PageTitle />
        <ShopCart />
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
