import React from "react";

export default function ShortBy() {
  return (
    <div
      className="nice-select default wow fadeInUp"
      data-wow-delay="0.1s"
      tabIndex={0}
    >
      <span className="current text text-1">Best Selling</span>
      <ul className="list">
        <li data-value="" className="option selected text text-1">
          Best Selling
        </li>
        <li data-value="For Ren" className="option text text-1">
          Oldest
        </li>
        <li data-value="Sold" className="option text text-1">
          3 days
        </li>
      </ul>
    </div>
  );
}
