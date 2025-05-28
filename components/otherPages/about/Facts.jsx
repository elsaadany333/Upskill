import React from "react";
import Image from "next/image";
import { counters5 } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <section className="section-counter tf-spacing-3 style-2 pt-0 page-about">
      <div className="tf-container">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <div className="counter">
                {counters5.map((counter, index) => (
                  <div className="number-counter" key={index}>
                    <Image
                      alt=""
                      src={counter.iconSrc}
                      width="60"
                      height="61"
                    />
                    <div className="counter-content">
                      <span className="number">
                        <Counter max={counter.number} />
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
    </section>
  );
}
