import express from "express";
import { activate } from "../controllers/openlimite";
const test = express.Router();

test.get("/", activate);

export default test;
