"use client";
import { useEffect, useState } from "react";
import "../public/scss/main.scss";
import "swiper/css/effect-fade";

import { tabs } from "@/utlis/tabs";
import { usePathname } from "next/navigation";
import SearchModal from "@/components/modals/SearchModal";
import MobileMenu from "@/components/modals/MobileMenu";
import Context from "@/context/Context";
import BackToTop from "@/components/common/BackToTop";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
      // setTimeout(() => {
      //   import("../utlis/mmenu").then(() => {
      //     // Module is imported, you can access any exported functionality if
      //     new window.Mmenu(document.querySelector("#menu"));
      //   });
      // }, 200);
    }
  }, []);
  useEffect(() => {
    tabs();
    const collapseTitles = document.querySelectorAll(".tf-collapse-title");
    const collapseTitem = document.querySelectorAll(".tf-collapse-item");
    collapseTitem.forEach((elm) => {
      const content = elm.querySelector(".tf-collapse-content");
      if (elm.classList.contains("collapsed")) {
        content.style.height = "0px";
      } else {
        content.style.height = content.scrollHeight + "px";
      }
    });

    const clickHandler = function (event) {
      const parentItem = event.target.closest(".tf-collapse-item");
      const content = parentItem.querySelector(".tf-collapse-content");

      // Toggle collapsed class
      parentItem.classList.toggle("collapsed");

      if (parentItem.classList.contains("collapsed")) {
        content.style.transition = "0.5s";
        content.style.height = "0px";
      } else {
        content.style.transition = "0.5s";
        content.style.height = content.scrollHeight + "px";
      }
    };

    collapseTitles.forEach((title) => {
      title.addEventListener("click", clickHandler);
    });

    // Cleanup event listeners on component unmount
    return () => {
      collapseTitles.forEach((title) => {
        title.removeEventListener("click", clickHandler);
      });
    };
  }, [pathname]);
  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);
  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (header) {
        if (currentScrollY > 250) {
          if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            header.style.top = "-100px";
          } else {
            // Scrolling up
            header.style.top = "0px";
          }
        } else {
          // Below 250px
          header.style.top = "-100px";
        }

        lastScrollY.current = currentScrollY;
      }
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Close any open modal
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  }, [pathname]); // Runs every time the route changes
  return (
    <html lang="en">
      <body className="counter-scroll">
        <Context>{children}</Context>

        <SearchModal />
        <BackToTop />
        <MobileMenu />
      </body>
    </html>
  );
}
