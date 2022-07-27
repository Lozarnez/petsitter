import { Router } from "express";
import { getStates, getPetSitterByState } from "../controllers/state.controller.js";

const router = Router();

router.get('/', getStates);
router.get('/:id/petSitter', getPetSitterByState);

export default router;