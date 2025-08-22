// class ExpressError extends Error{
//     constructor(statusCode, message){
//         super();      // Calls the parent (Error) constructor
//         this.statusCode = statusCode;   // Custom status code (like 404, 500, etc.)
//          this.message = message;  // Error message
//     }
// }
// module.exports =ExpressError;


class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    this.status = statusCode;
    this.message = message;
  }
}

module.exports = ExpressError;