import { Router } from "express";
const router = Router();

// Import all controllers
import * as controller from "../controllers/appController.js";

// POST Methods

// 1. Register User
router.route("/register").post(controller.register);
// 2. Send the Email
router.route("/registerMail").post();
// 3. Authenticate User
router.route("/authenticate").post((req, res) => res.end());
// 4. Login User
router.route("/login").post(controller.login);

// GET Methods

// 1. User With Username
router.route("/user/:username").get(controller.getUser);
// 2. Generate random OTP
router.route("/generateOTP").get(controller.generateOTP);
// 3. Verify OTP
router.route("/verifyOTP").get(controller.verifyOTP);
// 4. Reset all the variables
router.route("/createResetSession").get(controller.createResetSession);

// PUT Methods

// 1. Is use to Update the User profile
router.route("/updateuser").put(controller.updateUser);
// 2. Use to reset password
router.route("/resetPassword").put(controller.resetPassword);

export default router;
