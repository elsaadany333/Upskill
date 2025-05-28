"use client";
import {
  categories,
  instractors,
  languages,
  levels,
  prices,
} from "@/data/filterOptions2";
import { shopItems } from "@/data/products";
import React, { useEffect } from "react";
export default function ShopFilter(props) {
  const {
    selectedCategories,

    selectedInstructors,
    selectedLanguages,
    selectedLevels,
    selectedPrices,
    setSelectedCategories,

    setSelectedInstructors,
    setSelectedLanguages,
    setSelectedLevels,
    setSelectedPrices,
    rating,
    setRating,
  } = props;
  const clearFilter = () => {
    setSelectedCategories([]);

    setSelectedInstructors([]);
    setSelectedLanguages([]);
    setSelectedLevels([]);
    setSelectedPrices([]);

    setRating([]);
  };

  useEffect(() => {
    // Select all buttons with the .btn-showmore class
    const showMoreButtons = document.querySelectorAll(".btn-showmore");

    // Loop through each button
    showMoreButtons.forEach((button) => {
      // Add a click event listener to each button
      button.addEventListener("click", () => {
        // Check if the button has a previous sibling element
        if (button.previousElementSibling) {
          const previousElement = button.previousElementSibling;

          // Get the computed style of the previous element
          const previousElementStyle = window.getComputedStyle(previousElement);

          // Check if the height is not 0px
          if (previousElementStyle.height !== "0px") {
            // Apply styles to the previous element if height is not 0px
            previousElement
              .querySelectorAll(".d-none")
              .forEach((el) => el.classList.remove("d-none"));

            previousElement.style.height = previousElement.scrollHeight + "px";
            button.style.display = "none";
          }
        }
      });
    });

    // Cleanup: remove event listeners when component unmounts
    return () => {
      showMoreButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);
  return (
    <div
      className="tf-sidebar filter offcanvas offcanvas-start"
      tabIndex={-2}
      id="offcanvasWithBackdrop"
      aria-labelledby="offcanvasWithBackdropLabel"
    >
      <div className="widget heading-title">
        <h5>All Filter</h5>
        <i
          className="flaticon-close-1 btn-close"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body overflow-y-auto">
        <div className="sidebar-item widget wg-categorie tf-collapse-item">
          <div className="sidebar-title tf-collapse-title">
            <h5 className="fw-5">Categories</h5>
            <i className="tf-collapse-icon icon-arrow-top" />
          </div>
          <ul className="tf-collapse-content showmore-item">
            {categories.map((elm, i) => (
              <li
                key={i}
                className={`checkbox-item fl-item2  ${i > 4 ? "d-none" : ""}`}
              >
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
                    shopItems.filter((el) => el.filterCategories.includes(elm))
                      .length
                  }
                  )
                </span>
              </li>
            ))}
          </ul>
          <div className="btn-showmore showmore view-more-button">
            <span className="title">
              Show More <i className="icon icon-arrow-bottom" />
            </span>
          </div>
        </div>
        <div className="sidebar-item widget wg-categorie tf-collapse-item">
          <div className="sidebar-title tf-collapse-title">
            <h5 className="fw-5">Rating</h5>
            <i className="tf-collapse-icon icon-arrow-top" />
          </div>
          <ul className="tf-collapse-content">
            {Array(5)
              .fill(0)
              .map((elm, i) => (
                <li key={i} className="checkbox-item">
                  <label>
                    <div className="ratings">
                      {Array(5 - i)
                        .fill(0)
                        .map((_, index) => (
                          <i key={index} className="icon-star-1" />
                        ))}
                      {Array(i)
                        .fill(0)
                        .map((_, index) => (
                          <svg
                            key={index}
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
                    </div>
                    <input
                      checked={rating.includes(5 - i)}
                      readOnly
                      type="radio"
                      onClick={() =>
                        setRating((pre) => (pre.includes(5 - i) ? [] : [5 - i]))
                      }
                    />
                    <span className="btn-radio" />
                  </label>
                  <span>
                    (
                    {
                      shopItems.filter(
                        (el) => Math.round(el.rating) == Math.round(5 - i)
                      ).length
                    }
                    )
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="sidebar-item widget wg-categorie tf-collapse-item">
          <div className="sidebar-title tf-collapse-title">
            <h5 className="fw-5">Instructor</h5>
            <i className="tf-collapse-icon icon-arrow-top" />
          </div>
          <ul className="tf-collapse-content showmore-item2">
            {instractors.map((elm, i) => (
              <li
                key={i}
                className={`checkbox-item fl-item3  ${i > 2 ? "d-none" : ""}`}
              >
                <label>
                  <p>{elm}</p>
                  <input
                    readOnly
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent event bubbling
                      setSelectedInstructors((pre) =>
                        pre.includes(elm)
                          ? pre.filter((el) => el !== elm)
                          : [...pre, elm]
                      );
                    }}
                    checked={selectedInstructors.includes(elm)}
                    type="radio"
                  />
                  <span className="btn-checkbox" />
                </label>
                <span>
                  ({" "}
                  {
                    shopItems.filter((el) => el.instractors.includes(elm))
                      .length
                  }
                  )
                </span>
              </li>
            ))}
          </ul>
          <div className="btn-showmore showmore view-more-button">
            <span className="title">
              Show More <i className="icon icon-arrow-bottom" />
            </span>
          </div>
        </div>
        <div className="sidebar-item widget wg-categorie tf-collapse-item">
          <div className="sidebar-title tf-collapse-title">
            <h5 className="fw-5">Level</h5>
            <i className="tf-collapse-icon icon-arrow-top" />
          </div>
          <ul className="tf-collapse-content">
            {levels.map((elm, index) => (
              <li key={index} className="checkbox-item">
                <label>
                  <p>{elm}</p>
                  <input
                    readOnly
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent event bubbling
                      setSelectedLevels((pre) =>
                        pre.includes(elm)
                          ? pre.filter((el) => el !== elm)
                          : [...pre, elm]
                      );
                    }}
                    checked={selectedLevels.includes(elm)}
                    type="radio"
                  />
                  <span className="btn-checkbox" />
                </label>
                <span>
                  {" "}
                  ( {shopItems.filter((el) => el.level.includes(elm)).length})
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-item widget wg-categorie tf-collapse-item">
          <div className="sidebar-title tf-collapse-title">
            <h5 className="fw-5">Price</h5>
            <i className="tf-collapse-icon icon-arrow-top" />
          </div>
          <ul className="tf-collapse-content">
            {prices.map((elm, index) => (
              <li key={index} className="checkbox-item">
                <label>
                  <p>{elm}</p>
                  <input
                    readOnly
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent event bubbling
                      setSelectedPrices((pre) =>
                        pre.includes(elm)
                          ? pre.filter((el) => el !== elm)
                          : [...pre, elm]
                      );
                    }}
                    checked={selectedPrices.includes(elm)}
                    type="radio"
                  />
                  <span className="btn-checkbox" />
                </label>
                <span>({elm == "Free" ? 0 : shopItems.length})</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-item widget wg-categorie tf-collapse-item">
          <div className="sidebar-title tf-collapse-title">
            <h5 className="fw-5">Language</h5>
            <i className="tf-collapse-icon icon-arrow-top" />
          </div>
          <ul className="tf-collapse-content showmore-item3">
            {languages.map((elm, index) => (
              <li
                key={index}
                className={`checkbox-item fl-item4  ${
                  index > 4 ? "d-none" : ""
                }`}
              >
                <label>
                  <p>{elm}</p>
                  <input
                    readOnly
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent event bubbling
                      setSelectedLanguages((pre) =>
                        pre.includes(elm)
                          ? pre.filter((el) => el !== elm)
                          : [...pre, elm]
                      );
                    }}
                    checked={selectedLanguages.includes(elm)}
                    type="radio"
                  />
                  <span className="btn-checkbox" />
                </label>
                <span>
                  ( {shopItems.filter((el) => el.language.includes(elm)).length}
                  )
                </span>
              </li>
            ))}
          </ul>
          <div className="btn-showmore showmore view-more-button">
            <span className="title">
              Show More <i className="icon icon-arrow-bottom" />
            </span>
          </div>
        </div>
        <a onClick={clearFilter} data-bs-dismiss="offcanvas" className="tf-btn">
          Clear Filter
        </a>
      </div>
    </div>
  );
}
