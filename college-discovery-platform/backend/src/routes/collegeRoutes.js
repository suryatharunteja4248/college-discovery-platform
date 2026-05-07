const express = require("express");

const {
  getAllColleges,
  getCollegeBySlug,
  compareColleges,
} = require("../controllers/collegeController");

const router = express.Router();

router.post("/compare", compareColleges);

router.get("/", getAllColleges);

router.get("/:slug", getCollegeBySlug);

module.exports = router;