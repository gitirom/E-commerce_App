const router = require("express").Router();

router.get("/users", (req, res) => {
    res.send("user test is successful");
});


router.post("/user", (req, res) => {
    
});


module.exports = router;