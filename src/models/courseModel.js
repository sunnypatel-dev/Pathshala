import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  img1: {
    type: String,
    default: "/android.png.webp",
  },
  img2: {
    type: String,
    default: "/android.png.webp",
  },
  description: {
    type: String,
    required: true,
  },
  syllabus: [
    {
      chapter: {
        type: String,
        required: true,
      },
      topics: [
        {
          topicName: {
            type: String,
            required: true,
          },
          topicLink: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
