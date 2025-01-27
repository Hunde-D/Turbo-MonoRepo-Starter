import express from "express";
const router: express.Router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

export default router;
