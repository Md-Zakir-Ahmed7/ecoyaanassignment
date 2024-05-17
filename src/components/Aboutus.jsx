import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us - Ecoyaan";
  }, []);
  return (
    <>
      <Navbar />
      <div className="about-us">
        <section className="intro">
          <h1>About Ecoyaan</h1>
          <p>
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world.
          </p>
          <p>
            We recognize that sustainability is a journey (as the Sanskrit word
            “yaan” suggests). To keep you motivated on this journey, on our
            platform and our social media pages, you can find:
          </p>
          <ul>
            <li>
              Tips and tricks to adopt a more eco-friendly and low-waste
              lifestyle
            </li>
            <li>
              Videos, posts, and quizzes on climate change and sustainability
            </li>
            <li>
              Events and pledges that invite you to adopt a more sustainable
              lifestyle
            </li>
          </ul>
        </section>
        <h1 className="values-h1">Our Values</h1>
        <section className="values">
          <div className="value-item">
            <h3>Trust</h3>
            <p>
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future.
            </p>
          </div>
          <div className="value-item">
            <h3>Authenticity</h3>
            <p>
              We are genuine in our mission to promote sustainability and
              environmental awareness. An authentic community of eco-conscious
              people can inspire each other on the journey towards
              sustainability.
            </p>
          </div>
          <div className="value-item">
            <h3>Impact</h3>
            <p>
              We measure our success by our impact on the planet and our
              community. We aim to empower our sellers and customers to make
              responsible choices that benefit their well-being and the
              well-being of others.
            </p>
          </div>
          <div className="value-item">
            <h3>Fun & Engaging</h3>
            <p>
              Moving towards a sustainable lifestyle and the constant news
              around climate change can be stressful. We aim to inject fun and
              creativity into everything we do, from designing our products to
              providing services.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
