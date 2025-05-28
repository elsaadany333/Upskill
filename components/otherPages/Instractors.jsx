"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";
import SortDropdown from "../common/SortDropdown";

import { instructors4 } from "@/data/instractors";
import { categories } from "@/data/filterOptions";
export default function Instractors() {
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
  const [filtered, setfiltered] = useState(instructors4);
  const [sorted, setSorted] = useState(instructors4);
  const [sortingOption, setSortingOption] = useState("Default");

  useEffect(() => {
    if (selectedCategories.length) {
      const filteredByCategories = [...instructors4].filter((elm) =>
        selectedCategories.every((el) => elm.filterCategories.includes(el))
      );
      setfiltered(filteredByCategories);
    } else {
      setfiltered(instructors4);
    }
  }, [selectedCategories]);
  useEffect(() => {
    let sortedArray = [...filtered];

    if (sortingOption === "Name (A-Z)") {
      sortedArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingOption === "Name (Z-A)") {
      sortedArray.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortingOption === "Rating (Low to High)") {
      sortedArray.sort((a, b) => a.rating - b.rating);
    } else if (sortingOption === "Rating (High to Low)") {
      sortedArray.sort((a, b) => b.rating - a.rating);
    }
    setSorted(sortedArray);
  }, [filtered, sortingOption]);

  return (
    <>
      {/* top */}
      <div className="tf-spacing-10 pb-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="top-wrapper page-instructor">
                <div className="group-filter">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="form-search wow fadeInUp"
                  >
                    <fieldset>
                      <input
                        className=""
                        type="text"
                        placeholder="Search for anything"
                        name="text"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <div className="button-submit">
                      <button className="" type="submit">
                        <i className="icon-search fs-20" />
                      </button>
                    </div>
                  </form>
                  <div className="nice-select wow fadeInUp">
                    <span className="current">
                      Category
                      <i className="icon icon-triangular-down" />
                    </span>
                    <ul className="list style-radio">
                      {categories.map((elm, i) => (
                        <li key={i} className="checkbox-item fl-item2">
                          <label>
                            <p>{elm}</p>
                            <input
                              readOnly
                              onClick={(event) => {
                                event.stopPropagation(); // Prevent event bubbling
                                setSelectedCategories((pre) =>
                                  pre.includes(elm)
                                    ? pre.filter((el) => el !== elm)
                                    : [...pre, elm]
                                );
                              }}
                              checked={selectedCategories.includes(elm)}
                              type="radio"
                            />
                            <span className="btn-checkbox" />
                          </label>
                          <span>
                            (
                            {
                              instructors4.filter((el) =>
                                el.filterCategories.includes(elm)
                              ).length
                            }
                            )
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sort-by-wrap mt-0">
                  <div className="sort-wrap">
                    <div className="sort-by">
                      <SortDropdown
                        onChange={(value) => setSortingOption(value)}
                        options={[
                          "Default",
                          "Name (A-Z)",
                          "Name (Z-A)",

                          "Rating (Low to High)",
                          "Rating (High to Low)",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /top */}
      {/* section instructor */}
      <section className="section-instructor page-instructor tf-spacing-4 pt-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="grid-layout-5">
                {sorted.map((instructor, index) => (
                  <div
                    key={index}
                    className="instructors-item hover-img style-column wow fadeInUp"
                    data-wow-delay={instructor.delay}
                  >
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src={instructor.imgSrc}
                        alt=""
                        src={instructor.imgSrc}
                        width={520}
                        height={521}
                      />
                    </div>
                    <div className="entry-content">
                      <ul className="entry-meta">
                        <li>
                          <i className="flaticon-user" />
                          {instructor.students} Students
                        </li>
                        <li>
                          <i className="flaticon-play" />
                          {instructor.courses} Course
                        </li>
                      </ul>
                      <h6 className="entry-title">
                        <Link href={`/instructor-single/${instructor.id}`}>
                          {instructor.name}
                        </Link>
                      </h6>
                      <p className="short-description">
                        {instructor.description}
                      </p>
                      <div className="ratings">
                        <div className="number">{instructor.rating}</div>
                        <i className="icon-star-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="wg-pagination justify-center wow fadeInUp">
                <Pagination />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
