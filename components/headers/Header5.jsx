import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
export default function Header5() {
  return (
    <div className="relative">
      <header id="header_main" className="header type-absolute style-2 style-5">
        <div className="header-inner">
          <div className="header-inner-wrap">
            <div className="header-left">
              <a
                className="mobile-nav-toggler mobile-button d-lg-none flex"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMenu"
                aria-controls="offcanvasMenu"
              />
              <div id="site-logo">
                <Link href={`/`} rel="home">
                  <Image
                    id="logo-header"
                    alt=""
                    src="/images/logo/logo-black.svg"
                    width={123}
                    height={35}
                  />
                </Link>
              </div>
              <nav className="main-menu">
                <ul className="navigation">
                  <Nav />
                </ul>
              </nav>
            </div>
            <div className="header-right flex-grow justify-end">
              <a
                className="header-search-icon flex items-center justify-center"
                href="#canvasSearch"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
              >
                <i className="icon-search fs-20" />
              </a>
              <Link
                href={`/shop-cart`}
                className="header-cart flex items-center justify-center"
              >
                <i className="icon-shopcart fs-18" />
              </Link>
              <div className="header-btn">
                <div className="header-login">
                  <Link
                    href={`/login`}
                    className="tf-button-default header-text"
                  >
                    Log In
                  </Link>
                </div>
                <div className="header-register">
                  <Link
                    href={`/register`}
                    className="tf-button-default active header-text"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="header-join d-lg-none flex">
                  <Link href={`/login`} className="fs-15">
                    Join
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileNav />
      </header>
    </div>
  );
}
