import React from "react";
import { Helmet } from "react-helmet";

function Travel() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Learn how to get around Bengaluru via airport, train, bus, metro, and cabs. A complete guide for tourists and travelers."
        />
        <meta
          name="keywords"
          content="Bengaluru transportation, travel guide Bengaluru, airport, train, bus, metro, cabs, commute in Bengaluru"
        />
        </Helmet>

    <section id="travel">
      <h2 className="placesh2">Travel Guide</h2>
      <p className="food-desc">Bengaluru is well connected by various transportations like metro, buses and cabs.</p>
      <div className="travel-container1">
        <a href="https://www.makemytrip.com/flights/bangalore-flight-tickets.html" target="_blank"><img className="travel-mid travel1" src="https://www.aci-asiapac.aero/f/blog/4738/8743/0p0/BANGAL~2.JPG" alt="Airports"></img></a>
        <a href="https://www.irctc.co.in/nget/train-search" target="_blank"><img className="travel-mid travel2" src="https://images.unsplash.com/photo-1592844002373-a55ecd7af140?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwcmFpbHdheXxlbnwwfHwwfHx8MA%3D%3D" alt="Trains"></img></a>
        <a href="https://ksrtc.in/" target="_blank"><img className="travel-mid travel3" src="https://wallpapercave.com/wp/wp7570200.jpg" alt="Interstate Buses"></img></a>
      </div>

      <h3 id="transporth3">• Local Transport :</h3>
      <p className="travel-desc">There are various local transports to traverse the city, few examples are give below.</p>
      <div className="travel-container2">
        <a href="https://mybmtc.karnataka.gov.in/en" target="_blank"> <img className="travel-mid travel4" src="https://www.livelaw.in/h-upload/2023/02/19/1500x900_459721-bus-banglore.webp" alt="Local Buses"></img></a>
        <a href="https://www.bmrc.co.in/" target="_blank"><img className="travel-mid travel5" src="https://www.constructionweekonline.in/cloud/2021/11/24/iWVAnf4X-Bangalore-metro-10.jpg" alt="Metro Trains"></img></a>
        <a href="https://nammayatri.in/" target="_blank"><img className="travel-mid travel5" src="https://media.assettype.com/deccanherald%2F2025-12-08%2Fpci4yjjf%2Ffile83loq738hcl4o2f95av.jpg?w=undefined&auto=format%2Ccompress&fit=max" alt="Cabs/Auto"></img></a>
      </div>
    </section>
 </>
  );
}

export default Travel;
