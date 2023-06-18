const express = require("express");
const { getAddress, addAddress, updateAddress, removeAddress } = require("../controller/Address/address.controller");

const addressRouter = express.Router();

addressRouter.route("/").get(getAddress).post(addAddress)
addressRouter.route("/:id").patch(updateAddress).delete(removeAddress)

module.exports = {
    addressRouter
}