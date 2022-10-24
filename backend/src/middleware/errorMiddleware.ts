import { Response } from 'express'

const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: Function
) => {
  const message = err.message || 'Server error'
  const code = err.errorCode || 500

  res.status(code).json({
    success: false,
    message,
  })
}
