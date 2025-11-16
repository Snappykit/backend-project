class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.errors = errors;
    this.success = false;
    this.stack = statck
    this.message = message
    this.data = null
    if (statck) {
        this.stack = statck
        
    } else{
        Error.captureStackTrace(this,this.constructor)
    }
  }
}
export {ApiError}