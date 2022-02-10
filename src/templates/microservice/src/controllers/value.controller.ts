import { Request, Response, NextFunction } from "express";
import { Http } from "@status/codes";

import { Value } from "../models/value.model";

const getValue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const valueData: Value[] = [
      {
        id: 1,
        firtname: "test",
        lastname: "test",
      },
    ];

    res.status(Http.Ok).json({
      message: "success",
      data: valueData,
    });
  } catch (error) {
    next(error);
  }
};

export { getValue };
