import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/signup", (req: Request, res: Response) => {
  res.send("Troll");
});

export { router as SignUpRouter };
