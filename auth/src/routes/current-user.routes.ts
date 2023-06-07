import { Router, Request, Response } from "express";
import { currentUserMiddleware } from "../middlewares";

const router: Router = Router();

router.get(
  "/currentuser",
  currentUserMiddleware,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as CurrentUserRouter };
