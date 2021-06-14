import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Noodles Delivery</h3>
            <h1>Noodles & CO.</h1>
            <p>
            The idea for Noodles & Company was conceived by former Pepsi marketing executive Aaron Kennedy, after eating at Mamie's Asian Noodle Shop in Greenwich Village, New York.
            </p>
            <div className="banner__btn">
              <a href="https://www.linkedin.com/in/tanvir-hossain-fahim-2066a9200/" target="blank" className="btn btn-smart">
                Get Developer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
