const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/setcookies", (req, res) => {
  res.cookie("sessionId", "12345");
  res.send("Cookie set: sessionId=12345 ✅");
});

 
app.get("/readcookie", (req, res) => {
  const id = req.cookies.sessionId;
  res.send("sessionId = " + (id || "Cookie not found ❌")); 
});

app.get("/delete", (req, res) => {
  res.clearCookie("sessionId");
  res.send("Cookie deleted ✅");
});

app.listen(3000, () => console.log("Server running: http://localhost:3000"));
