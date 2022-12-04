require("dotenv").config()

const DB_PASS =  process.env.PASSWORD

const DB_CONNECT = `mongodb+srv://profgleydson:${DB_PASS}@clusteraulapet.npeg1vm.mongodb.net/?retryWrites=true&w=majority`

module.exports = DB_CONNECT