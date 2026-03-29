const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

//GET
router.get("/cars", carController.listCars);

//GET BY ID
router.get("/cars/:id", carController.getCar);

module.exports = router;