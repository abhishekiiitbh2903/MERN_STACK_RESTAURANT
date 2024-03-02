import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
Welcome to  where passion for food meets excellence in service. Founded with a vision to redefine culinary experiences, we are more than just a restaurant - we are a celebration of flavors, culture, and community.
<br></br>
<br></br>
At ABHI Restaurant, we believe in the power of good food to bring people together. Our journey began with a simple idea: to create a space where every meal tells a story, where every bite ignites joy, and where every guest feels like family.
<br></br>
            </p>
            <Link to={'menu'}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
