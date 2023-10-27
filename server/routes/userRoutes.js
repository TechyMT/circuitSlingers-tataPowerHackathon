const {
    signUserUp,
    signUserIn,
    logUserOut,
    getLoggedInUser,
} = require("../controllers/userControllers");
const {
    validateUserData,
    isAuthenticated,
} = require("../middlewares/userMiddlewares");

const userRouter = require("express").Router();

userRouter.post("/signup", validateUserData, signUserUp);

userRouter.post("/signin", signUserIn);

userRouter.post("/signout", isAuthenticated, logUserOut);

userRouter.post('/otp', sendOtp);

userRouter.post('/forget', forgetPassword);

userRouter.get("/me", isAuthenticated, getLoggedInUser);

module.exports = userRouter;
