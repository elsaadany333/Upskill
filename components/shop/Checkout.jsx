"use client";
import { useContextElement } from "@/context/Context";
import React, { useEffect } from "react";

export default function Checkout() {
  const { cartProducts, totalPrice } = useContextElement();
  useEffect(() => {
    const selectCountry = () => {
      const selectElements = document.querySelectorAll(
        ".tf-select-label select"
      );

      // Add focus event listener
      selectElements.forEach((select) => {
        select.addEventListener("focus", function () {
          this.closest(".tf-select-label").classList.add("focused");
        });

        // Add blur event listener
        select.addEventListener("blur", function () {
          const inputValue = this.value;
          if (inputValue === "") {
            this.classList.remove("filled");
            this.closest(".tf-select-label").classList.remove("focused");
          } else {
            this.classList.add("filled");
          }
        });

        // Initial check for filled state
        if (select.value) {
          select.closest(".tf-select-label").classList.add("focused");
          select.classList.add("filled");
        }
      });
    };

    selectCountry();

    // Cleanup function
    return () => {
      const selectElements = document.querySelectorAll(
        ".tf-select-label select"
      );

      // Remove event listeners when component unmounts
      selectElements.forEach((select) => {
        select.removeEventListener("focus", function () {});
        select.removeEventListener("blur", function () {});
      });
    };
  }, []);

  return (
    <section className="tf-spacing-22 shop-checkout">
      <form onSubmit={(e) => e.preventDefault()} className="form-checkout">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-billing">
                <h6 className="text-22 fw-5 wow fadeInUp">Billing details</h6>
                <div className="cols">
                  <fieldset className="tf-field wow fadeInUp">
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
                  <fieldset
                    className="tf-field wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <input
                      className="tf-input style-1"
                      id="field2"
                      type="text"
                      placeholder=""
                      name="text"
                      tabIndex={2}
                      defaultValue="Tufan"
                      aria-required="true"
                      required
                    />
                    <label className="tf-field-label fs-15" htmlFor="field2">
                      Last Name
                    </label>
                  </fieldset>
                </div>
                <fieldset className="tf-field wow fadeInUp">
                  <input
                    className="tf-input style-1"
                    id="field4"
                    type="text"
                    placeholder=""
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <label className="tf-field-label fs-15" htmlFor="field4">
                    Company Name *
                  </label>
                </fieldset>
                <div className="tf-select mb-50 tf-select-label wow fadeInUp">
                  <select
                    className="default"
                    name="region-choose"
                    id="region-choose"
                  >
                    <option value="" />
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Thai Lan">Thai Lan</option>
                    <option value="Campuchia">Campuchia</option>
                  </select>
                  <label className="select-label" htmlFor="">
                    Country / Region *
                  </label>
                </div>
                <fieldset className="tf-field wow fadeInUp">
                  <input
                    className="tf-input style-1"
                    id="field5"
                    type="text"
                    placeholder=""
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <label className="tf-field-label fs-15" htmlFor="field5">
                    Street Address *
                  </label>
                </fieldset>
                <fieldset className="tf-field wow fadeInUp">
                  <input
                    className="tf-input style-1"
                    id="field7"
                    type="text"
                    placeholder=""
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <label className="tf-field-label fs-15" htmlFor="field7">
                    Apartment, Suite, Unit, Etc. *
                  </label>
                </fieldset>
                <div className="tf-select mb-50 tf-select-label wow fadeInUp">
                  <select
                    className="default"
                    name="apartment-choose"
                    id="apartment-choose"
                  >
                    <option value="" />
                    <option value="Viet Nam">Da Nang</option>
                    <option value="Thai Lan">Ha Noi</option>
                    <option value="Campuchia">Ho Chi Minh</option>
                  </select>
                  <label className="select-label" htmlFor="">
                    Town / City *
                  </label>
                </div>
                <fieldset className="tf-field wow fadeInUp">
                  <input
                    className="tf-input style-1"
                    id="field8"
                    type="text"
                    placeholder=""
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <label className="tf-field-label fs-15" htmlFor="field8">
                    State *
                  </label>
                </fieldset>
                <fieldset className="tf-field wow fadeInUp">
                  <input
                    className="tf-input style-1"
                    id="field9"
                    type="text"
                    placeholder=""
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <label className="tf-field-label fs-15" htmlFor="field9">
                    Zip *
                  </label>
                </fieldset>
                <fieldset className="tf-field wow fadeInUp">
                  <input
                    className="tf-input style-1"
                    id="field10"
                    type="number"
                    placeholder=""
                    name="number"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <label className="tf-field-label fs-15" htmlFor="field10">
                    Phone *
                  </label>
                </fieldset>
                <fieldset className="tf-field wow fadeInUp">
                  <input
                    className="tf-input style-1"
                    id="field11"
                    type="email"
                    placeholder=""
                    name="email"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <label className="tf-field-label fs-15" htmlFor="field11">
                    Email Address *
                  </label>
                </fieldset>
                <div className="shop-checkout-additional wow fadeInUp">
                  <h6 className="text-22">Additional information</h6>
                  <fieldset className="tf-field h-full">
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
                      Order Notes (optional)
                    </label>
                  </fieldset>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-shop-checkout">
                <div className="sidebar-checkout-item your-order">
                  <div className="title text-22 fw-5">Order summary</div>
                  <div className="product-subtotal fs-15">
                    <p className="fw-5">Product</p>
                    <p className="fw-5">Subtotal</p>
                  </div>
                  <ul className="product-list">
                    {cartProducts.map((elm, i) => (
                      <li key={i} className="product-item">
                        <p className="fs-15 fw-4">
                          {elm.title} x {elm.quantity}
                        </p>
                        <p className="fs-15 fw-4">
                          ${(elm.price * elm.quantity).toFixed(2)}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <ul className="checkout-total-bill">
                    <li className="subtotal fw-5">
                      <p>Total</p>
                      <p>${totalPrice.toFixed(2)}</p>
                    </li>
                    {totalPrice ? (
                      <li className="shipping fw-5">
                        <p>Shipping</p>
                        <p>$20.00</p>
                      </li>
                    ) : (
                      ""
                    )}
                    <li className="total">
                      <p className="h4">Total</p>
                      <p className="h4">
                        ${totalPrice ? (totalPrice + 20).toFixed(2) : 0}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-checkout-item payment">
                  <h6 className="text-22 fw-5">Payment</h6>
                  <fieldset>
                    <ul className="payment-list">
                      <li className="payment-item radio-item">
                        <label htmlFor="direct-rank-trasfer">
                          <p>Direct Bank Transfer</p>
                          <input
                            name="payment-method"
                            type="radio"
                            id="direct-rank-trasfer"
                            defaultChecked=""
                          />
                          <span className="btn-radio" />
                        </label>
                      </li>
                      <li className="payment-item radio-item">
                        <p className="descripton">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order won’t be shipped until the funds have
                          cleared in our account.
                        </p>
                      </li>
                      <li className="payment-item radio-item mb-8">
                        <label htmlFor="check-payment">
                          <p>Check Payments</p>
                          <input
                            name="payment-method"
                            type="radio"
                            id="check-payment"
                          />
                          <span className="btn-radio" />
                        </label>
                      </li>
                      <li className="payment-item radio-item mb-8">
                        <label htmlFor="cash-on-delivery">
                          <p>Cash on Delivery</p>
                          <input
                            name="payment-method"
                            type="radio"
                            id="cash-on-delivery"
                          />
                          <span className="btn-radio" />
                        </label>
                      </li>
                      <li className="payment-item radio-item">
                        <label htmlFor="paypal">
                          <p>&nbsp;PayPal</p>
                          <input
                            name="payment-method"
                            type="radio"
                            id="paypal"
                          />
                          <span className="btn-radio" />
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                </div>
                <button className="tf-btn" type="submit">
                  Place Order
                  <i className="icon-arrow-top-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
