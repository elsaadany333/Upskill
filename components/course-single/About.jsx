"use clieent";

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const loadMoreParagraph = () => {
      const showMoreItems = document.querySelectorAll(".show-more-desc-item");

      if (showMoreItems.length > 0) {
        showMoreItems.forEach((item) => {
          const showMoreBtn = item.querySelector(".btn-show-more-decs");
          const hideBtn = item.querySelector(".btn-hide-decs");
          const paragraph = item.querySelector(".showmore-paragraph");

          if (showMoreBtn && hideBtn && paragraph) {
            // Show more paragraph
            showMoreBtn.addEventListener("click", function () {
              paragraph.style.height = paragraph.scrollHeight + "px";
              hideBtn.style.display = "inline-block";
              showMoreBtn.style.display = "none";
            });

            // Hide paragraph
            hideBtn.addEventListener("click", function () {
              paragraph.style.height = "0px";
              showMoreBtn.style.display = "inline-block";
              hideBtn.style.display = "none";
            });
          }
        });
      }
    };

    loadMoreParagraph();

    // Cleanup event listeners when the component unmounts
    return () => {
      const showMoreItems = document.querySelectorAll(".show-more-desc-item");
      showMoreItems.forEach((item) => {
        const showMoreBtn = item.querySelector(".btn-show-more-decs");
        const hideBtn = item.querySelector(".btn-hide-decs");

        if (showMoreBtn && hideBtn) {
          showMoreBtn.removeEventListener("click", function () {});
          hideBtn.removeEventListener("click", function () {});
        }
      });
    };
  }, []);

  return (
    <>
      <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
        About This Course
      </h2>
      <p className="fw-4 fs-15">
        Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod
        tempor inc idid unt ut labore et dolore magna aliqua enim ad minim
        veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo
        consequat duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur enim ipsam. <br />
        <br />
        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia
        deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
        natus error sit voluptatem accusantium doloremque laudantium totam rem
        aperiam.
      </p>
      <div
        className="showmore-paragraph"
        style={{
          display: "block",
          height: "0px",
          overflow: "hidden",
          transition: "0.4s",
        }}
      >
        <p className="fw-4 fs-15">
          Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod
          tempor inc idid unt ut labore et dolore magna aliqua enim ad minim
          veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo
          consequat duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur enim ipsam. <br />
          <br />
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium totam rem aperiam.
        </p>
      </div>
      <div className="more-text">
        <p className="btn-show-more-decs fw-5">
          Show More <i className="icon-arrow-bottom" />
        </p>
        <p className="btn-hide-decs fw-5 hidden">
          Hide <i className="icon-arrow-top" />
        </p>
      </div>
    </>
  );
}
