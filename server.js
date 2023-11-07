import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import route from "./api/routes/index.js";
import { connect } from "./api/db/db.js";

connect();

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route);

app.get("/", (req, res) => res.json({ msg: "Welcome! to claas1 API " }));

const port = process.env.PORT || 20000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
