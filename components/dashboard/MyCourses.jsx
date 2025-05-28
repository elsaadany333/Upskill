"use client";
import Pagination from "../common/Pagination";
import Image from "next/image";
import SortDropdown from "../common/SortDropdown";
import { courses4 } from "@/data/courese";
import { useEffect, useState } from "react";
import { useContextElement } from "@/context/Context";
const categories = ["Enrolled Courses", "Active Courses", "Completed Courses"];
export default function MyCourses() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const [currentCategory, setcurrentCategory] = useState("Enrolled Courses");
  const [filtered, setFiltered] = useState(courses4);
  useEffect(() => {
    if (currentCategory == "Enrolled Courses") {
      setFiltered(courses4);
    } else {
      setFiltered(courses4.filter((elm) => elm.status == currentCategory));
    }
  }, [currentCategory]);

  return (
    <div className="col-xl-9 col-lg-12">
      <div className="section-my-courses-right section-right">
        <div className="row">
          <div className="filter">
            <div className="header-search flex-grow wow fadeInUp">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-search"
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
            </div>
            <div className="sort-by-wrap">
              <div className="sort-wrap">
                <SortDropdown />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="tabs-with-filter style-small">
            <ul className="widget-menu-tab overflow-x-auto pd-40">
              {categories.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setcurrentCategory(item)}
                  className={`item-title  ${
                    currentCategory == item ? "active" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="widget-content-tab">
              <div className="widget-content-inner active">
                <div className="row">
                  {filtered.slice(0, 6).map((elm, i) => (
                    <div key={i} className="col-xl-4">
                      <div className="course-item hover-img wow fadeInUp">
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
                              <p>{elm.lessons}</p>
                            </div>
                            <div className="meta-item">
                              <i className="flaticon-clock" />
                              <p>{elm.duration}</p>
                            </div>
                          </div>
                          <h6 className="fw-5 line-clamp-2">
                            <a href="#">{elm.title}</a>
                          </h6>
                          <div className="ratings pb-30">
                            <div className="number">4.9</div>
                            {Array(Math.round(elm.rating))
                              .fill(0)
                              .map((_, i2) => (
                                <i className="icon-star-1" key={i2} />
                              ))}
                            {Array(5 - Math.round(elm.rating))
                              .fill(0)
                              .map((_, i2) => (
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

                            <div className="total">({elm.reviews})</div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={
                                elm.status == "Completed Courses"
                                  ? { width: "100%" }
                                  : {}
                              }
                            ></div>
                          </div>
                          <div className="exam-progress">
                            <span className="fw-5 fs-15">Complete</span>
                            <span className="fw-5 fs-15">
                              {" "}
                              {elm.status == "Completed Courses"
                                ? "100%"
                                : "80%"}
                            </span>
                          </div>
                          <a href="#" className="tf-btn style-third w-100">
                            Download Certificate
                            <i className="icon-arrow-top-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ul className="wg-pagination justify-center">
              <Pagination />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
