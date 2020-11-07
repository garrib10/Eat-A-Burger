const express = require("express");
const burger = require("../models/burger.js");
const router = require("express").Router();

;
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        console.log(data)

        const hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});
//Create a New Burger//
router.post("/api/burger", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

// add update one function for router// 
router.put("api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    },
        condition, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });

});
// Added delete function  for router// 
router.delete("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
