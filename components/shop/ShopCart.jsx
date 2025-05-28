"use client";
import React from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
export default function ShopCart() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  return (
    <section className="section-shop-cart tf-spacing-6 shop-cart-wrap">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="table-cart">
                <div className="table-shop-cart overflow-x-auto">
                  <ul className="shop-cart-head">
                    <li className="item">Product</li>
                    <li className="item">Price</li>
                    <li className="item">Quantity</li>
                    <li className="item">Subtotal</li>
                    <li className="item">Actions</li>
                  </ul>
                  {cartProducts.length ? (
                    <ul className="shop-cart-inner overflow-y-auto">
                      {cartProducts.map((elm, i) => (
                        <li key={i}>
                          <ul
                            className="shop-cart-item item wow fadeInUp"
                            data-wow-delay="0s"
                          >
                            <li className="cart-item-img">
                              <Image
                                className="ls-is-cached lazyloaded"
                                alt=""
                                src={elm.imgSrc}
                                width={360}
                                height={441}
                              />
                            </li>
                            <li className="cart-item-title">
                              <a href="#">{elm.title}</a>
                            </li>
                            <li className="cart-item-price">
                              <p>${elm.price}</p>
                            </li>
                            <li className="cart-item-wg-quantity wg-quantity">
                              <span
                                className="btn-quantity minus-btn"
                                onClick={() =>
                                  setQuantity(elm.id, elm.quantity - 1)
                                }
                              >
                                -
                              </span>
                              <input
                                type="text"
                                name="number"
                                value={elm.quantity}
                                min={1}
                                onChange={(e) =>
                                  setQuantity(elm.id, e.target.value / 1)
                                }
                              />
                              <span
                                className="btn-quantity plus-btn"
                                onClick={() =>
                                  setQuantity(elm.id, elm.quantity + 1)
                                }
                              >
                                +
                              </span>
                            </li>
                            <li className="cart-item-subtotal">
                              <p>${(elm.price * elm.quantity).toFixed(2)}</p>
                            </li>
                            <li
                              className="cart-item-action"
                              onClick={() => removeItem(elm.id)}
                            >
                              <i className="flaticon-close-1 icon-close-cart-item" />
                            </li>
                          </ul>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div
                      className="row mt-5 mb-5 align-items-center"
                      style={{ rowGap: "20px" }}
                    >
                      <div className="col-lg-6 sm-col-12 fs-17">
                        You Cart is Empty
                      </div>
                      <div className="col-lg-6 sm-col-12">
                        <Link
                          href={`/shop-list`}
                          className="update-cart tf-btn style-third"
                        >
                          Explore Products!{" "}
                          <i className="icon-arrow-top-right" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {cartProducts.length ? (
                  <div className="shop-cart-bottom">
                    <div className="cols">
                      <fieldset className="tf-field">
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
                        <label
                          className="tf-field-label fs-15"
                          htmlFor="field1"
                        >
                          Coupon Code
                        </label>
                      </fieldset>
                    </div>
                    <div className="coupon-btn">
                      <button className="tf-btn" type="submit">
                        Apply Coupon
                        <i className="icon-arrow-top-right" />
                      </button>
                      <a href="#" className="update-cart tf-btn style-third">
                        Update Cart <i className="icon-arrow-top-right" />
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-shop cart-total">
                <div className="cart-total-title text-22 fw-5">Cart Total</div>
                <div className="cart-total-bill">
                  <div className="sub-total">
                    <p>Sub Total</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="line" />
                  <div className="total">
                    <p>Total</p>
                    <p>
                      $
                      {totalPrice
                        ? (totalPrice + 20).toFixed(2)
                        : (0).toFixed(2)}
                    </p>
                  </div>
                </div>
                <Link href={`/shop-checkout`} className="tf-btn style-third">
                  Proceed to Checkout
                  <i className="icon-arrow-top-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
