import React from "react";
import ContactContent from "../components/ContactContent";
import Header from "../components/Header";
import Footer from "../components/footer";


const Contactlayout = () => {
  return (
    <div>
      <div className="main-cont">
        <Header />
        <ContactContent />
        <Footer />
      </div>
    </div>
  );
};

export default Contactlayout;
