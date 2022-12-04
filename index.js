const express = require("express");
const app = express()
const mongoose = require("mongoose")

const DB_CONNECT = require("./db/configDB");
const userRoutes = require("./routes/userRoutes");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRoutes)

mongoose.connect(DB_CONNECT)
.then( () => {
  app.listen(3000, () => {
    console.log("Conectado com o mongodb...")
  })
})
.catch( (err) => {
  console.log(err)
})




//profgleydson
//PeyZchXzKJ2XN9Au

//mongodb+srv://profgleydson:PeyZchXzKJ2XN9Au@clusteraulapet.npeg1vm.mongodb.net/?retryWrites=true&w=majority


//o2F4fA87G3MpfrHo