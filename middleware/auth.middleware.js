exports.authTest = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const myToken = "zaimoglu"

    if (token === myToken) {
      return next();
    }
    return res.status(401).json({
      success: false,
      error: "Unauthorized - use the token : Bearer zaimoglu"
    });
  };