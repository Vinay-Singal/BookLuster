import express from 'express'
import dotenv from 'dotenv'
import Mongoose  from 'mongoose';
import bookRoute from './route/book_route.js'
import cors from 'cors';
import userRoute from './route/user_rotue.js';
import path from "path";

const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB server
const connectDB = async () => {
  try {
    await Mongoose.connect(process.env.MongoDBURI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

connectDB();


// define route
app.use("/book", bookRoute);
app.use("/user", userRoute);

// deployment
if(process.env.NODE_ENV === "production"){
  const dirPath = path.resolve();
  app.use(express.static("frontend/dist"));
  app.get("*",(req, res) =>{
    res.sendFile(path.join(dirPath, "frontend", "dist", "index.html"));
  })
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});