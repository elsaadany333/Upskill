import { numberCounters } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <section className="section-counter tf-spacing-3 pt-0 page-become-teacher">
      <div className="tf-container">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <div className="wrap-couter">
                <div className="counter style-7">
                  {numberCounters.map((counter, index) => (
                    <div className="number-counter" key={index}>
                      <div className="counter-content">
                        <span
                          className="number"
                          data-speed={2500}
                          data-to={counter.number}
                          data-inviewport="yes"
                        >
                          {counter.number}
                        </span>
                        {counter.additionalText}
                      </div>
                      <p>{counter.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
