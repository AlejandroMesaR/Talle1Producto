
const controller = require("../controller/logic/producto.controller")

module.exports = (app) => {
    
    app.get("/producto", (req, res, next) => {
        controller.getAll(req, res, next)
    })

    app.get("/producto/bycodigo/:codigo", (req, res, next) => {
        controller.getByCodigo(req, res, next)
    })
    
    app.post("/producto", (req, res, next) => {
        controller.createProducto(req, res, next)
    })

    app.put("/producto", (req, res, next) => {
        controller.updateProducto(req, res, next)
    })

    app.delete("/producto", (req, res, next) => {
        controller.delteProducto(req, res, next)
    })
}
