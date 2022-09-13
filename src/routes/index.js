const { Router } = require("express");
const router = Router();

router.post("/users", (req, res) => {
  console.log(req.body);
  res.json({ msg: "Recibido" });
});
router.get("/users", (req, res) => {
  let response = [
    { name: "Pedro", age: "32" },
    { name: "Luis", age: "21" },
  ];
  res.json(response);
});

module.exports = router;
