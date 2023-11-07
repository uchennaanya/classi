import express from "express";
import multer from "multer";

import {
  createUser,
  getUsers,
  deleteUser,
} from "../controller/userController.js";

const userRoute = express.Router();

// Configure multer to save files to the "uploads" directory
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads"); // Specify the directory where files will be saved
  },
  filename: (req, file, callback) => {
    const filename = `${Date.now()}-${file.originalname}`;
    callback(null, filename);
  },
});

const upload = multer({ storage: storage });

userRoute.post("/createuser", upload.single("image"), createUser);
userRoute.get("/getusers", getUsers);
userRoute.get("/deleteuser/:id", deleteUser);

export default userRoute;
