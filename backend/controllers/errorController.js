module.exports = (err, res, req, next)=>{
    err.statusCode= err.statusCode || 5000
    err.status= err.status || 'error'
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message, 
        error:err,
        stack:err.stack
    })
}