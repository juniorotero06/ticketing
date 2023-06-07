import { Router, Request, Response } from "express";

const router: Router = Router();

router.post("/signout", (req: Request, res: Response) => {
  req.session = null;
  res.send({});
});

export { router as SignOutRouter };
