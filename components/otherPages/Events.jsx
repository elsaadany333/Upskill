"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";
import SortDropdown from "../common/SortDropdown";
import { events5 } from "@/data/events";
export const categories = [
  "Web Development",
  "Software Testing",

  "Cybersecurity",
];
const locations = ["New York, Us", "London, UK"];
export default function Events() {
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
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filtered, setfiltered] = useState(events5);
  const [sorted, setSorted] = useState(events5);
  const [sortingOption, setSortingOption] = useState("Default");
  useEffect(() => {
    let filteredArrays = [];

    if (selectedCategories.length) {
      const filteredByCategories = [...events5].filter((elm) =>
        selectedCategories.every((el) => elm.filterCategories.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByCategories];
    }

    if (selectedLocations.length) {
      const filteredByLocation = [...events5].filter((elm) =>
        selectedLocations.some((el) => el.includes(elm.location))
      );
      filteredArrays = [...filteredArrays, filteredByLocation];
    }
    const commonItems = [...events5].filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    setfiltered(commonItems);
  }, [selectedCategories, selectedLocations]);

  useEffect(() => {
    let sortedArray = [...filtered];

    if (sortingOption === "Title (A-Z)") {
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortingOption === "Title (Z-A)") {
      sortedArray.sort((a, b) => b.title.localeCompare(a.title));
    }
    setSorted(sortedArray);
  }, [filtered, sortingOption]);
  return (
    <>
      <div className="tf-spacing-10 pb-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="top-wrapper page-event">
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
                              events5.filter((el) =>
                                el.filterCategories.includes(elm)
                              ).length
                            }
                            )
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="nice-select wow fadeInUp">
                    <span className="current">
                      Location
                      <i className="icon icon-triangular-down" />
                    </span>
                    <ul className="list style-radio">
                      {locations.map((elm, i) => (
                        <li key={i} className="checkbox-item fl-item2">
                          <label>
                            <p>{elm}</p>
                            <input
                              readOnly
                              onClick={(event) => {
                                event.stopPropagation(); // Prevent event bubbling
                                setSelectedLocations((pre) =>
                                  pre.includes(elm)
                                    ? pre.filter((el) => el !== elm)
                                    : [...pre, elm]
                                );
                              }}
                              checked={selectedLocations.includes(elm)}
                              type="radio"
                            />
                            <span className="btn-checkbox" />
                          </label>
                          <span>
                            ({" "}
                            {
                              events5.filter((el) => el.location.includes(elm))
                                .length
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
                        options={["Default", "Title (A-Z)", "Title (Z-A)"]}
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
      <section className="section-event tf-spacing-4 pt-0 page-event">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="grid-layout-4">
                {sorted.map((event, index) => (
                  <div
                    key={index}
                    className={`events-item style2 hover-img wow fadeInUp`}
                    data-wow-delay={event.wowDelay}
                  >
                    <div className="event-item-img image-wrap">
                      <Image
                        className="lazyload"
                        data-src={event.imgSrc}
                        alt=""
                        src={event.imgSrc}
                        width={658}
                        height={481}
                      />
                      <div className="event-item-date">
                        <h2 className="date-text fw-5">{event.date.day}</h2>
                        <h6 className="date-text fw-5">{event.date.month}</h6>
                      </div>
                    </div>
                    <div className="event-item-content">
                      <div className="event-item-sub">
                        <div className="item-sub-address">
                          <i className="flaticon-location" />
                          <p>{event.location}</p>
                        </div>
                        <div className="item-sub-time">
                          <i className="flaticon-clock" />
                          <p>{event.time}</p>
                        </div>
                      </div>
                      <div className="event-item-title fw-5 fs-18">
                        <Link href={`/event-single/${event.id}`}>
                          {event.title}
                        </Link>
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
