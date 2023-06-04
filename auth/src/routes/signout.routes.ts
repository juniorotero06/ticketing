import { Router, Request, Response } from "express";

const router: Router = Router();

router.post("/signout", (req: Request, res: Response) => {
  res.send("Troll");
});

export { router as SignOutRouter };
