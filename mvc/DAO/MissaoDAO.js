const Missao = require('../models/MissaoModel');
const DatabaseMySQL = require('../../repository/DataBase')

class MissaoDAO{

    #db

    constructor(){
        this.#db = new DatabaseMySQL()
    }

    async consultarTodos(){

        let list_missao = []

        const query = await this.#db.selectMissao()

        for (let index = 0; index < query.length; index++) {

            const missao = new Missao()

            missao.id = query[index].id_missao
            missao.nome = query[index].nome_missao
            missao.desc = query[index].desc_missao
            missao.recompensa = query[index].recompensa_missao

            list_missao.push(missao.toJson())     
        }


       
        return list_missao
    }

    async consultarUm(id){      

        const query = await this.#db.selectMissaoId(id)

        
        const missao = new Missao()

        if(query){
            missao.id = query[0].id_missao
            missao.nome = query[0].nome_missao
            missao.desc = query[0].desc_missao
            missao.recompensa = query[0].recompensa_missao
        }

 
        return missao.toJson()
    }

    async registrarmissao(
        nome, 
        desc,
        recompensa){

         
            const missao = new Missao(nome, desc, recompensa);

            const sql = await this.#db.AddMissao(missao.toJson())

            return sql.insertId;
        }

    async apagar(id){
        const linhasAfetadas =  await this.#db.deleteMissao(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(nome, desc, recompensa, id){
        const missao = new Missao(nome, desc, recompensa)
        missao.id = id

        const r = await this.#db.updateMissao(
            missao.nome,
            missao.desc,
            missao.recompensa,
            missao.id
        )

        return r.affectedRows;
    }

}


module.exports = MissaoDAO