"use client";
import Navbar from "@/components/Navbar";
import { logOut, signInSuccess } from "@/redux/user/userSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const signIn = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/login",
          formData
        );

        dispatch(signInSuccess(response.data.user));

        console.log(response.data);
        router.push("/dashboard");
      } catch (err) {
        console.log(err.response.data);
      }
    };

    signIn();
  };

  return (
    <>
      <Navbar />
      <section className="py-28 grid place-content-center">
        <div className="bg-white max-w-[370px] mt-10 lg:mt-0 h-fit p-5 rounded-lg border">
          <h2 className="text-lg font-semibold pb-3">Login to your account</h2>
          <div className="flex items-center py-2 font-medium text-[#4c4c4c]  px-1 rounded-sm gap-1 justify-center border text-[0.9rem]">
            <img
              className="w-4 object-contain"
              src="/google-signin.png"
              alt="google"
            />
            Login with Google
          </div>
          <form onSubmit={handleSubmit} className="pt-4">
            <fieldset className="border-t py-3 flex flex-col gap-3">
              <legend className="text-center  text-[#676767] text-[0.78rem]">
                OR
              </legend>
              <div className="flex flex-col ">
                <label className="text-[0.95rem]" htmlFor="email">
                  Email Id:
                </label>
                <input
                  className="border  w-[100%] text-[0.92rem] outline-none px-3 py-1 rounded-sm text-gray-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-[0.95rem]" htmlFor="password">
                  Password:
                </label>
                <input
                  className="border  w-[100%] text-[0.92rem] outline-none px-3 py-1 rounded-sm text-gray-500"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Must be at least 6 characters"
                />
              </div>
              <a className="text-right text-sm font-semibold text-[#4195c5]">
                Forgot password?
              </a>
              <button
                className="bg-[#00A5EC] py-2 rounded-sm text-white"
                type="submit"
              >
                Enroll Now
              </button>
              <p className="text-sm text-[#222]">
                Not registered yet? Select the skill that you want to learn and
                sign up.{" "}
                <a href="/" className="font-semibold text-[#4195c5]">
                  View all trainings
                </a>
              </p>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
