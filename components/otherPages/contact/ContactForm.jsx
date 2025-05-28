"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
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
    <div className="contact-wrap bg-white tf-spacing-26 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-left wow fadeInLeft" data-wow-delay={0}>
              <Image
                className="lazyload"
                data-src=""
                alt=""
                src="/images/page-title/page-title-home2-1.jpg"
                width={591}
                height={680}
              />
              <div className="blockquite">
                <p>
                  Happiness prosperous impression had conviction For every delay
                  in they
                </p>
                <p className="author">Ali Tufan</p>
                <p className="sub-author">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content-right">
              <h2 className="fw-7 wow fadeInUp" data-wow-delay={0}>
                How Can&nbsp;We Help?
              </h2>
              <div className="register wow fadeInUp" data-wow-delay={0}>
                <p>
                  Have a question or feedback? Fill out the form below, and
                  we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={sendMail} ref={formRef} className="contact-form">
                <div className="cols">
                  <fieldset
                    className="tf-field wow fadeInUp"
                    data-wow-delay={0}
                  >
                    <input
                      className="tf-input style-1"
                      id="field1"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field1">
                      First Name
                    </label>
                  </fieldset>
                </div>
                <div className="cols">
                  <fieldset
                    className="tf-field wow fadeInUp"
                    data-wow-delay={0}
                  >
                    <input
                      className="tf-input style-1"
                      id="field2"
                      type="email"
                      placeholder=""
                      name="email"
                      tabIndex={2}
                      defaultValue="creativelayers088@gmail.com"
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field2">
                      Email
                    </label>
                  </fieldset>
                </div>
                <div className="cols">
                  <fieldset
                    className="tf-field wow fadeInUp"
                    data-wow-delay={0}
                  >
                    <input
                      className="tf-input style-1"
                      id="field1"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field1">
                      Title
                    </label>
                  </fieldset>
                </div>
                <fieldset className="tf-field wow fadeInUp" data-wow-delay={0}>
                  <textarea
                    className="tf-input style-1"
                    name="message"
                    rows={4}
                    placeholder=""
                    tabIndex={2}
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                  <label
                    className="tf-field-label type-textarea fs-15"
                    htmlFor=""
                  >
                    Message
                  </label>
                </fieldset>
                <div
                  className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}
                >
                  {success ? (
                    <p style={{ color: "rgb(52, 168, 83)" }}>
                      Message sent successfully
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>Something went wrong</p>
                  )}
                </div>
                <button
                  className="button-submit tf-btn w-100 wow fadeInUp"
                  data-wow-delay={0}
                  type="submit"
                >
                  Submit
                  <i className="icon-arrow-top-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="login-wrap-content" />
    </div>
  );
}
