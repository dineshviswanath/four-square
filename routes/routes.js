const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const { catchErrors } = require("../handlers/errorHandlers");

router.get("/", appController.landing);
router.get("/search-venues", appController.renderSearchVenues);
router.get("/venues", catchErrors(appController.getVenues));
router.get("/venues/:venueId", catchErrors(appController.getVenueById));
router.get("/explore", catchErrors(appController.explore));

module.exports = router;
