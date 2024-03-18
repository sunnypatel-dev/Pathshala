import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please Provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a password"],
  },
  phone: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  courses: [
    {
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
              topicProgress: {
                type: Boolean,
                default: false,
              },
            },
          ],
        },
      ],
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
