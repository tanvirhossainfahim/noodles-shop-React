import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO Noodles Delivery Shop</h1>
            <p>
              Here are our brand new noodles delivery shop. In this shop you can find your favourite cheese noodles in short prices. They're so yummy and spicy.
            </p>
            <div className="about__btn">
              <a href="https://en.wikipedia.org/wiki/Noodles_%26_Company" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/noodles2.png" alt="Noodles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
