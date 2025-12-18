import React from "react";
import { useState,useEffect } from "react";
import { Helmet } from "react-helmet";
import "./carousel comp/carousel.css";

const slides = [
  {
    id: 1,
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/0d/61/6c/cubbon-park.jpg?w=900&h=500&s=1",
    alt:"Cubborn Park",
    title: "Cubborn Park",
    description: "Originally called Meade's Park; later renamed Cubbon Park after Sir Mark Cubbon. In 1927 it was renamed Sri Chamarajendra Park to commemorate Maharaja Chamarajendra Wodeyar.",
    link: "https://karnatakatourism.org/en/attractions/cubbon-park/",
  },
  {
    id: 2,
    img: "https://www.swantour.com/blogs/wp-content/uploads/2018/02/Lal-Bagh-Botanical-Gardens-Bangalore.jpg",
    alt:"Lal Bagh Botanical Garden",
    title: "Lal Bagh Botanical Garden",
    description: "Lalbagh Botanical Garden is one of India's most famous botanical gardens, located in south Bengaluru. It's a large historic green space filled with diverse plants, trees, flowers, and scenic spots — often considered one of Bengaluru's “green lungs”.",
    link: "https://karnatakatourism.org/en/attractions/lalbagh-botanical-garden/",
  },
  {
    id: 3,
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/nandi-hills-bangalore-karnataka-1-attr-hero?qlt=82&ts=1742171255239",
    alt:"Nandi Hills",
    title: "Nandi Hills",
    description: "Known for sunrise viewpoints drawing photographers and early visitors. The hills are credited with being the origin of several rivers, including the Arkavathi, Ponnaiyar, Palar, Papagni and Penna.",
    link: "https://karnatakatourism.org/en/attractions/nandi-hills/",
  },
  {
    id: 4,
    img: "https://mediaim.expedia.com/destination/1/647dae78b0efaee8d39af6ced73ec08a.jpg",
    alt:"Jawaharlal Nehru Planetarium",
    title: "Jawaharlal Nehru Planetarium",
    description: "Sky-theatre Shows, Interactive Exhibits provide Immersive dome projection shows about stars, planets, galaxies, and the universe in both English and regional languages.",
    link: "https://taralaya.karnataka.gov.in/en",
  },
  {
    id: 5,
    img: "https://media3.thrillophilia.com/filestore/ohqid0k990wea2od5apvlze5yjsi_1562758442_bannerghatta.jpg?w=400&dpr=2",
    alt:"Bannerghatta National Park",
    title: "Bannerghatta National Park",
    description: "Covers over 104.27 km² of forested hills, grasslands, and wetlands. Located in the eastern slopes of the Western Ghats, providing natural habitat for Tigers, lions, leopards, elephants, bears, hyenas, deer, and monkeys.",
    link: "https://bannerughattabiopark.org/",
  },
  {
    id: 6,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7K3i4Q1MoppkViCCMsPsxweUjRLPsKrTSyEiVKEJAni7ubyvEsLzWi00Kf4SMkTBFrQwIVD0nSkLBu6GnEJe-MTE_Es5vbC6vhuvrwLrHeNBnQQTIwUn2A-TKlxobm2Hw-JNPgi6VaETP/w1200-h630-p-k-no-nu/Wodeyar+Bangalore+Palace+Pixelated+Memories+Karnataka+Sahil+Ahuja+(6).JPG",
    alt:"Bengaluru Palace",
    title: "Bengaluru Palace",
    description: "One of the most famous landmarks and tourist attractions in the city built in 1878 by Chamaraja Wodeyar, the Maharaja of Mysore.",
    link: "https://karnatakatourism.org/en/attractions/bangalore-palace/",
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <Helmet>
   
        <meta
          name="description"
          content="Explore Bengaluru attractions including Cubbon Park, Lal Bagh Botanical Garden, Nandi Hills, and more. A visual tour of the Garden City."
        />
        <meta
          name="keywords"
          content="Bengaluru attractions, Bengaluru tourism, Cubbon Park, Lal Bagh, Nandi Hills, Bangalore Palace, Bengaluru travel guide, Karnataka travel guide"
        />
      </Helmet>



    <div className="carousel">
      {/* Slides */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <a
          href={slide.link}
          target="_blank"
          rel="noopener noreferrer"
          className="slide" >

            <img src={slide.img} alt={slide.title} />
          
        {/* captions INSIDE link */}
      <div className="slide-content-overlay">
        <h2 className="slide-title">{slide.title}</h2>
        <p className="slide-description">{slide.description}</p>
      </div>
    </a>
        ))}
      </div>


      {/* Arrows */}
      <button className="prev" onClick={prev}>‹</button>
      <button className="next" onClick={next}>›</button>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
    </>
  );
}
