const Gamer = require('../models/GamerModel');
const DatabaseMySQL = require('../../repository/DataBase')

class GamerDAO{

    #db

    constructor(){
        this.#db = new DatabaseMySQL()
    }

    async consultarTodos(){

        let list_gamer = []

        const query = await this.#db.selectGamer()

        for (let index = 0; index < query.length; index++) {

            const gamer = new Gamer()

            gamer.id = query[index].id_gamers
            gamer.nome = query[index].nome_gamer
            gamer.senha = query[index].senha_gamer
            gamer.email = query[index].email_gamer
            gamer.dtnasc = query[index].dtnasc_gamer
            gamer.personagens_id_personagem = query[index].personagens_id_personagem
            gamer.coins_id_coin = query[index].coins_id_coin

            list_gamer.push(gamer.toJson())     
        }


       
        return list_gamer
    }

    async consultarUm(id){      

        const query = await this.#db.selectGamerId(id)

        
        const gamer = new Gamer()

        if(query){
            gamer.id = query[index].id_gamers
            gamer.nome = query[index].nome_gamer
            gamer.senha = query[index].senha_gamer
            gamer.email = query[index].email_gamer
            gamer.dtnasc = query[index].dtnasc_gamer
            gamer.personagens_id_personagem = query[index].personagens_id_personagem
            gamer.coins_id_coin = query[index].coins_id_coin
        }

 
        return gamer.toJson()
    }

    async registrargamer(
        nome,
        senha,
        email,
        dtnasc,
        personagens_id_personagem,
        coins_id_coin){

         
            const gamer = new Gamer(nome, senha, email, dtnasc, personagens_id_personagem, coins_id_coin);

            const sql = await this.#db.AddGamer(gamer.toJson())

            return sql.insertId;
        }

    async apagar(id){
        const linhasAfetadas =  await this.#db.deleteGamer(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(nome, senha, email, dtnasc, personagens_id_personagem, coins_id_coin, id){
        const gamer = new Gamer(nome, senha, email, dtnasc, personagens_id_personagem, coins_id_coin)
        gamer.id = id

        const r = await this.#db.updateGamer(
            gamer.nome,     
            gamer.senha,
            gamer.email,
            gamer.dtnasc,
            gamer.personagens_id_personagem,
            gamer.coins_id_coin,
            gamer.id
        )

        return r.affectedRows;
    }

}


module.exports = GamerDAO