const router = require("express").Router();
const registerRoute = require("./register.js");
const loginRoute = require("./login.js");
const userRoute = require("./user.js");
const songRoute = require("./song.js");
const playlistRoute = require("./playlist");
const genreRoute = require("./genre");
const videoRoute = require("./video");
const artRoute = require("./art.js");
const refreshRoute = require("./refresh.js");
const stripeRoute = require("./stripe.js");

router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/profile", userRoute);
router.use("/song", songRoute);
router.use("/playlist", playlistRoute);
router.use("/genre", genreRoute);
router.use("/video", videoRoute);
router.use("/art", artRoute);
router.use("/refresh", refreshRoute);
router.use("/stripe", stripeRoute);
module.exports = router;
