const path = require('path')

module.exports = (app) => {
        
    app.get("/dashboard", async (req, res) => {
        
        res.render("homeadm")

    })

    app.get("/jogar", async (req, res) => {
        res.render("../homeuser")
    })
        
    

     
}








