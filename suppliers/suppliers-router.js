const router = require("express").Router();
// do router instead of server and export router
// this is a shortcut but same as products import

function uppercaser(req, res, next) {
  let name = req.params.name;
  console.log(req.params.name);

  if (name) {
    // if the name exists, then change it to uppercase
    req.name = name.toUpperCase();
  }
  next();
  // next sends the request to the next middleware (or route handler)
  // if you don't called next, then you need to do something w. the response and send
  // back to client
}
// function above takes info from request and returns
// 3 amigos instead of 2 homies
// next passes it to the next thing to look at

router.get("/", (req, res) => {
  res.send("get to /suppliers");
});
// this router handles urls that begin with /suppliers

router.get("/:name", uppercaser, (req, res) => {
  // add in uppercaser function
  // express needs to know there is a url parameter to collect
  res.send(`get to /suppliers/${req.name}`);
});
// GET to /suppliers/:name

// when you're done, check get requests in Insomnia
// type in the suppliers endpoint and then name

module.exports = router;
// export the router
