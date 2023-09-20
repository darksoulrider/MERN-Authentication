import express from "express";

// ******** Import controllers ***********

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({
    message: "Mukesh",
  });
});

export default router;
