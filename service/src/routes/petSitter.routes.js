import { Router } from "express";
import { createPetSitter, getPetSitters, updatePetSitter, deletePetSitter, getPetSitterById } from "../controllers/petSitter.controller.js";

const router = Router();

router.post("/", createPetSitter);
router.put("/:id", updatePetSitter);
router.delete("/:id", deletePetSitter);
router.get("/", getPetSitters);
router.get("/:id", getPetSitterById);

export default router;