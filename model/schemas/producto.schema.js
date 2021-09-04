/** packages */
const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")

/** Schema creation */
const productoSchema = new mongoose.Schema({
    codigo:{
        type: "String",
        required: true,
        unique: true
    },
    nombre:{
        type: "String",
        required: true
    },
    precio:{
        type: "Number",
        required: true
    },
    existencia:{
        type: "Number",
        required: true,
    },
    categoria:{
        type: "String",
        required: true
    },
    marca:{
        type: "String",
        required: true
    },
    descuento:{
        type: "Number",
        required: true
    }
})

/** Schema exportation */
productoSchema.plugin(validator)
module.exports = productoSchema