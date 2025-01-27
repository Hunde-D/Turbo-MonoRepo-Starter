import express from "express";
const router: express.Router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.json({ message: "Welcome to Express" });
});

export default router;
