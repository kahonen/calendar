const router = require("express").Router();
const eventRoutes = require("./event");

// Book routes
router.use("/event", eventRoutes);

module.exports = router;
