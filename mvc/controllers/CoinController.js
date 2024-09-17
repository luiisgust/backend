const CoinDAO = require('../DAO/CoinDAO.js')
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
const coinDAO = new CoinDAO();

const upload = multer({ storage })

module.exports = (app) => {


    // Todos os gets
    app.get("/coins", async (req, res) => {        
        const coinDAO = new CoinDAO()
        
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await coinDAO.consultarTodos())        
    })
        
    app.get("/coin", (req, res) => {
        res.render("Coin/listcoin")
    })

    app.get("/addcoin", (req, res) => {
        res.render("Coin/addcoin")
    })

    app.get("/altercoin/:id", async (req, res) =>{
        
        const coin = new CoinDAO()        
        const r = await coin.consultarUm(req.params.id)
        console.log(r)
        res.render('coin/altercoin', { r })
    })


    // Todos os post
    app.post('/registrarcoin', upload.single('filecoin'), async (req, res) => {
        console.log(req.file)
        try{
            const extensao = path.extname(req.file.originalname);
            const nomeArquivo = crypto.createHash('md5').update(req.file.originalname + Date.now().toString()).digest('hex') + extensao;

            const caminhoDestino = path.join(__dirname, '..', 'views', 'public', 'image', 'upload', nomeArquivo);

            await fs.rename(req.file.path, caminhoDestino);

            console.log('Upload Bem-Sucedido')

            console.log(req.body)
            const {
                txtnamecoin: nome, 
                txtvaluecoin: value} = req.body;

            res.setHeader("Access-Control-Allow-Origin","*")
 
            let status;

            
                status = await coinDAO.registrarcoin(nome, value, nomeArquivo)
            
             

        
            res.redirect("/coin")
        }catch(error){
            console.error(error);
            res.status(500).send('Erro ao realizar upload');
        }

    })


    // Delete
    app.delete("/coin/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        const coinDAO = new CoinDAO()

        const status = await coinDAO.apagar(req.params.id)

        res.json({
            status
        })
    })


    // Update
    app.put("/coin/:id", async (req, res) =>{
        const coinDAO = new CoinDAO()
        
        const {
            nome,
            value,
            image,
            id
        } = req.body;

        console.log({nome, value, image, id})
      
        if(id == req.params.id){
          const r =  await coinDAO.atualizar(nome, value, image, id)
          res.json({msg: "O total de linhas alteradas: "+r})
        }
        else{
          res.json({msg:"Problema."})
        }         
    })
 
    
}


  





