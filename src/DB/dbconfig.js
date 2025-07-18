import mongoose from "mongoose";

export default async function dbconnect() {
  try {
    const connect = await mongoose.connect(
      `${process.env.DB_URL}/${process.env.DB_NAME}`
    );
    const connection = connect.connection;

    connection.on("connect", () => {
      console.log("Connected to DB Successfully");
    });
  } catch (error) {
    console.log("Error connecting to the database:", error);
    process.exit(1)
  }
}
