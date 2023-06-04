import { Router, Request, Response } from "express";

const router: Router = Router();

router.post("/signup", (req: Request, res: Response) => {
  res.send("Troll");
});

export { router as SignUpRouter };
