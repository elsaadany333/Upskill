"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { menuItems, socialLinks } from "@/data/footerLinks";
export default function Footer1({ parentClass = "footer" }) {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", formRef.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          handleShowMessage();
          formRef.current.reset();
        } else {
          setSuccess(false);
          handleShowMessage();
        }
      });
  };
  return (
    <footer id="footer" className={parentClass}>
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="footer-body-wrap flex justify-between">
                  <div
                    className="footer-more-infor wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <div className="footer-logo">
                      <Link href={`/`}>
                        <Image
                          alt=""
                          src="/images/logo/logo.svg"
                          width={123}
                          height={36}
                        />
                      </Link>
                    </div>
                    <ul className="address">
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-call" />
                        </div>
                        <p>+1 (555) 123-4567</p>
                      </li>
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-mail-1" />
                        </div>
                        <p>support@upskill.com</p>
                      </li>
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-location" />
                        </div>
                        <p>
                          58 Howard Street #2 San
                          <br />
                          Francisco
                        </p>
                      </li>
                    </ul>
                    <ul className="tf-social-icon flex items-center gap-10">
                      {socialLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.href}>
                            <i className={link.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {menuItems.map((menu, index) => (
                    <div
                      key={index}
                      className="footer-menu-list wow fadeInUp"
                      data-wow-delay={menu.delay}
                    >
                      <h5 className="fw-5">{menu.title}</h5>
                      <ul>
                        {menu.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.href.startsWith("/") ? (
                              <Link href={link.href}>{link.name}</Link>
                            ) : (
                              <a href={link.href}>{link.name}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div
                    className="footer-subscribe wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h5 className="fw-5">Subscribe</h5>
                    <p>
                      2000+ Our students are subscribe Around the World. Don’t
                      be shy introduce yourself!
                    </p>
                    <div
                      className={`tfSubscribeMsg ${
                        showMessage ? "active" : ""
                      }`}
                    >
                      {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          You have successfully subscribed.
                        </p>
                      ) : (
                        <p style={{ color: "red" }}>Something went wrong</p>
                      )}
                    </div>
                    <form
                      className="form-subscribe style-line-bottom"
                      onSubmit={sendMail}
                      ref={formRef}
                    >
                      <fieldset className="email">
                        <input
                          type="email"
                          placeholder="Your e-mail"
                          className="style-default"
                          name="email"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required
                        />
                      </fieldset>
                      <div className="button-submit">
                        <button className="tf-btn-arrow" type="submit">
                          Send
                          <i className="icon-arrow-top-right" />
                        </button>
                      </div>
                    </form>
                    <h5 className="fw-5 get-app">Get the app</h5>
                    <ul className="tf-app-download">
                      <li>
                        <a href="#">
                          <div className="icon">
                            <i className="icon-apple" />
                          </div>
                          <div className="app">
                            <div>Download on the</div>
                            <div>Apple Store</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon">
                            <i className="icon-chplay" />
                          </div>
                          <div className="app">
                            <div>Get in on</div>
                            <div>Google Play</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom wow fadeInUp" data-wow-delay="0s">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap flex justify-center items-center">
                  <p>©&nbsp;2024&nbsp;UpSkill. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
