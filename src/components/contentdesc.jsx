import React from "react";
import { Helmet } from "react-helmet";

function Desc(){
    return(
        <>
      <Helmet>
        <meta
          name="description"
          content="Discover Bengaluru's heritage, tech hubs, parks, cuisine, academic excellence, and cultural diversity."
        />
        <meta
          name="keywords"
          content="Bengaluru tourism, Bengaluru parks, tech hub, cultural city, India travel guide"
        />
      </Helmet>
      
        <div id="description">
            <p className="hero-desc">
                <span className="capital-letter">B</span>engaluru is a city where heritage and modernity meet from parks and palaces to tech parks and startups; from traditional temples to diverse global dining; and from academic excellence to booming innovation. Its appeal lies in its cosmopolitan culture, green spaces, and economic dynamism. Bengaluru is India’s leading IT and tech hub, housing the headquarters or major offices of Infosys, Wipro, and many global tech giants.The city’s metro GDP is among the highest in India.Bengaluru blends modern urban life with traditional culture.
            </p>
            <p className="hero-desc">
                It is a cosmopolitan city with people from across India and the world, contributing to diverse cultural experiences, festivals, and cuisines. Bengaluru is also an academic and research centre with institutions like National Law School of India University, Indian Institute of Science, National Institute of Mental Health and Neurosciences... Situated on the Deccan Plateau at about 900+ m (≈3,000 ft) elevation — one of India's highest major cities. And The climate is generally moderate, with warm summers, pleasant winters, and monsoon rains.
            </p>
        </div>
  </>  
);
}

export default Desc;