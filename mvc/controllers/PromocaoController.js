const PromocaoDAO = require('../DAO/PromocaoDAO.js')
const path = require('path')

module.exports = (app) => {

    app.get("/getAllPromocao", async (req, res) => {        
        const promocaoDAO = new PromocaoDAO()

        res.setHeader("Access-Control-Allow-Origin","*")
        //Retorna no formato Json
        res.json(await promocaoDAO.consultarTodos())        
    })
      
}







