import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/partials/navbar"
import Content from "./components/content"
import Desc from "./components/contentdesc";
import Places from "./components/places"
import Food from "./components/food"
import Inn from "./components/Inn"
import Travel from "./components/travel"
import Contact from "./components/contact us"
import Btn from "./components/button"
import Footer from "./components/partials/footer"

function App(){
  return(
     <>
      <Helmet>
        <title>Namma Bengaluru Tourism</title>
      </Helmet>
  <div>
    <Navbar/>
    <Content />
    <Desc/>
    <Places/>
    <Food/>
    <Inn/>
    <Travel/>
    <hr/>
    <Contact/>
    <Btn/>
    <Footer/>
  </div>
  </>
);
}

export default App;