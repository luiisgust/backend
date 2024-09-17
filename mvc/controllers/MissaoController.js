const MissaoDAO = require('../DAO/MissaoDAO.js')
const path = require('path')

module.exports = (app) => {


    // Todos os gets
    app.get("/missoes", async (req, res) => {        
        const missaoDAO = new MissaoDAO()
        
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await missaoDAO.consultarTodos())        
    })
        
    app.get("/missao", (req, res) => {
        res.render("Missao/listmissoes")
    })

    app.get("/addmissao", (req, res) => {
        res.render("Missao/addmissoes")
    })

    app.get("/altermissao/:id", async (req, res) =>{
        
        const missao = new MissaoDAO()        
        const r = await missao.consultarUm(req.params.id)
        console.log(r)
        res.render('Missao/altermissao', { r })
    })

   
    // Todos os post
    app.post('/registrarmissao', async (req, res) => {


        console.log(req.body)
        const missaoDAO = new MissaoDAO();
        const { 
            id: id,
            txtnamemissao: nome, 
            txtdescmissao: desc,
            txtrecmissao: recompensa  } = req.body;

        res.setHeader("Access-Control-Allow-Origin","*")
 
        let status;

        if(!id){
            status = await missaoDAO.registrarmissao(nome, desc, recompensa)
        }
        else{
            status = await missaoDAO.atualizar(id, nome, desc, recompensa)
        }   

       
        res.redirect("/missao")

    })


    // Delete
    app.delete("/missao/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        const missaoDAO = new MissaoDAO()

        const status = await missaoDAO.apagar(req.params.id)

        res.json({
            status
        })
    })


    // Update
    app.put("/missao/:id", async (req, res) =>{
        const missaoDAO = new MissaoDAO()
        
        const {
            nome,
            desc,
            recompensa,
            id
        } = req.body;

        console.log({nome, desc, recompensa, id})
      
        if(id == req.params.id){
          const r =  await missaoDAO.atualizar(nome, desc, recompensa, id)
          res.json({msg: "O total de linhas alteradas: "+r})
        }
        else{
          res.json({msg:"Problema."})
        }         
    })
 
    
}


  





