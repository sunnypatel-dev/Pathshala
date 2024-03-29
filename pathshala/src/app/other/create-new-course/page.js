"use client";
import React, { useState } from "react";

const CourseForm = () => {
  const [course, setCourse] = useState({
    category: "",
    name: "",
    duration: "",
    img1: "",
    img2: "",
    description: "",
    syllabus: [
      {
        chapter: "",
        topics: [{ topicName: "", topicLink: "" }],
      },
    ],
  });

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    const updatedSyllabus = [...course.syllabus];
    updatedSyllabus[index][field] = value;

    setCourse({
      ...course,
      syllabus: updatedSyllabus,
    });
  };

  const addChapter = () => {
    setCourse({
      ...course,
      syllabus: [
        ...course.syllabus,
        { chapter: "", topics: [{ topicName: "", topicLink: "" }] },
      ],
    });
  };

  const addTopic = (chapterIndex) => {
    const updatedSyllabus = [...course.syllabus];
    updatedSyllabus[chapterIndex].topics.push({ topicName: "", topicLink: "" });

    setCourse({
      ...course,
      syllabus: updatedSyllabus,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(course);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <label className="block">
        <span>Category:</span>
        <input
          type="text"
          value={course.category}
          onChange={(e) => setCourse({ ...course, category: e.target.value })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <br />
      <label className="block">
        <span>Name:</span>
        <input
          type="text"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <br />
      <label className="block">
        <span>Duration:</span>
        <input
          type="text"
          value={course.duration}
          onChange={(e) => setCourse({ ...course, duration: e.target.value })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <br />
      <label className="block">
        <span>Description:</span>
        <textarea
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <br />
      {course.syllabus.map((chapter, chapterIndex) => (
        <div key={chapterIndex} className="border p-4 my-4">
          <label className="block">
            <span>Chapter:</span>
            <input
              type="text"
              value={chapter.chapter}
              onChange={(e) => handleChange(e, chapterIndex, "chapter")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <br />
          {chapter.topics.map((topic, topicIndex) => (
            <div key={topicIndex} className="border p-2 my-2">
              <label className="block">
                <span>Topic Name:</span>
                <input
                  type="text"
                  value={topic.topicName}
                  onChange={(e) => handleChange(e, topicIndex, "topicName")}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="block">
                <span>Topic Link:</span>
                <input
                  type="text"
                  value={topic.topicLink}
                  onChange={(e) => handleChange(e, topicIndex, "topicLink")}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addTopic(chapterIndex)}
            className="mt-2 bg-indigo-500 text-white py-1 px-3 rounded"
          >
            Add Topic
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addChapter}
        className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded"
      >
        Add Chapter
      </button>
      <br />
      <button
        type="submit"
        className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CourseForm;
