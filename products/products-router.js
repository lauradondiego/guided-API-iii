const express = require("express");

const router = express.Router();
// do router instead of server and export router

router.use(express.json());
//a router can have middleware that apies only to the router

router.get("/", (req,res) => {
    res.send("get to /products/")
});
// this router hanfles urls that begin with /products
router.get("/:id", (req,res) => {
    res.send(`get to /products/${id}`)
});
// GET to /products/:id

module.exports = router;
// export the router
