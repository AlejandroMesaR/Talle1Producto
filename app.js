/** packages */
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")

/** app configuration */
const app = express()
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodeParser = bodyParser.urlencoded({
    extended: true
})

app.use(jsonParser)
app.use(urlEncodeParser)

const ipFn = require("./middleware/getIpAddress")
app.use("*",ipFn)

/** Methods */
app.get("/", (req, res, next) =>{
    res.send("Welcome to academic rest api Perri")
})

// Producto Routes Loading
const productoRoutes = require("./routes/producto.route")
productoRoutes(app)


app.listen(port, () =>{
    console.log("Server is running..")
})

