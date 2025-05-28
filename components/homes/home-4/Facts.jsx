import { counters3 } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <section className="section-counter tf-spacing-8 pt-0">
      <div className="tf-container">
        <div className="col-12">
          <div className="row justify-center">
            <div className="col-xl-10">
              <div className="counter">
                {counters3.map((counter, index) => (
                  <div
                    key={index}
                    className="number-counter wow fadeInUp"
                    data-wow-delay={counter.delay}
                  >
                    <div className="counter-content font-cardo">
                      <span
                        className="number"
                        data-speed={2500}
                        data-to={counter.number}
                        data-inviewport="yes"
                      >
                        {counter.number}
                      </span>
                      {counter.suffix}
                    </div>
                    <p className="fs-15">{counter.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
