const jwt = require("jsonwebtoken");
const config = process.env;
const verifyToken = (req, res, next) => {
    // console.log(req)
    let token   
    
 
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        token =  req.query.token;
    }
    console.log(token)
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};


module.exports = verifyToken