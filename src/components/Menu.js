import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/noodles3.png" alt="Noodles" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Noodles Menu</h3>
            <h1>Sherpur Sadar, Dhaka.</h1>
            <p>
            Customers order at the counter and are served at their table, usually within five to seven minutes. The average check is approximately $8 per person.The restaurants use soft lighting, furniture made from recycled bamboo and have bench seating and community tables. Orders can be made online, to dine-in, or to-go.
            </p>
            <div className="about__btn">
              <a href="https://www.facebook.com/riceandnoodleuttara/" target="blank" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
