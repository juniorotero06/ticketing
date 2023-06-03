import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

import {
  CurrentUserRouter,
  SignInRouter,
  SignOutRouter,
  SignUpRouter,
} from "../routes/index.routes";

import { ErrorMiddleware, NotFoundMiddleware } from "../middlewares";

const router = Router();
const apiRouter = Router();

apiRouter.use(express.json());
apiRouter.use(cors());
apiRouter.use(helmet());
apiRouter.use(compression());

apiRouter.use("/users", CurrentUserRouter);
apiRouter.use("/users", SignInRouter);
apiRouter.use("/users", SignOutRouter);
apiRouter.use("/users", SignUpRouter);

router.use("/api", apiRouter);
router.use(NotFoundMiddleware);
router.use(ErrorMiddleware);

export { router as Routes };
