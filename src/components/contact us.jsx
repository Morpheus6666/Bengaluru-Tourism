import React from "react";
import Feedback from "./feeback";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-updated">Updated: 18-12-2025 05:00:10 PM IST</p>

      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-left">
          <h3 className="contact-location">Namma Bengaluru Tourism</h3>
          <p>+91 988674029</p>
          <p>nammabengalurutourism@gmail.com</p>
          <p>#101 12th Cross, H.A.L, Vimanapura, Bangalore- 560007</p>
          <p>Tuesday - Sunday 10:00am - 6:00pm </p>
          <p></p>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <h4>Related Articles</h4>
          <ul>
            <li><a href="https://sterlingdevelopers.com/blog/25-facts-you-didnt-know-about-bangalore/" target="_blank">Facts about Bengaluru</a></li>
            <li><a href="https://www.trawell.in/bangalore/200kms" target="_blank">Other cities to visit</a></li>
            <li><Feedback/></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
