"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
const dashboardItems = [
  {
    href: "/student-dashboard",
    iconClass: "flaticon-activity",
    label: "Dashboard",
    active: true,
  },
  {
    href: "/student-my-courses",
    iconClass: "flaticon-play-1",
    label: "My Courses",
  },
  {
    href: "/student-reviews",
    iconClass: "flaticon-message-1",
    label: "Reviews",
  },
  {
    href: "/student-wishlist",
    iconClass: "flaticon-heart",
    label: "Wishlist",
  },
  {
    href: "/student-quizzes",
    iconClass: "flaticon-question",
    label: "Quizzes",
  },
  { href: "/student-order", iconClass: "flaticon-bag", label: "Order" },
  {
    href: "/student-setting",
    iconClass: "flaticon-setting-1",
    label: "Settings",
  },
  { href: "/", iconClass: "flaticon-export", label: "Logout" },
];
export default function DashboardNav2() {
  const pathname = usePathname();
  useEffect(() => {
    const toggleElement = document.querySelector(
      ".dashboard_navigationbar .dropbtn"
    );
    const dashboardNav = document.querySelector(
      ".dashboard_navigationbar .instructors-dashboard"
    );
    const handleOutsideClick = (event) => {
      if (toggleElement && dashboardNav) {
        // Check if the click is outside both toggleElement and dashboardNav
        if (
          !toggleElement.contains(event.target) &&
          !dashboardNav.contains(event.target)
        ) {
          // Add your logic here (e.g., hide the dropdown or remove a class)
          dashboardNav.classList.remove("show");
          toggleElement.classList.remove("show");
        }
      }
    };
    const toggleOpen = () => {
      toggleElement.classList.toggle("show");
      dashboardNav.classList.toggle("show");
    };
    toggleElement.addEventListener("click", toggleOpen);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      toggleElement.removeEventListener("click", toggleOpen);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <>
        {dashboardItems.map((item, index) => (
          <Link
            key={index}
            className={`dashboard-item ${
              pathname == item.href ? "active" : ""
            }`}
            href={item.href}
          >
            <i className={item.iconClass} />
            {item.label}
          </Link>
        ))}
      </>
    </>
  );
}
