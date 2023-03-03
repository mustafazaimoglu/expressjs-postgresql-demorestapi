const generalMiddleware = (req,res,next) => {
    console.log("Middleware kicked in!")
    return next();
}

module.exports = generalMiddleware;
