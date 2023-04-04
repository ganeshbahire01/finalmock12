const jwt = require("jsonwebtoken");
const Auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token,"masai", (err, decoded) => {
      if (err) {
        console.log(err);
        res.send("Login Failed!");
      }
      if (decoded) {
        req.body.id = decoded.Id;
        next();
      }
    });
  } else {
    res.send("Please login");
  }
};

module.exports = {
  Auth,
};