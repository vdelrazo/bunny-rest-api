import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://admin:aHT3zW68ZjdGBab@cluster0.rb4qh.mongodb.net/bunnyapi", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
