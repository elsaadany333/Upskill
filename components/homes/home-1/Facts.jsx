import React from "react";
import Image from "next/image";
import { counters } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <section className="section-key tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="key-wrap flex">
              <div className="key-image">
                <Image
                  className="lazyload"
                  data-src="/images/section/key-1.jpg"
                  alt=""
                  src="/images/section/key-1.jpg"
                  width={1370}
                  height={1301}
                />
              </div>
              <div className="content">
                <h2
                  className="font-cardo fw-7 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Learn The Secrets To&nbsp;Life Success, These People Have Got
                  The Key.​
                </h2>
                <p className="h6 fw-4 wow fadeInUp" data-wow-delay="0.1s">
                  {" "}
                  Lorem ipsum dolor sit amet consectur adipiscing elit <br />{" "}
                  sed eiusmod ex tempor incididunt labore dolore magna <br />{" "}
                  aliquaenim minim.
                </p>
                <div className="counter style-2">
                  {counters.map((counter, index) => (
                    <div
                      key={index}
                      className="number-counter wow fadeInUp"
                      data-wow-delay={counter.delay}
                    >
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
      </div>
    </section>
  );
}
