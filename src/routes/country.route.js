import { Router } from "express";

import {
  getCountries,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry
} from "../controllers/country.controller.js";

const countryRouter = Router();

countryRouter.get("/", getCountries);

countryRouter.get("/:id", getCountry);

countryRouter.post("/", createCountry);

countryRouter.put("/:id", updateCountry);

countryRouter.delete("/:id", deleteCountry);

export default countryRouter;
