import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/currentuser", (req: Request, res: Response) => {
  res.send("Troll");
});

export { router as CurrentUserRouter };
