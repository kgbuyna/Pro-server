import { RequestHandler } from 'express';
import * as v from 'valibot';
import { ApiResponse } from '../types/base.js';
import { UserCreationAttributes } from '../types/user.js';

type validatorType = (
  schema: v.AnySchema,
) => RequestHandler<any, ApiResponse, UserCreationAttributes>;

export const validator: validatorType =
  (schema) => async (req, res, next) => {
    const body = req.body;
    const data = schema.async
      ? await v.safeParseAsync(schema, body)
      : v.safeParse(schema, body);

    if (data.success) {
      req.validatedData = data.output;

      next();
    } else {
        res.send(
            {
            status:  "error",
            messages: (data.issues as v.ValiError<v.AnySchema>[]).map(error => error.message),
        })
    }
  };
