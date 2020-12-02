// Custom async handler middleware, takes in a function and returns a middleware function that executes the inputted function and provide error handling for it
const asyncHandler = fn =>
  function asyncWrapper(req, res, next) {
    // const next = args[args.length - 1]
    return Promise.resolve(fn(req, res, next)).catch(next)
  }

export default asyncHandler
