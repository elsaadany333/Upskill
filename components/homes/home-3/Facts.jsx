import React from "react";
import Image from "next/image";
import { counters2 } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <section className="section-counter tf-spacing-3 style-2 pt-0">
      <div className="tf-container">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <div className="counter">
                {counters2.map((counter, index) => (
                  <div
                    key={index}
                    className="number-counter wow fadeInUp"
                    data-wow-delay={counter.delay}
                  >
                    <Image
                      alt=""
                      src={counter.iconSrc}
                      width={counter.iconWidth}
                      height={counter.iconHeight}
                    />
                    <div className="counter-content">
                      <span className="number">
                        <Counter max={counter.number} />
                      </span>
                      {counter.suffix}
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
