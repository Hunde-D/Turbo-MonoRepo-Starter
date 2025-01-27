import express, { Express } from "express";
import cors from "cors";
import path from "path";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

export const createServer = (): Express => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, "public")));

  // routes
  app.use("/", indexRouter).use("/users", usersRouter);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err: Error, req: express.Request, res: express.Response) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(500);
    res.render("error");
  });
  return app;
};
