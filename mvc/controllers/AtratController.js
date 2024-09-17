const AtratDAO = require('../DAO/AtratDAO.js')
const path = require('path')
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs').promises;

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname, '..', 'views', 'public', 'image', 'upload'))
    },
    filename: function(req, file, cb){
        const extensao = path.extname(file.originalname);
        const nomeArquivo = crypto.createHash('md5').update(file.originalname + Date.now().toString()).digest('hex') + extensao
        cb(null, nomeArquivo)
    },
});
const atratDAO = new AtratDAO();
const upload = multer({ storage: storage });

module.exports = (app) => {


    // Todos os gets
    app.get("/Atrativo", async (req, res) => {        
        const atratDAO = new AtratDAO()
        
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await atratDAO.consultarTodos())        
    })
         
    app.get("/atrativos", (req, res) => {
        res.render("Atrativos/listatrativos", {})
    })

    app.get("/addatrativos", (req, res) => {
        res.render("Atrativos/addatrativos")
    })

    app.get("/alteratrativo/:id", async (req, res) =>{
        
        const atrativo = new AtratDAO()        
        const r = await atrativo.consultarUm(req.params.id)
        console.log(r)
        res.render('atrativos/alteratrativos', { r })
    })


    // Todos os post
    app.post('/registraratrativo', upload.single('fileatrat'), async (req, res) => {
        console.log(req)
        try{
            const extensao = path.extname(req.file.originalname);
            const nomeArquivo = crypto.createHash('md5').update(req.file.originalname + Date.now().toString()).digest('hex') + extensao;

            const caminhoDestino = path.join(__dirname, '..', 'views', 'public', 'image', 'upload', nomeArquivo);

            await fs.rename(req.file.path, caminhoDestino);

            console.log('Upload Bem-Sucedido')

            console.log(req.body)
            const { 
            id: id,
            txtnameatrat: nome, 
            txtlatatrat: latitude,
            txtlongatrat: longitude,
            txtdescatrat: descricao  } = req.body;

            res.setHeader("Access-Control-Allow-Origin","*")
                
            let status;

            if(!id){
                status = await atratDAO.registraratrativo(nome, latitude, longitude, nomeArquivo, descricao)
            }
            else{
                status = await atratDAO.atualizar(id, nome, nomeArquivo, latitude, longitude, descricao)
            }   
       
            res.redirect("/atrativos")
            
            }catch(error){
                console.error(error);
                res.status(500).send('Erro ao realizar upload');
            } 
    })


    // Delete
    app.delete("/atrativo/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        const atrativoDAO = new AtratDAO()

        const status = await atrativoDAO.apagar(req.params.id)

        res.json({
            status
        })
    })


    // Update
    app.put("/atrativos/:id", async (req, res) =>{
        const atrativoDAO = new AtratDAO()
        
        const {
            nome,
            descricao,
            lat,
            long,
            image,
            id
        } = req.body;

        console.log({nome, descricao, lat, long, image, id})
      
        if(id == req.params.id){
          const r =  await atrativoDAO.atualizar(nome, lat, long, image, descricao, id)
          res.json({msg: "O total de linhas alteradas: "+r})
        }
        else{
          res.json({msg:"Problema."})
        }         
    })

     
}








