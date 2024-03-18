"use client";
import { useState } from "react";
import axios from "axios";

const NewCourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    courseLength: "",
    // Add other fields here
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();
    try {
      const response = await axios.post("/api/addCourse", formData);
      console.log(response.data);
      // Reset form after successful submission
      setFormData({
        courseName: "",
        courseLength: "",
      });

      alert("success");
    } catch (error) {
      console.error("Error:", error);
      alert("fail");
    }
  };

  return (
    <form
      className="py-36 flex flex-col gap-2 items-center"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col">
        Course Name:
        <input
          className="border"
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          required
        />
      </label>
      <select
        className="w-fit border p-1"
        name="courseLength"
        onChange={handleChange}
        value={formData.courseLength}
        required
      >
        <option value="" disabled hidden>
          Select Course Length
        </option>
        <option value="4 weeks">4 weeks</option>
        <option value="8 weeks">8 weeks</option>
      </select>

      {/* Add more input fields here */}
      <button className="border border-blue-500 p-1 w-fit" type="submit">
        Add Course -{">"}
      </button>
    </form>
  );
};

export default NewCourseForm;
