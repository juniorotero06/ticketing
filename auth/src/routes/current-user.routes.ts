import { Router } from "express";
import { currentUserMiddleware } from "../middlewares";
import { currentUser } from "../controllers";

const router: Router = Router();

router.get("/currentuser", currentUserMiddleware, currentUser);

export { router as CurrentUserRouter };
