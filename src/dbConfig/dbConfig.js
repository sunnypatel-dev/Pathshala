import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://sunnypatelkoder:sunnypatelkoder@cluster0.9gjeii7.mongodb.net/pathshala"
    );
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MONOG DB connceted successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MONOGO DB connection erorr. please make sure mongodb is runnign",
        +err
      );
    });
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }
}
