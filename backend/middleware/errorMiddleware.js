// Catch all invalid routes and raise a 404 error for our custom error handler to deal with
const notFound = (req, res, next) => {
  const error = new Error(`Not Found ${req.originalUrl}`)
  res.status(404)
  next(error) // could use `throw error` as well
}

// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    // Display err.stack only in development
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
