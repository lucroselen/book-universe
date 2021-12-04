const { TOKEN_COOKIE_NAME, SECRET } = require("../config/constants");
const jwt = require("jsonwebtoken");

exports.auth = function (req, res, next) {
  let token = req.cookies[TOKEN_COOKIE_NAME];

  if (!token) {
    return next();
  }

  jwt.verify(token, SECRET, function (err, decodedToken) {
    if (err) {
      res.clearCookie(TOKEN_COOKIE_NAME);
      return res.status(401).json("You are not authorized!");
    }

    req.user = decodedToken;

    next();
  });
};
