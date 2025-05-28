import React from "react";
import Link from "next/link";
import { events4 } from "@/data/events";
export default function Events() {
  return (
    <section className="section-events-h10 tf-spacing-36 bg-beige">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 lesp-1 wow fadeInUp" data-wow-delay="0.1s">
                Our Events
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
            <div className="our-event-wrap relative">
              {events4.map((event, index) => (
                <div
                  className="our-event-item relative style-1 hover-images-event wow fadeInUp"
                  data-wow-delay={event.delay}
                  key={index}
                >
                  <div className="event-item-date">
                    <div className="date-time">
                      <h2 className="fw-5">{event.date.day}</h2>
                      <h6 className="fw-5">{event.date.month}</h6>
                    </div>
                    <Link href={`/event-single/${event.id}`}>
                      {event.title}
                    </Link>
                  </div>
                  <div className="event-item-sub">
                    <div className="item-sub-time">
                      <i className="flaticon-baby-boy" />
                      <p>{event.ageGroup}</p>
                    </div>
                    <div className="item-sub-time">
                      <i className="flaticon-clock" />
                      <p>{event.time}</p>
                    </div>
                    <div className="item-sub-btn">
                      <Link
                        href={`/event-single/${event.id}`}
                        className="tf-btn"
                      >
                        Get Ticket
                        <i className="icon-arrow-top-right" />
                      </Link>
                    </div>
                  </div>
                  {/* <div
                    className="event-hover"
                    style={{
                      backgroundImage: `url(${event.backgroundImage})`,
                    }}
                  /> */}
                </div>
              ))}
            </div>
            <div className="item-event-btn wow fadeInUp" data-wow-delay="0.5s">
              <Link href={`/event-list`} className="tf-btn">
                View All Events
                <i className="icon-arrow-top-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
