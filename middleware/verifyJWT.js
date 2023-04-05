import jwt from 'jsonwebtoken';
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    return res.status(401).send({ message: 'Not Allow! Unauthorization Access!' });
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (error, decode) {
    if (error) {
      return res.status(403).send({ message: 'Not Allow! Forbidden Access!' });
    }
    req.decode = decode;
    next();
  });
};

export default verifyJWT;