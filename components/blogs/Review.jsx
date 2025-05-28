import Image from "next/image";
import React from "react";

export default function REview() {
  return (
    <div className="review-wrap">
      <div className="review-title flex justify-between items-center">
        <div className="text-22 fw-5 wow fadeInUp">Review</div>
        <div className="review-rating" data-wow-delay="0.1s">
          <div className="course-rating">
            <i className="icon-star-1" />
            <div className="fs-15">4.9 course rating</div>
          </div>
          <div className="rating relative">
            <div className="fs-15">4K ratings</div>
          </div>
        </div>
      </div>
      <div>
        <div className="review-item">
          <div className="image">
            <Image
              alt=""
              src="/images/avatar/review-1.png"
              width={101}
              height={100}
            />
          </div>
          <div className="content">
            <h5 className="fw-5">
              <a href="#">Theresa Edin</a>
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
              <div>2 months ago</div>
            </div>
            <div className="text fs-15 fw-5">Excellent Course</div>
            <div className="fs-15">
              Lorem ipsum dolor sit amet. Qui incidunt dolores non similique
              ducimus et debitis molestiae. Et autem quia eum reprehenderit
              voluptates est reprehenderit illo est enim perferendis est neque
              sunt.
            </div>
            <div className="helpful-wrap">
              <div className="flex gap-10 items-center">
                <i className="icon-like" />
                <div>Helpful</div>
              </div>
              <div className="flex gap-10 items-center">
                <i className="icon-dislike" />
                <div>Not helpful</div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-item">
          <div className="image">
            <Image
              alt=""
              src="/images/avatar/review-2.png"
              width={101}
              height={101}
            />
          </div>
          <div className="content">
            <h5 className="fw-5">
              <a href="#">Carolyn Welbron</a>
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
              <div>2 months ago</div>
            </div>
            <div className="text fs-15 fw-5">Excellent Course</div>
            <div className="fs-15">
              Lorem ipsum dolor sit amet. Qui incidunt dolores non similique
              ducimus et debitis molestiae. Et autem quia eum reprehenderit
              voluptates est reprehenderit illo est enim perferendis est neque
              sunt.
            </div>
            <div className="helpful-wrap">
              <div className="flex gap-10 items-center">
                <i className="icon-like" />
                <div>Helpful</div>
              </div>
              <div className="flex gap-10 items-center">
                <i className="icon-dislike" />
                <div>Not helpful</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="tf-btn style-third w-100">
        View More Reviews
        <i className="icon-arrow-top-right" />
      </a>
    </div>
  );
}
