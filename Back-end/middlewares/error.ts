import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/ErrorHandler';

interface CustomError extends Error {
  statusCode?: number;
  code?: number;
  path?: string;
  keyValue?: any;
}

const errorHandlerMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  // Wrong MongoDB ID error
  if (err.name === 'CastError') {
    const message = `Resource not found with this ID. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name === 'JsonWebTokenError') {
    const message = 'Your URL is invalid. Please try again later.';
    err = new ErrorHandler(message, 400);
  }

  // JWT expired
  if (err.name === 'TokenExpiredError') {
    const message = 'Your URL has expired. Please try again later.';
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode!).json({
    success: false,
    message: err.message,
  });
};

export default errorHandlerMiddleware;
