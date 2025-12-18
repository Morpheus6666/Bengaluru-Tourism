import React from "react";
import { Helmet } from "react-helmet";

function Inn() {
  const stays = [
    {
      id:1,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      alt:"HomeStay options",
      title: "HomeStay",
      description: "Convenient and cozy mid-range stay.",
      link: "https://www.booking.com/homestay/city/in/bengaluru.html"
    },
    {
      id:2,
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/46/28/b9/peacock-lounge.jpg?w=1400&h=800&s=1",
      alt:"Luxury Hotels options",
      title: "Luxury Hotel",
      description: "Premium comfort and world-class amenities.",
      link: "https://www.tripadvisor.in/Hotels-g297628-zff12-Bengaluru_Bangalore_District_Karnataka-Hotels.html"
    },
    {
      id:3,
      src: "https://media.istockphoto.com/id/470455143/photo/cheap-motel-room-bed.jpg?s=612x612&w=0&k=20&c=kquWQfvZ4Y_ffwPn0ypJOoinvUPy4T09KODxZe4c0fA=",
      alt:"Budget Hotel options",
      title: "Budget Hotel",
      description: "Affordable rooms for cost-conscious travelers.",
      link: "https://www.booking.com/budget/city/in/bengaluru.html"
    }
  ];

  return (
     <>
      <Helmet>
        
        <meta
          name="description"
          content="Find the best places to stay in Bengaluru including homestays, luxury hotels and budget-friendly accommodations."
        />
        <meta
          name="keywords"
          content="Bengaluru hotels, Bengaluru homestays, luxury hotels Bengaluru, budget hotels, accommodation guide"
        />    
</Helmet>

    <section className="inn-section">
      <h2 className="placesh2">Stay Options for Every Budget</h2>
      <p className="food-desc inn-description">
        Visitors can choose from a diverse range of accommodation options, including luxury hotels, budget-friendly hotels, and homestays offering local experiences. Whether you want elegance, affordability, or a home-like stay, the city has you covered.
      </p>

      <div className="inn-grid">
        {stays.map((stay, index) => (
          <a 
            key={index}
            href={stay.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inn-item" >
            
            <img src={stay.src} alt={stay.title} className="inn-image" />
            
            <div className="inn-overlay">
              <h3 className="inn-item-title">{stay.title}</h3>
              <p className="inn-item-desc">{stay.description}</p>
            </div>
          </a>
        ))}
      </div>
   </section>
  </>
  );
}

export default Inn;
