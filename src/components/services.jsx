import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tick from "../images/tick.svg";
import popular from "../images/popular.svg";

class Services extends React.Component {
  content = {
    list: [
      "Unlimited Websites",
      "Unlimited Bandwidth",
      "100 GB SSD Sotrage",
      "3 GB RAM",
    ],
  };
  componentDidMount = () => {
    AOS.init();
    AOS.refresh();
  };
  selectBtn = (action) => {
    return (
      <ul className="btn--style">
        <li>
          {action}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    );
  };
  selectCard = (badge) => {
    return (
      <header class="card__header">
        <h3 class="plan__name">Entry</h3>
        <span class="plan__price">$14</span>
        <span class="plan__billing-cycle">/month</span>
        <span class={`badge badge--${badge} badge--small`}>10% OFF</span>
        <span class="plan__description">Easy start on the cloud</span>
      </header>
    );
  };
  render() {
    return (
      <section
        style={{ margin: "100px 0" }}
        class="block container block-plans"
      >
        <div data-aos="fade-up" class="grid grid--1x3">
          <div class="plan">
            <div class="card card--secondary">
              {this.selectCard("secondary")}
              <div class="card__body">
                <ul class="list">
                  {this.content.list.map((item) => (
                    <li class="list__item">
                      <img className="list--tick" src={tick} alt={"tick.svg"} />
                      {item}
                    </li>
                  ))}
                </ul>
                {this.selectBtn("Buy Now")}
              </div>
            </div>
          </div>
          <div class="plan plan--popular">
            <div class="card card--primary">
              <img className="popular__badge" src={popular} alt="popular tag" />
              {this.selectCard("primary")}
              <div class="card__body">
                <ul class="list">
                  {this.content.list.map((item) => (
                    <li class="list__item">
                      <img className="list--tick" src={tick} alt={"tick.svg"} />
                      {item}
                    </li>
                  ))}
                </ul>
                {this.selectBtn("Buy Now")}
              </div>
            </div>
          </div>
          <div class="plan">
            <div class="card card--secondary">
              {this.selectCard("secondary")}
              <div class="card__body">
                <ul class="list">
                  {this.content.list.map((item) => (
                    <li class="list__item">
                      <img className="list--tick" src={tick} alt={"tick.svg"} />
                      {item}
                    </li>
                  ))}
                </ul>
                {this.selectBtn("Buy Now")}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
