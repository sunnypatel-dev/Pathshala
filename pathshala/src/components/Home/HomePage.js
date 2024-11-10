import React from "react";
import Advantage from "./components/Advantage";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Educators from "./components/Educators";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Hero from "@/components/Home/components/Hero";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <Categories />
      <Testimonials />
      <Advantage />
      <Educators />
      <Footer />
    </>
  );
};

export default HomePage;
