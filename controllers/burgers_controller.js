const express = require("express");
const burger = require("../models/burger");
const router = require("express").Router();

router.get("/", function (req, res) {
    burger.all(function (burgerData) {
        console.log(burgerData)

        const hbsObject = {
            burgers: burgerData
        }
        res.render("index", hbsObject)
    });
});
//Create a New Burger//
router.post("/burgers", function (req, res) {
    burger.create(req.body.burger_name, function (res) {
        console.log(res)
        res.redirect("/")
    });
});

// add update one function for router// 
router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (res) {
        res.redirect("/");
    });



});



module.exports = router;
