const { AddressModel } = require("../../model/address.model");

const getAddress = async (req, res) => {
    try {
        const address = await AddressModel.find();
        res.status(200).send(address);
    } catch (error) {
        res.status(400).json({error : error.message});        
    }
}

const addAddress = async (req, res) => {
    const payload = req.body;
    try {
        const newAddress = new AddressModel(payload);
        await newAddress.save();
        res.status(200).json({message : "New address has been added successfully..."})
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

const removeAddress = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const address = await AddressModel.findByIdAndDelete({_id : id}, payload);
        res.status(200).json({msg : "Address has been deleted", address : address});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

const updateAddress = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const address = await AddressModel.findByIdAndUpdate({_id : id}, payload);
        res.status(200).json({msg : "Address has been updated", address : address});
    } catch (error) {
        res.status(400).json({error : error.message});        
    }
}

module.exports = {
    getAddress, addAddress, removeAddress, updateAddress
}