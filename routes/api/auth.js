const express = require("express");
const { schemas } = require("../../schemas/user-schema");
const { validataBody } = require("../../middlewars");
const authenticate = require("../../middlewars/authenticate");
const controllers = require("../../controllers/auth");
const router = express.Router();
const { upload } = require("../../middlewars");

router.post(
  "/register",
  validataBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validataBody(schemas.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
