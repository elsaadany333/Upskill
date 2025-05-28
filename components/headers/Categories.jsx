import { categories } from "@/data/menu";
import Link from "next/link";
import React from "react";

export default function Categories() {
  return (
    <ul>
      <li className="item title">COURSE CATEGORIES</li>
      {categories.map((elm, i) => (
        <li key={i} className="has-children">
          <a className="item" href="#">
            {elm.title}
          </a>
          <ul className="sub-menu">
            <li className="item title">View Top IT Courses</li>
            {elm.subItems.map((elm2, i2) => (
              <li key={i2}>
                <Link className="item" href={elm2.href}>
                  {elm2.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
