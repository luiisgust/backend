const permitido = require('../../autenticacao.js')
const LoginDAO = require('../DAO/LoginDAO.js')
const path = require('path')


module.exports = (app) => {


    // Todos os gets
    app.get("/login", async (req, res) => {
        
        res.render("index")

    })


    // Todos os post
    app.post('/logar', async (req, res) => {
        console.log(req)
        

            console.log(req.body)
            const { 
            txtnamel: email, 
            txtsenhal: senha } = req.body;
                
            let permitido = await new LoginDAO().logar(email, senha);

             
       
            if(permitido){
                res.redirect("/dashboard")
            }
            else{
                res.redirect("/login")
            }     
           
    })
     
}








