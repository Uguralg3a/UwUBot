//Importing the package "express"
const express = require("express")
//creating new variable
const server = express()

//creates a cloud server wich goes offline after 15 minutes inactivity
server.all("/", (req, res) => {
    res.send(`Moin! Dieser Server ist exlusiv für den UwUBot!`)
})

//Opens a port at port 3000 and logs the text in the console
function keepalive() {
    server.listen(3000, () => {
        console.log("Server ist gestartet. Warum bin ich hier?")
    })
}

//makes keepalive ti a module and exports it
module.exports = keepalive