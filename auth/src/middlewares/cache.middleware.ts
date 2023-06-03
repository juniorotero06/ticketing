import { Request, Response, NextFunction } from "express";

import mcache from "memory-cache";
import { CACHE_KEY } from "../config";

module.exports = function (duration: number) {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = CACHE_KEY + (req.originalUrl || req.url);
    const cachedBody = mcache.get(key);

    if (cachedBody) {
      return res.send(JSON.parse(cachedBody));
    } else {
      //   res.sendResponse = res.send;
      //   res.send = (body) => {
      //     mcache.put(key, body, duration * 1000);
      //     res.sendResponse(body);
      //   };
      next();
    }
  };
};
