"use client";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import Categories from "./Categories";
import MobileNav from "./MobileNav";
export default function Header8() {
  return (
    <header id="header_main" className="header style-2 style-8">
      <div className="header-inner">
        <div className="header-inner-wrap">
          <div className="header-left flex-grow">
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
                  src="/images/logo/logo.svg"
                  width={123}
                  height={36}
                />
              </Link>
            </div>
            <div className="header-catalog">
              <a href="#" className="header-text">
                Categories
                <i className="icon-arrow-bottom" />
              </a>
              <Categories />
            </div>
            <div className="header-search flex-grow">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-search"
              >
                <fieldset>
                  <input
                    className=""
                    type="text"
                    placeholder="Search for anything"
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="button-submit">
                  <button className="" type="submit">
                    <i className="icon-search fs-20" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="header-right">
            <nav className="main-menu">
              <ul className="navigation">
                <Nav />
              </ul>
            </nav>
            <a
              className="header-search-icon d-lg-none flex"
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
                <Link href={`/login`} className="tf-button-default header-text">
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
  );
}
