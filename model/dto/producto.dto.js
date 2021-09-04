/** packages */
const mongoose = require("mongoose")
const db = require("../db-connecton/mongodb")

/** using schema */
const schema = require("../schemas/producto.schema")
db()

schema.statics = {
    create: function(data, cb){
        let doc = new this(data)
        doc.save(cb)
    },
    getAll: function(query, cb){
        this.find(query, cb)
    },
    getByCodigo: function(query, cb){
        this.find(query, cb)
    },
    update: function(query, data, cb){
        this.findByIdAndUpdate(query, {$set: data}, {new: true}, cb)
    },
    delete: function(query, cb){
        this.findByIdAndDelete(query)
    }
}

const dto = mongoose.model("coll_producto", schema)
module.exports = dto

