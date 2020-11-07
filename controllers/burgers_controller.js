const express = require("express");
const burger = require("../models/burger.js");
const router = require("express").Router();

;
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        console.log(data)

        const burgerObj = {
            burgers: data
        }
        console.log(burgerObj);
        res.render("index", burgerObj)
    });
});
//Create a New Burger//
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
        console.log(result);
        res.redirect("/")
    });
});

// add update one function for router// 
router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne({ devoured: 1 }, { id: req.params.id }, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;
