"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { shopItems } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import ShopFilter from "./ShopFilter";
import { useContextElement } from "@/context/Context";
import SortDropdown from "../common/SortDropdown";
export default function ShopList() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".nice-select");

    const toggleDropdown = (event) => {
      event.currentTarget.closest(".nice-select").classList.toggle("open");
    };

    const handleClickOutside = (event) => {
      dropdowns.forEach((elm) => {
        if (!elm.contains(event.target)) {
          elm.classList.remove("open");
        }
      });
    };

    // Add event listeners to each dropdown element
    dropdowns.forEach((elm) =>
      elm.querySelector(".current")?.addEventListener("click", toggleDropdown)
    );

    // Add a global click event listener to detect outside clicks
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listeners on component unmount
    return () => {
      dropdowns.forEach((elm) =>
        elm
          .querySelector(".current")
          ?.removeEventListener("click", toggleDropdown)
      );
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedInstractors, setSelectedInstractors] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [rating, setRating] = useState([]);
  const [filtered, setFiltered] = useState(shopItems);
  const [sortingOption, setSortingOption] = useState("Default");
  const [sorted, setSorted] = useState(shopItems);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let filteredArrays = [];

    if (selectedCategories.length) {
      const filteredByCategories = [...shopItems].filter((elm) =>
        selectedCategories.some((el) => elm.filterCategories.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByCategories];
    }

    if (selectedInstractors.length) {
      const filteredByInstractors = [...shopItems].filter((elm) =>
        selectedInstractors.some((el) => elm.instractors.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByInstractors];
    }

    if (selectedLevels.length) {
      const filteredByLevel = [...shopItems].filter((elm) =>
        selectedLevels.every((el) => elm.level.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByLevel];
    }

    if (selectedLanguages.length) {
      const filteredByLanguage = [...shopItems].filter((elm) =>
        selectedLanguages.some((el) => elm.language.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByLanguage];
    }

    if (rating.length) {
      const filteredByRating = [...shopItems].filter((elm) =>
        rating.map((el) => Math.round(el)).includes(Math.round(elm.rating))
      );
      filteredArrays = [...filteredArrays, filteredByRating];
    }

    if (selectedPrices.length) {
      let filteredByPaid = [];
      let filteredByFree = [];
      if (selectedPrices.includes("Paid")) {
        filteredByPaid = [...shopItems].filter((elm) => elm.price != 0);
      }
      if (selectedPrices.includes("Free")) {
        filteredByFree = [...shopItems].filter((elm) => elm.price == 0);
      }
      const filterByPrice = [...filteredByPaid, ...filteredByFree];
      filteredArrays = [...filteredArrays, filterByPrice];
    }
    const commonItems = [...shopItems].filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    setFiltered(commonItems);
  }, [
    selectedCategories,

    selectedInstractors,
    selectedLanguages,
    selectedLevels,
    selectedPrices,
    rating,
  ]);

  useEffect(() => {
    let sortedArray = [...filtered];

    if (sortingOption === "Title (A-Z)") {
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortingOption === "Title (Z-A)") {
      sortedArray.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortingOption === "Price (Low to High)") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortingOption === "Price (High to Low)") {
      sortedArray.sort((a, b) => b.price - a.price);
    } else if (sortingOption === "Rating (Low to High)") {
      sortedArray.sort((a, b) => a.rating - b.rating);
    } else if (sortingOption === "Rating (High to Low)") {
      sortedArray.sort((a, b) => b.rating - a.rating);
    }
    setSorted(sortedArray);
    setCurrentPage(1);
  }, [filtered, sortingOption]);
  return (
    <>
      <div className="main-content main-shop-list">
        <section className="section-shop-page tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="course-top-wrapper shop-list">
                  <div className="group-filter">
                    <div className="wg-filter">
                      <div
                        className="tf-btn btn-filter fs-15"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBackdrop"
                        aria-controls="offcanvasWithBackdrop"
                      >
                        <i className="flaticon-setting" />
                        All Filter
                      </div>
                    </div>
                  </div>
                  <div className="sort-by-wrap">
                    <div className="sort-wrap">
                      <p className="text text-1 fs-15 text-show">
                        {sorted.length ? (
                          <>
                            Showing {(currentPage - 1) * 10 + 1} -{" "}
                            {currentPage * 10} Of {sorted.length} Products
                          </>
                        ) : (
                          "No products found. Please try another filter"
                        )}
                      </p>
                      <SortDropdown
                        onChange={(value) => setSortingOption(value)}
                        options={[
                          "Default",
                          "Title (A-Z)",
                          "Title (Z-A)",
                          "Price (Low to High)",
                          "Price (High to Low)",
                          "Rating (Low to High)",
                          "Rating (High to Low)",
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid-list-items-5 grid-shop-list">
                  {sorted.map((elm, i) => (
                    <div
                      key={i}
                      className="shop-item course-item hover-img wow fadeInUp"
                      data-wow-delay={elm.delay}
                    >
                      <div className="shop-item-img">
                        <Image
                          className="lazyload"
                          src={elm.imgSrc}
                          data-=""
                          alt=""
                          width={360}
                          height={440}
                        />
                      </div>
                      <div className="content">
                        <h6 className="price fw-5">${elm.price}</h6>
                        <h6 className="fs-16 fw-5 name-book">
                          <Link href={`/shop-single/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h6>
                        <div className="ratings">
                          <div className="number">{elm.rating}</div>
                          {Array.from({ length: Math.round(elm.rating) }).map(
                            (_, i2) => (
                              <i className="icon-star-1" key={i2} />
                            )
                          )}
                          {Array.from({
                            length: Math.round(5 - elm.rating),
                          }).map((_, i2) => (
                            <svg
                              key={i2}
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
                          ))}

                          <div className="total">({elm.totalReviews})</div>
                        </div>
                      </div>
                      <a
                        className="tf-btn style-third"
                        onClick={() => addProductToCart(elm.id)}
                      >
                        <i className="flaticon-cart" />
                        {isAddedToCartProducts(elm.id)
                          ? "Already Added"
                          : "Add To Cart"}
                      </a>
                    </div>
                  ))}
                </div>
                {sorted.length ? (
                  <ul className="wg-pagination justify-center">
                    <Pagination />
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <ShopFilter
        selectedCategories={selectedCategories}
        selectedInstructors={selectedInstractors}
        selectedLanguages={selectedLanguages}
        selectedLevels={selectedLevels}
        selectedPrices={selectedPrices}
        setSelectedCategories={setSelectedCategories}
        setSelectedInstructors={setSelectedInstractors}
        setSelectedLanguages={setSelectedLanguages}
        setSelectedLevels={setSelectedLevels}
        setSelectedPrices={setSelectedPrices}
        rating={rating}
        setRating={setRating}
      />
    </>
  );
}
