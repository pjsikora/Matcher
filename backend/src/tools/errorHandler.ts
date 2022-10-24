class ErrorHandler extends Error {
  constructor(message: string, public errorCode: number) {
    super(message)

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = ErrorHandler
