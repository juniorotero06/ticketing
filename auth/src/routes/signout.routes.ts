import { Router } from "express";
import { signOut } from "../controllers";

const router: Router = Router();

router.post("/signout", signOut);

export { router as SignOutRouter };
