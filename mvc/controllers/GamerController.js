const GamerDAO = require('../DAO/GamerDAO.js')
const path = require('path')

module.exports = (app) => {


    // Todos os gets
    app.get("/gamers", async (req, res) => {        
        const gamerDAO = new GamerDAO()
        
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await gamerDAO.consultarTodos())        
    })
        
    app.get("/gamer", (req, res) => {
        res.render("Gamer/listgamer")
    })

    app.get("/addgamer", (req, res) => {
        res.render("Gamer/addgamer")
    })

    app.get("/altergamer/:id", async (req, res) =>{
        
        const gamer = new GamerDAO()        
        const r = await gamer.consultarUm(req.params.id)
        console.log(r)
        res.render('Gamer/altergamer', { r })
    })
 
   
    // Todos os post
    app.post('/registrargamer', async (req, res) => {
        
  
    //    console.log(req.body.txtskins)
        const gamerDAO = new GamerDAO();
        const { 
            id: id,
            txtname: nome,
            txtsenha: senha,
            txtemail: email,
            txtdate: dtnasc,
            id_person: personagens_id_personagem,
            id_coin: coins_id_coin
          } = req.body;

        res.setHeader("Access-Control-Allow-Origin","*")
 
        let status;
        if(!id){
            status = await gamerDAO.registrargamer(nome, senha, email, dtnasc, personagens_id_personagem, coins_id_coin )
        }
        else{
            status = await gamerDAO.atualizar(id, nome, senha, email, dtnasc, personagens_id_personagem, coins_id_coin)
        }   

       
        res.redirect("/login")

    })


    // Delete
    app.delete("/gamer/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        const gamerDAO = new GamerDAO()

        const status = await gamerDAO.apagar(req.params.id)

        res.json({
            status
        })
    })
 

    // Update
    app.put("/gamer/:id", async (req, res) =>{
        const gamerDAO = new GamerDAO()
        
        const {
            nome,
            senha,
            email,
            dtnasc,
            personagens_id_personagem,
            coins_id_coin,
            id
        } = req.body;
 
        console.log({nome, senha, email, dtnasc,personagens_id_personagem, coins_id_coin, id})
      
        if(id == req.params.id){
          const r =  await gamerDAO.atualizar(nome, senha, email, dtnasc, personagens_id_personagem, coins_id_coin, id)
          res.json({msg: "O total de linhas alteradas: "+r})
        }
        else{
          res.json({msg:"Problema."})
        }         
    })
 
    
}


  





