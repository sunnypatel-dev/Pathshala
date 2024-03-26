"use client";
import Advantage from "@/components/Advantage";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Educators from "@/components/Educators";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { loadCourses } from "@/redux/course/courseSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/get_course"
        );

        dispatch(loadCourses(response.data.courses));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Categories />
      <Testimonials />
      <Advantage />
      <Educators />
      <Footer />
    </>
  );
}
