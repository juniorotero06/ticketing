import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/signin", (req: Request, res: Response) => {
  res.send("Troll");
});

export { router as SignInRouter };
