"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ShortBy from "./ShortBy";
import Pagination from "../common/Pagination";
import { courses3 } from "@/data/courese";
import Link from "next/link";
import Image from "next/image";
import SortDropdown from "../common/SortDropdown";
import { useContextElement } from "@/context/Context";
import FilterDropdown from "./FilterDropdown";
export default function CourseList3() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
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
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedInstractors, setSelectedInstractors] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [rating, setRating] = useState([]);
  const [filtered, setFiltered] = useState(courses3);
  const [sortingOption, setSortingOption] = useState("Default");
  const [sorted, setSorted] = useState(courses3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let filteredArrays = [];

    if (selectedCategories.length) {
      const filteredByCategories = [...courses3].filter((elm) =>
        selectedCategories.some((el) => elm.filterCategories.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByCategories];
    }

    if (selectedInstractors.length) {
      const filteredByInstractors = [...courses3].filter((elm) =>
        selectedInstractors.some((el) => elm.instractors.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByInstractors];
    }

    if (selectedLevels.length) {
      const filteredByLevel = [...courses3].filter((elm) =>
        selectedLevels.every((el) => elm.level.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByLevel];
    }

    if (selectedLanguages.length) {
      const filteredByLanguage = [...courses3].filter((elm) =>
        selectedLanguages.some((el) => elm.language.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByLanguage];
    }

    if (selectedDurations.length) {
      const filteredByDuration = [...courses3].filter((elm) =>
        selectedDurations.every((el) => elm.duration.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByDuration];
    }

    if (selectedFeatures.length) {
      const filteredByFeatures = [...courses3].filter((elm) =>
        selectedFeatures.every((el) => elm.features.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByFeatures];
    }

    if (rating.length) {
      const filteredByRating = [...courses3].filter((elm) =>
        rating.map((el) => Math.round(el)).includes(Math.round(elm.rating))
      );
      filteredArrays = [...filteredArrays, filteredByRating];
    }

    if (selectedPrices.length) {
      let filteredByPaid = [];
      let filteredByFree = [];
      if (selectedPrices.includes("Paid")) {
        filteredByPaid = [...courses3].filter((elm) => elm.price != 0);
      }
      if (selectedPrices.includes("Free")) {
        filteredByFree = [...courses3].filter((elm) => elm.price == 0);
      }
      const filterByPrice = [...filteredByPaid, ...filteredByFree];
      filteredArrays = [...filteredArrays, filterByPrice];
    }
    const commonItems = [...courses3].filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    setFiltered(commonItems);
  }, [
    selectedCategories,
    selectedDurations,
    selectedFeatures,
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
      <div className="main-content pt-0">
        <div className="page-inner tf-spacing-1 pt-0">
          <div className="tf-container">
            <div
              className="tf-mobile-sidebar-btn btn-right"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <i className="flaticon-setting" />
            </div>
            <div className="row">
              <div className="col-xl-3">
                <Sidebar
                  selectedCategories={selectedCategories}
                  selectedDurations={selectedDurations}
                  selectedFeatures={selectedFeatures}
                  selectedInstructors={selectedInstractors}
                  selectedLanguages={selectedLanguages}
                  selectedLevels={selectedLevels}
                  selectedPrices={selectedPrices}
                  setSelectedCategories={setSelectedCategories}
                  setSelectedDurations={setSelectedDurations}
                  setSelectedFeatures={setSelectedFeatures}
                  setSelectedInstructors={setSelectedInstractors}
                  setSelectedLanguages={setSelectedLanguages}
                  setSelectedLevels={setSelectedLevels}
                  setSelectedPrices={setSelectedPrices}
                  rating={rating}
                  setRating={setRating}
                />
              </div>
              <div className="col-xl-9">
                <div className="wrap-courses style-left">
                  <div className="sort-by-wrap mb-30">
                    <div className="sort-wrap">
                      <p className="text text-1 flex-grow wow fadeInUp">
                        {sorted.length ? (
                          <>
                            {" "}
                            Showing {(currentPage - 1) * 12 + 1} -{" "}
                            {currentPage * 12} Of {sorted.length} Courses
                          </>
                        ) : (
                          "No products found. Please try another filter"
                        )}
                      </p>
                      <div className="d-flex">
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
                  <div className="grid-list-items-3">
                    {sorted
                      .slice((currentPage - 1) * 12, currentPage * 12)
                      .map((elm, i) => (
                        <div
                          key={i}
                          className="course-item hover-img h240 wow fadeInUp"
                          data-wow-delay={elm.wowDelay}
                        >
                          <div className="features image-wrap">
                            <Image
                              className="lazyload"
                              alt=""
                              src={elm.imgSrc}
                              width={520}
                              height={380}
                            />
                            <div
                              className={`box-wishlist tf-action-btns ${
                                isAddedtoWishlist(elm.id) ? "active" : ""
                              } `}
                              onClick={() => toggleWishlist(elm.id)}
                            >
                              <i className="flaticon-heart" />
                            </div>
                          </div>
                          <div className="content">
                            <div className="meta">
                              <div className="meta-item">
                                <i className="flaticon-calendar" />
                                <p>{elm.lessons} Lessons</p>
                              </div>
                              <div className="meta-item">
                                <i className="flaticon-user" />
                                <p>{elm.students} Students</p>
                              </div>
                              <div className="meta-item">
                                <i className="flaticon-clock" />
                                <p>{elm.hours} hours</p>
                              </div>
                            </div>
                            <h5 className="fw-5 line-clamp-2">
                              <Link href={`/course-single-v1/${elm.id}`}>
                                {elm.title}
                              </Link>
                            </h5>
                            <div className="ratings pb-30">
                              <div className="number">{elm.rating}</div>
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
                              <div className="total">({elm.totalReviews})</div>
                            </div>
                            <div className="author">
                              By:
                              <a href="#" className="author">
                                {" "}
                                {elm.author}
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h5 price fw-5">${elm.price}</div>
                              <Link
                                href={`/course-single-v1/${elm.id}`}
                                className="tf-btn-arrow"
                              >
                                <span className="fw-5">Enroll Course</span>
                                <i className="icon-arrow-top-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <ul className="wg-pagination justify-center wow fadeInUp">
                    <Pagination
                      itemLength={sorted.length}
                      itemPerPage={12}
                      setPage={setCurrentPage}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FilterDropdown
        selectedCategories={selectedCategories}
        selectedDurations={selectedDurations}
        selectedFeatures={selectedFeatures}
        selectedInstructors={selectedInstractors}
        selectedLanguages={selectedLanguages}
        selectedLevels={selectedLevels}
        selectedPrices={selectedPrices}
        setSelectedCategories={setSelectedCategories}
        setSelectedDurations={setSelectedDurations}
        setSelectedFeatures={setSelectedFeatures}
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
