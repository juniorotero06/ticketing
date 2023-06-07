import express, { Router, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

import {
  CurrentUserRouter,
  SignInRouter,
  SignOutRouter,
  SignUpRouter,
} from "../routes/index.routes";

import { ErrorMiddleware } from "../middlewares";
import { NotFoundError } from "../errors";

const router: Router = Router();
const apiRouter: Router = Router();

apiRouter.use(express.json());
apiRouter.use(cors());
apiRouter.use(helmet());
apiRouter.use(compression());

apiRouter.use("/users", CurrentUserRouter);
apiRouter.use("/users", SignOutRouter);
apiRouter.use("/users", SignUpRouter);
apiRouter.use("/users", SignInRouter);

router.use("/api", apiRouter);

router.all("*", (req: Request, res: Response) => {
  throw new NotFoundError();
});

router.use(ErrorMiddleware);

export { router as Routes };
