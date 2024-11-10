"use client";

import HomePage from "@/components/Home/HomePage";
import { loadCourses } from "@/redux/course/courseSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/get_course/`);

        dispatch(loadCourses(response.data.courses));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
      <HomePage />
    </>
  );
}
