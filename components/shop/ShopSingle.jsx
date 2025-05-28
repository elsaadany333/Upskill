"use client";
import React from "react";
import RelatedProducts from "./RelatedProducts";
import DetailTabs from "./DetailTabs";
import Image from "next/image";
import Drift from "drift-zoom";
import { useEffect } from "react";
import Quantity from "./Quantity";
import { useContextElement } from "@/context/Context";
export default function ShopSingle({ product }) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  useEffect(() => {
    // Function to initialize Drift
    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom");
      const pane = document.querySelector(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };
    imageZoom();
    const zoomElements = document.querySelectorAll(".tf-image-zoom");

    const handleMouseOver = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <div className="main-content content-shop-single tf-spacing-1">
      <section className="section-product-top shop-single">
        <div className="section-image-zoom">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="widget-content-image shop-single">
                  <Image
                    className="tf-image-zoom ls-is-cached lazyloaded"
                    data-zoom="/images/shop/shop-7.png"
                    data-src="/images/shop/shop-7.png"
                    alt=""
                    src="/images/shop/shop-7.png"
                    width={360}
                    height={441}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tf-product-infor-wrap position-relative">
                  <div className="tf-zoom-main" />
                  <div className="shop-detail-content">
                    <div className="ratings">
                      <div className="number">4.9</div>
                      <i className="icon-star-1" />
                      <i className="icon-star-1" />
                      <i className="icon-star-1" />
                      <i className="icon-star-1" />
                      <svg
                        width={12}
                        height={11}
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.54831 7.10382L3.58894 6.85477L3.41273 6.67416L1.16841 4.37373L4.24914 3.90314L4.51288 3.86286L4.62625 3.62134L5.99989 0.694982L7.37398 3.62182L7.48735 3.86332L7.75108 3.9036L10.8318 4.37419L8.58749 6.67462L8.41128 6.85523L8.4519 7.10428L8.98079 10.3465L6.24201 8.8325L6.00014 8.69879L5.75826 8.83247L3.01941 10.3461L3.54831 7.10382ZM11.0444 4.15626L11.0442 4.15651L11.0444 4.15626Z"
                          stroke="#131836"
                        />
                      </svg>
                      <div className="total">(230)</div>
                    </div>
                    <h2 className="product-title font-cardo">
                      {product.title}
                    </h2>
                    <p className="author">
                      By: <a href="#">Carolyn Welborn</a>
                    </p>
                    <div className="tf-price">
                      <div className="price-on-sale">$&nbsp;249.00</div>
                      <div className="compare-at-price">$&nbsp;449.00</div>
                    </div>
                    <div className="description">
                      <p className="fs-15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tempus nulla faucibus viverra nisl non senectus tortor.
                      </p>
                    </div>
                    <div className="flex gap-20 mb-30 form-add-to-card">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <Quantity />
                      </form>
                      <a
                        className="tf-btn"
                        onClick={() => addProductToCart(product.id)}
                      >
                        <i className="flaticon-buy" />{" "}
                        {isAddedToCartProducts(product.id)
                          ? "Already Added"
                          : "Add To Cart"}
                      </a>
                    </div>
                    <div className="product_meta">
                      <div className="item">
                        <p>Sku:</p>
                        <p>RTA-0058</p>
                      </div>
                      <div className="item">
                        <p>Category:</p>
                        <p>
                          <a href="#">designer</a>, <a href="#">books</a>
                        </p>
                      </div>
                      <div className="item">
                        <p>Tags:</p>
                        <p>
                          <a href="#">ui</a>, <a href="#">ux</a>,
                          <a href="#">web</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DetailTabs />
      <RelatedProducts />
    </div>
  );
}
