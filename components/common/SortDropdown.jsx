"use client";

import { useEffect, useRef, useState } from "react";
const optionsDefault = ["Newest", "Oldest", "3 days"];
export default function SortDropdown({
  onChange = (elm) => {},
  options = optionsDefault,
}) {
  const selectRef = useRef();
  const [selected, setSelected] = useState(options[0]);
  const toggleDropdown = () => {
    selectRef.current.classList.toggle("open");
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!selectRef.current.contains(event.target)) {
        selectRef.current.classList.remove("open");
      }
    };

    // Add event listeners to each dropdown element

    // Add a global click event listener to detect outside clicks
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <p className="text text-2 wow fadeInUp" data-wow-delay="0.1s">
        Sort by
      </p>
      <div
        className="nice-select default wow fadeInUp"
        data-wow-delay="0.1s"
        ref={selectRef}
        tabIndex={0}
      >
        <span onClick={() => toggleDropdown()} className=" text text-1">
          {selected}
        </span>
        <ul className="list">
          {options.map((elm, i) => (
            <li
              key={i}
              onClick={() => {
                setSelected(elm);
                onChange(elm);
                toggleDropdown();
              }}
              className={`option ${
                selected == elm ? "selected" : ""
              }  text text-1`}
            >
              {elm}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
