import * as express from 'express';
import { id } from './types/base.ts';

declare global {
  namespace Express {
    interface Request {
      token: string;
      userId: id;
      username: string;
      validatedData?: any; // Add your custom attribute here
    }
  }
}
