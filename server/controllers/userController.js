const express = require("express");
const router = express.Router();
const { TOKEN_COOKIE_NAME } = require("../config/constants");
const authServices = require("../services/authServices");
const { errorHandler } = require("../middlewares/errorHandler");

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      res.json({ error: "You must fill in both fields!" });
      return;
    }
    let user = await authServices.login(email, password);

    if (!user) {
      res.status(401).json({ error: "Invalid email or password!" });
    } else {
      let token = await authServices.createToken(user);

      res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
      });
      res.json({ user: email, id: user._id });
    }
  } catch (error) {
    res.status(401).json({ error: errorHandler(error) });
  }
});

router.post("/register", async (req, res) => {
  let { firstName, lastName, email, password, rePassword } = req.body;

  email = email.toLowerCase();

  try {
    if (firstName && lastName) {
      firstName =
        firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();

      lastName =
        lastName[0].toUpperCase() + lastName.substring(1).toLowerCase();
    }

    if (password !== rePassword) {
      res.status(401).json({ error: "Both passwords must be the same!" });
    } else {
      await authServices.register(firstName, lastName, email, password);
      let user = await authServices.login(email, password);
      let token = await authServices.createToken(user);

      res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
      });
      res.json({ user: email, id: user._id });
    }
  } catch (error) {
    res.status(401).json({ error: errorHandler(error) });
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie(TOKEN_COOKIE_NAME, { path: "/", domain: "localhost" });

  res.json("You have logged out successfully");
});

module.exports = router;