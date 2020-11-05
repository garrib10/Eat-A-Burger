const burger = require("../models/burger");
const router = require("express").Router();

router.get("/", function (req, res) {
    burger.all(function (burgerData) {
        console.log(burgerData)

        const hbsObject = {
            burgers: burgerData
        }
        res.render("index", hbsObject)
    })
})

router.post("/", function (req, res) {
    burger.create(req.body.burger_name, function (res) {
        console.log(res)
        res.direct("/")
    })
})

// add update one function for router// 
router.put("/", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(condition.req.params.id, function (result) {
        if (result.changedRows === 0) {
           return res.status(404).end();
        }
           res.status(200).end();
    }

    );
});



module.exports = router;
