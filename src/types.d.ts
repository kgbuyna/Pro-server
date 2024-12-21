import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      validatedData?: any; // Add your custom attribute here
    }
  }
}
