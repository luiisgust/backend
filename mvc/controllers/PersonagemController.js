const PersonagemDAO = require('../DAO/PersonagemDAO.js')
const path = require('path')

module.exports = (app) => {


    // Todos os gets
    app.get("/personagens", async (req, res) => {        
        const personagemDAO = new PersonagemDAO()
        
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await personagemDAO.consultarTodos())        
    })
        
    app.get("/personagem", (req, res) => {
        res.render("Personagem/listperson")
    })

    app.get("/addpersonagem", (req, res) => {
        res.render("Personagem/addpersons")
    })

    app.get("/alterpersonagem/:id", async (req, res) =>{
        
        const personagem = new PersonagemDAO()        
        const r = await personagem.consultarUm(req.params.id)
        console.log(r)
        res.render('Persoangem/alterpersonagem', { r })
    })
 
   
    // Todos os post
    app.post('/registrarpersonagem', async (req, res) => {
        
  
       // console.log(req.body.txtskins)
        const personagemDAO = new PersonagemDAO();
        const { 
            id: id,
            txtnamepersonagem: nome, 
            txtgeneropersonagem: genero,
            txttipopersonagem: tipo,  
            txttotalcoinpersonagem: totalcoin,  
            txtstartlat: start_latitude,  
            txtstartlong: start_longitude,  
            txtskins: skins_id_skin
          } = req.body;
         
        res.setHeader("Access-Control-Allow-Origin","*")
 
        let status;

        if(!id){
           
            status = await personagemDAO.registrarpersonagem(nome, genero, tipo, totalcoin, start_latitude, start_longitude, skins_id_skin)
        }
        else{
            status = await personagemDAO.atualizar(id, nome, genero, tipo, totalcoin, start_latitude, start_longitude, skins_id_skin)
        }   

       
        res.redirect("/personagem")

    })


    // Delete
    app.delete("/personagem/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        const personagemDAO = new PersonagemDAO()

        const status = await personagemDAO.apagar(req.params.id)

        res.json({
            status
        })
    })
 

    // Update
    app.put("/personagem/:id", async (req, res) =>{
        const personagemDAO = new PersonagemDAO()
        
        const {
            nome,
            genero,
            tipo,
            totalcoin,
            start_latitude, 
            start_longitude,
            skins_id_skin,
            id
        } = req.body;
 
        console.log({nome, genero, tipo, totalcoin, start_latitude, start_longitude, skins_id_skin, id})
      
        if(id == req.params.id){
          const r =  await personagemDAO.atualizar(nome, genero, tipo, totalcoin, start_latitude, start_longitude, skins_id_skin, id)
          res.json({msg: "O total de linhas alteradas: "+r})
        }
        else{
          res.json({msg:"Problema."})
        }         
    })
 
    
}


  





