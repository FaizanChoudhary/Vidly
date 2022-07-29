import React from "react";
import testimonial from "../images/testimonial.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Customers = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-left" className="block">
      <header className="block__header">
        <h2>What our Customers are Saying</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ipsam.
        </p>
      </header>
      <div className="custom__container">
        <div className="card testimonial">
          <div className="grid grid--1x2">
            <div className="testimonial__image">
              <img src={testimonial} alt={"A happy, smiling customer"} />
            </div>
            <blockquote className="quote">
              <p className="quote__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt optio officiis dolore earum error eaque perferendis
                laudantium sed praesentium dolorum.
              </p>
              <footer>
                <div className="media__body">
                  <h3 className="media__title quote__author">
                    Faizan Choudhary
                  </h3>
                  <p className="quote__organization">ABC Company</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
