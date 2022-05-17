import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

mongoose.connect(
  "mongodb+srv://usermanagement:2057060@cluster0.3gz15.mongodb.net/UserManagementSystem?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());

// import user route
app.use(UserRoute);


// starting server ( > nodemon index)
app.listen(5000, () => console.log('Server Is Up and Running...'));