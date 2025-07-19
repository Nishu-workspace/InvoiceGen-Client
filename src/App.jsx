import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import InvoiceBuilder from "./components/InvoiceBuilder";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AiChatOverlay from "./components/AiChatOverlay";
import PDF from "./components/PDF";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState(null); // null, 'new-invoice', etc.

  return (
    <div>
      {/* <PDF /> */}
      <Header />
      <Hero />
      <InvoiceBuilder />
      <Footer />
      {/* <AiChatOverlay /> */}
      {/* <div className='w-1/6'>
        <Sidebar onSelect={setActiveSection} />
      </div>

      <div className='w-5/6'>
        {activeSection === 'new-invoice' && <InvoiceBuilder />}
        {/* You can add more conditions like:
        {activeSection === 'generate-ai' && <AIInvoiceGenerator />} 
        */}
      {/* </div> */}
    </div>
  );
};

export default App;
