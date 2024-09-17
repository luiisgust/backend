const Atrativo = require('../models/AtratModel');
const DatabaseMySQL = require('../../repository/DataBase')

class AtratDAO{

    #db

    constructor(){
        this.#db = new DatabaseMySQL()
    }

    async consultarTodos(){

        let list_atrat = []

        const query = await this.#db.selectAtrat()

        for (let index = 0; index < query.length; index++) {

            const atrat = new Atrativo()

            atrat.id = query[index].id_atrativo
            atrat.nome = query[index].nome_atrativo
            atrat.latitude = query[index].lat_atrativo
            atrat.longitude = query[index].long_atrativo
            atrat.descricao = query[index].desc_atrativo
            atrat.imagem = query[index].image_atrativo

            list_atrat.push(atrat.toJson())     
        }


       
        return list_atrat
    }

    async consultarUm(id){      

        const query = await this.#db.selectAtrativoId(id)

        
        const atrativo = new Atrativo()

        if(query){
            atrativo.id = query[0].id_atrativo
            atrativo.nome = query[0].nome_atrativo
            atrativo.latitude = query[0].lat_atrativo
            atrativo.longitude = query[0].long_atrativo
            atrativo.descricao = query[0].desc_atrativo
            atrativo.imagem = query[0].image_atrativo
        }

 
        return atrativo.toJson()
    }

    async registraratrativo(
        nome, 
        latitude,
        longitude,
        arquivo,
        descricao){

         
            const atrativo = new Atrativo(nome, latitude, longitude);

            atrativo.imagem = arquivo,
            atrativo.descricao = descricao

            const sql = await this.#db.AddAtrativo(atrativo.toJson())

            return sql.insertId;
        }

    async apagar(id){
        const linhasAfetadas =  await this.#db.deleteAtrativo(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(nome, latitude, longitude, descricao, imagem, id){
        const atrativo = new Atrativo(nome, latitude, longitude, descricao, imagem)
        atrativo.id = id

        const r = await this.#db.updateAtrativo(
            atrativo.nome,
            atrativo.latitude,
            atrativo.longitude,
            atrativo.descricao,
            atrativo.imagem,
            atrativo.id
        )

        return r.affectedRows;
    }

}


module.exports = AtratDAO