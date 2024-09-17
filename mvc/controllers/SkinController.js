const SkinDAO = require('../DAO/SkinDAO.js')
const path = require('path')

module.exports = (app) => {


    // Todos os gets
    app.get("/Skins", async (req, res) => {        
        const skinDAO = new SkinDAO()
        
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await skinDAO.consultarTodos())        
    })
        
    app.get("/skin", (req, res) => {
        res.render("Skin/listskin")
    })

    app.get("/addskin", (req, res) => {
        res.render("Skin/addskin")
    })

    app.get("/alterskin/:id", async (req, res) =>{
        
        const skin = new SkinDAO()        
        const r = await skin.consultarUm(req.params.id)
        console.log(r)
        res.render('Skin/alterskin', { r })
    })
 
   
    // Todos os post
    app.post('/registrarskin', async (req, res) => {
        
  
       // console.log(req.body.txtskins)
        const skinDAO = new SkinDAO();
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
console.log(skins_id_skin)
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


  





