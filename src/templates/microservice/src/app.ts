import express, { Application } from "express";
import morgan = require("morgan");
//require("dotenv").config();

require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` })

const routes = require("./routes");

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setting();
    this.middlewares();
    this.routes();
  }

  private setting() {
    this.app.set("port", process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes() {
    this.app.use("/", routes);
  }
}
