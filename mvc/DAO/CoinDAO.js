const Coin = require('../models/CoinModel');
const DatabaseMySQL = require('../../repository/DataBase')

class CoinDAO{

    #db

    constructor(){
        this.#db = new DatabaseMySQL()
    }

    async consultarTodos(){

        let list_coin = []

        const query = await this.#db.selectCoin()

        for (let index = 0; index < query.length; index++) {

            const coin = new Coin()

            coin.id = query[index].id_coin
            coin.nome = query[index].nome_coin
            coin.value = query[index].value_coin
            coin.image = query[index].image_coin

            list_coin.push(coin.toJson())     
        }


       
        return list_coin
    }

    async consultarUm(id){      

        const query = await this.#db.selectCoinId(id)

        
        const coin = new Coin()

        if(query){
            coin.id = query[0].id_coin
            coin.nome = query[0].nome_coin
            coin.value = query[0].value_coin
            coin.image = query[0].image_coin
        }

 
        return coin.toJson()
    }

    async registrarcoin(
        nome, 
        value,
        image){

         
            const coin = new Coin(nome, value);

            coin.image = image

            const sql = await this.#db.AddCoin(coin.toJson())

            return sql.insertId;
        }

    async apagar(id){
        const linhasAfetadas =  await this.#db.deleteCoin(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(nome, value, image, id){
        const coin = new Coin(nome, value, image)
        coin.id = id

        const r = await this.#db.updateCoin(
            coin.nome,
            coin.value,
            coin.image,
            coin.id
        )

        return r.affectedRows;
    }

}


module.exports = CoinDAO