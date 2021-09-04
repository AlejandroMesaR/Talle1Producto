/** Dto */
const productoDto = require("../../model/dto/producto.dto")
const config = require("config")


exports.createProducto = (req, res, next) => {
    let producto = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        precio: req.body.precio,
        existencia: req.body.existencia,
        categoria: req.body.categoria,
        marca: req.body.marca,
        descuento: req.body.descuento
    }
    productoDto.create(producto, (err, data) =>{
        if(err){
            return res.status(400).json(
                { 
                    error: err
                }
            )
        }
        return res.status(201).json({
            info: data
        })

    })
}

exports.updateProducto = (req, res, next) => {
    let producto = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        precio: req.body.precio,
        existencia: req.body.existencia,
        categoria: req.body.categoria,
        marca: req.body.marca,
        descuento: req.body.descuento
    }

    productoDto.update({_id: req.body.id}, producto, (err, data) =>{
        if(err){
            return res.status(400).json(
                { 
                    error: err
                }
            )
        }
        return res.status(201).json({
            info: data
        })
    })
}

exports.getAll = (req, res, next) => {
    productoDto.getAll({}, (err, data) =>{
        if(err){
            return res.status(400).json(
                { 
                    error: err
                }
            )
        }
        return res.status(200).json({
            info: data
        })
    })
}

exports.getByCodigo = (req, res, next) => {
    productoDto.getByCodigo({codigo: req.params.codigo}, (err, data) =>{
        if(err){
            return res.status(400).json(
                { 
                    error: err
                }
            )
        }
        return res.status(200).json({
            info: data
        })
    })
}

exports.delteProducto = (req, res, next) => {
    productoDto.delete({_id: req.body.id}, (err, data) =>{
        if(err){
            return res.status(400).json(
                { 
                    error: err
                }
            )
        }
        res.status(204).json()
    })
}

