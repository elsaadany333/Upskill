"use client";
import React from "react";
import Image from "next/image";
import SortDropdown from "../common/SortDropdown";
export default function Reviews() {
  return (
    <div className="col-xl-9 col-lg-12">
      <div className="section-reviews-right section-right">
        <div className="row">
          <div className="filter border-bottom">
            <div className="header-search flex-grow">
              <h6 className="fw-5 fs-22 wow fadeInUp">Student Review</h6>
            </div>
            <div className="sort-by-wrap">
              <div className="sort-wrap">
                <SortDropdown />
              </div>
            </div>
          </div>
          <div className="section-inner">
            <div className="review-item style-reply wow fadeInUp">
              <div className="avatar">
                <Image
                  className="lazyload"
                  data-src="/images/avatar/review-1.png"
                  alt=""
                  src="/images/avatar/review-1.png"
                  width={101}
                  height={100}
                />
              </div>
              <div className="comment-box">
                <h5 className="author-name">
                  <a href="">Theresa Edin</a>
                </h5>
                <div className="ratings">
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
                  <div className="total">2 months ago</div>
                </div>
                <p className="evaluate">Excellent Course</p>
                <p className="comment">
                  Lorem ipsum dolor sit amet. Qui incidunt dolores non similique
                  ducimus et debitis molestiae. Et autem quia eum reprehenderit
                  voluptates est reprehenderit illo est enim perferendis est
                  neque sunt.
                </p>
                <div
                  className="tf-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#comment-reply1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Reply
                </div>
                <form
                  className="space-comment collapse show"
                  id="comment-reply1"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <textarea
                    rows={7}
                    id="comment"
                    className="form-controls"
                    name="comment"
                    placeholder="Add a Comment"
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                  <button type="submit" className="btn-send">
                    <i className="flaticon-send" />
                  </button>
                </form>
              </div>
            </div>
            <div className="review-item style-reply wow fadeInUp">
              <div className="avatar">
                <Image
                  className="lazyload"
                  data-src="/images/avatar/review-2.png"
                  alt=""
                  src="/images/avatar/review-2.png"
                  width={101}
                  height={101}
                />
              </div>
              <div className="comment-box">
                <h5 className="author-name">
                  <a href="">Carolyn Welbron</a>
                </h5>
                <div className="ratings">
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
                  <div className="total">2 months ago</div>
                </div>
                <p className="evaluate">Excellent Course</p>
                <p className="comment">
                  Lorem ipsum dolor sit amet. Qui incidunt dolores non similique
                  ducimus et debitis molestiae. Et autem quia eum reprehenderit
                  voluptates est reprehenderit illo est enim perferendis est
                  neque sunt.
                </p>
                <div
                  className="tf-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#comment-reply2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Reply
                </div>
                <form
                  className="space-comment collapse"
                  onSubmit={(e) => e.preventDefault()}
                  id="comment-reply2"
                >
                  <textarea
                    rows={7}
                    id="comment"
                    className="form-controls"
                    name="comment"
                    placeholder="Add a Comment"
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                  <button type="submit" className="btn-send">
                    <i className="flaticon-send" />
                  </button>
                </form>
              </div>
            </div>
            <div className="review-item style-reply wow fadeInUp">
              <div className="avatar">
                <Image
                  className="lazyload"
                  data-src="/images/avatar/review-1.png"
                  alt=""
                  src="/images/avatar/review-1.png"
                  width={101}
                  height={100}
                />
              </div>
              <div className="comment-box">
                <h5 className="author-name">
                  <a href="">Theresa Edin</a>
                </h5>
                <div className="ratings">
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
                  <div className="total">2 months ago</div>
                </div>
                <p className="evaluate">Excellent Course</p>
                <p className="comment">
                  Lorem ipsum dolor sit amet. Qui incidunt dolores non similique
                  ducimus et debitis molestiae. Et autem quia eum reprehenderit
                  voluptates est reprehenderit illo est enim perferendis est
                  neque sunt.
                </p>
                <div
                  className="tf-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#comment-reply3"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Reply
                </div>
                <form
                  className="space-comment collapse"
                  onSubmit={(e) => e.preventDefault()}
                  id="comment-reply3"
                >
                  <textarea
                    rows={7}
                    id="comment"
                    className="form-controls"
                    name="comment"
                    placeholder="Add a Comment"
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                  <button type="submit" className="btn-send">
                    <i className="flaticon-send" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
