const Promocao = require('../models/PromocaoModel')
const DatabaseMySQL = require('../../repository/DataBase')

class PromocaoDAO{

    #db

    constructor(){
        this.#db = DatabaseMySQL()
    }

    async consultarTodos(){

        let list_promocao = []

        const query = await this.#db.selectPromocao()

        for (let index = 0; index < query.length; index++) {

            const promocao = new Promocao()

            promocao.id = query[index].id_promocoes
            promocao.nome = query[index].nome_promocao
            promocao.dt_start = query[index].dt_start_promocao
            promocao.dt_end = query[index].dt_end_promocao
            promocao.descr = query[index].descr_promocao
            promocao.ativa = query[index].ativa_promocao
            promocao.id_descontos = query[index].descontos_id_descontos

            list_promocao.push(promocao.toJson())     
        }
       
        return list_promocao
    }

}


module.exports = PromocaoDAO