const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Get the token from the authorization header
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token
    const decodedToken = jwt.verify(token, "RANDOM-TOKEN");

    // Retrieve the user details from the decoded token
    req.user = { userId: decodedToken.userId, userEmail: decodedToken.userEmail }; // Adding email if needed

    // Pass down functionality to the endpoint
    next();
  } catch (error) {
    res.status(401).json({
      error: "Invalid request! Token is missing or invalid.",
    });
  }
};
