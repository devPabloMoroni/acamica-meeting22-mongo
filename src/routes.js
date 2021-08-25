const express = require("express");
const { findAllUsers, createUser, checkDuplicateEmail, updateUser } = require("./functions.js");
const router = express();

router.use(express.json());

router.get("/user", findAllUsers);
router.post("/user", checkDuplicateEmail, createUser);
router.put("/user/document", updateUser);

module.exports = {
    router
}