import mongoose from "mongoose";

const certificateSchema = mongoose.Schema({
  user_id: { type: String },
  username: { type: String },
  course_id: { type: String },
  course_name: { type: String },
  course_category: { type: String },
  certificateId: { type: String },
  certificateDownloadUrl: {
    type: String,
    default:
      "https://drive.google.com/file/d/1QZcw0o7L7GTbrS0GRA4YJeyp_rEVruTC/view?usp=sharing",
  },
  date_of_completion: {
    type: Date,
    default: Date.now,
  },
});

const Certificate =
  mongoose.models.Certificate ||
  mongoose.model("Certificate", certificateSchema);

export default Certificate;
