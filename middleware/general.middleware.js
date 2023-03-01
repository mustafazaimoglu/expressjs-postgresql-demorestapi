const generalMiddleware = (req,res,next) => {
    console.log("Middleware kicked in!")
    next();
}

module.exports = generalMiddleware;