import express from 'express';
import passport from 'passport';
import { getAdminUsers, myProfile, getAdminStats, sendMessage } from "../controller/user.js"
import { logout } from "../controller/user.js"
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js"

const router = express.Router();

router.get("/googlelogin", passport.authenticate("google", {
  scope: ["profile"]
}))

router.get(
  "/login",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL,
  })
);


// router.get(
//   "/login",
//   passport.authenticate("google", {
//     scope: ["profile"],
//     successRedirect: process.env.FRONTEND_URL,
//   })
// );
// router.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
//   });

router.get("/me", isAuthenticated, myProfile)
router.get("/logout", logout)
router.post("/contact" ,isAuthenticated, sendMessage)
// Admin Routes
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers)
router.get("/admin/stats", isAuthenticated, authorizeAdmin, getAdminStats)

export default router;