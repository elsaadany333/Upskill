"use client";
import React from "react";

export default function SearchModal() {
  return (
    <div className="offcanvas offcanvas-top offcanvas-search" id="canvasSearch">
      <i
        className="flaticon-close-1 btn-close"
        type="button"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="offcanvas-body">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-search-courses"
              >
                <div className="icon">
                  <i className="icon-keyboard" />
                </div>
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
        </div>
      </div>
    </div>
  );
}
