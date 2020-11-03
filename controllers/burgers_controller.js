const burger = require("../models/burger");
const router = require("express").Router();

router.get("/", function(req, res){
    burger.all(function(burgerData) {
        console.log(burgerData)

        const hbsObject = {
            burgers: burgerData
        }
        res.render("index", hbsObject)
    })
})

router.post("/", function(req, res){
    burger.create(req.body.burger_name, function(res){
        console.log(res)
        res.direct("/")
    })
})

// add update one function for router// 

module.exports = router;
