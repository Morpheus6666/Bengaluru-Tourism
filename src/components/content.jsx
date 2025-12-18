import React from "react";
import { Helmet } from "react-helmet";

function Content() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover Bengaluru's attractions, food, places, and culture."
        />
        <meta name="keywords" content="Bengaluru tourism, travel guide, attractions, food" />
      </Helmet>
    
    <section id="home">
      <h1 className="hero">Explore Bengaluru</h1>
      <p className="hero">The Garden City of India</p>
       </section>
   </>
);
}

export default Content;
