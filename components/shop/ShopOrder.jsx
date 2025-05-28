import React from "react";

export default function ShopOrder() {
  return (
    <div className="tf-spacing-4">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-xl-8">
            <div className="shop-order">
              <div className="order-comleted">
                <div className="order-header">
                  <div className="icon">
                    <i className="flaticon-check" />
                  </div>
                  <h2 className="letter-spacing-1">Your Order Is Completed!</h2>
                  <div className="text-content">
                    Thank you. Your order has been received.
                  </div>
                </div>
                <div className="order-info">
                  <div className="item">
                    <p className="text">Order Number</p>
                    <p className="text-1">13119</p>
                  </div>
                  <div className="item">
                    <p className="text">Date</p>
                    <p className="text-1">April 06 2024</p>
                  </div>
                  <div className="item">
                    <p className="text">Total</p>
                    <p className="text-1">$40.10</p>
                  </div>
                  <div className="item">
                    <p className="text">Payment Method</p>
                    <p className="text-1">Direct Bank Transfer</p>
                  </div>
                </div>
                <div className="sidebar-shop">
                  <div className="sidebar-shop-item your-order">
                    <h3 className="title">Order summary</h3>
                    <div className="flex items-center justify-between">
                      <div className="text">Product</div>
                      <div className="text">Subtotal</div>
                    </div>
                    <div className="divider" />
                    <div className="item-order">
                      <div className="flex items-center justify-between">
                        <div className="text-1">Meaningful Future x 3</div>
                        <div className="text-1">$1.298</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-1">Seo Tricks x 4</div>
                        <div className="text-1">$1.298</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text">Total</div>
                      <div className="text">$1.298</div>
                    </div>
                    <div className="divider" />
                    <div className="flex items-center justify-between">
                      <div className="text">Shipping</div>
                      <div className="text">$1.298</div>
                    </div>
                    <div className="divider" />
                    <div className="flex items-center justify-between">
                      <div className="text-2">Total</div>
                      <div className="text-2">$1.298</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
