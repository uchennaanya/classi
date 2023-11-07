import express from "express";

import userRoute from "./userRoute.js";

const route = express.Router();

route.use(userRoute);

export default route;
