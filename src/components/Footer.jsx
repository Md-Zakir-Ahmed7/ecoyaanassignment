import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <h3>Registered Address:</h3>
          <p>
            1-N-12T-781/1
            <br />
            Sri Krishna Vilasa,
            <br />
            Urvastores,
            <br />
            Ashoknagar(MR),
            <br />
            Mangalore,
            <br />
            Dakshina Kannada- 575006,
            <br />
            Karnataka, India
          </p>
        </div>
        <div className="subscription">
          <h3>
            Subscribe to receive updates on blogs, future launches and more!
          </h3>
          <form onSubmit={handleSubscribe} className="subscription-form">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p>By subscribing, you agree to receive notifications</p>
          <a href="/privacy-policy" className="privacy-policy">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ecoyaan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
