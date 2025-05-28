"use client";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";
import SortDropdown from "../common/SortDropdown";
import { courses } from "@/data/courese";
import { useContextElement } from "@/context/Context";
export default function Wishlist() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  return (
    <div className="col-xl-9 col-lg-12">
      <div className="section-wishlist-right section-right">
        <div className="row">
          <div className="filter border-bottom">
            <div className="header-search flex-grow">
              <h6 className="fw-5 fs-22 wow fadeInUp">Favorite Courses</h6>
            </div>
            <div className="sort-by-wrap ">
              <div className="sort-wrap">
                <SortDropdown onChange={(e) => console.log(e)} />
              </div>
            </div>
          </div>
        </div>
        <section className="section-inner">
          <div className="row">
            {courses.slice(0, 6).map((elm, i) => (
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
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <ul className="wg-pagination justify-center">
              <Pagination />
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
