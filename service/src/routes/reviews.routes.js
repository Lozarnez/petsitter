import { Router } from "express";
import { createReview, reviewsByPetsitterId } from "../controllers/reviews.controller.js";

const router = Router();

router.post("/", createReview);
router.get("/:id", reviewsByPetsitterId);

export default router;
