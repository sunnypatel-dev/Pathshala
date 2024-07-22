"use client";
import Advantage from "@/components/Advantage";
import Aside from "@/components/Aside";
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
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/get_course/`
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
      <Aside />
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
