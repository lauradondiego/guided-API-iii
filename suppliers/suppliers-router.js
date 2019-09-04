const express = require("express");

const router = express.Router();
// do router instead of server and export router

router.use(express.json());
//a router can have middleware that apies only to the router

router.get("/", (req, res) => {
  res.send("get to /suppliers/");
});
// this router handles urls that begin with /suppliers
router.get("/name", (req, res) => {
  res.send(`get to /suppliers/${name}`);
});
// GET to /suppliers/:name

module.exports = router;
// export the router
