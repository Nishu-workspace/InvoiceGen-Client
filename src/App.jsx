import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Import your components
import Header from "./components/Header";
import Hero from "./components/Hero";
import InvoiceBuilder from "./components/InvoiceBuilder";
import AboutUs from "./components/AbousUs";
import Footer from "./components/Footer";

// A simple component for your homepage
const HomePage = () => (
  <>
    <Hero />
    <InvoiceBuilder />
  </>
);

function App() {
  return (
    // 1. Wrap your entire app in BrowserRouter

    <div className="bg-gray-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
