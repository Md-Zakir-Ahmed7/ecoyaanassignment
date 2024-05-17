import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import photo1 from "../assets/ecoyaanmain.png";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "Ecoyaan-Home";
  }, []);
  return (
    <div>
      <Navbar />
      <img className="img" src={photo1} alt="photo" />
      <div className="centered">
        <h1>Join Ecoyaan: Your Partner in Building a Sustainable Future</h1>
        <div className="btns">
          <button
            className="btn"
            onClick={() => {
              window.open("https://www.ecoyaan.com/sellOnEcoyaan");
            }}
          >
            Get in touch
          </button>
          <button
            className="btn"
            onClick={() => {
              window.open("https://www.instagram.com/ecoyaan/");
            }}
          >
            Follow us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
