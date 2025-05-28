import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import PageTitle from "@/components/shop/PageTitle";

import ShopSingle from "@/components/shop/ShopSingle";
import { shopItems } from "@/data/products";
import React from "react";

export const metadata = {
  title:
    "Shop Single || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page({ params }) {
  const product =
    shopItems.filter((elm) => elm.id == params.id)[0] || shopItems[0];
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>

        <Header1 />
        <PageTitle />
        <ShopSingle product={product} />
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
