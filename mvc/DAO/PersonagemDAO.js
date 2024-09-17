const Personagem = require('../models/PersonagemModel');
const DatabaseMySQL = require('../../repository/DataBase')

class PersonagemDAO{

    #db

    constructor(){
        this.#db = new DatabaseMySQL()
    }

    async consultarTodos(){

        let list_personagem = []

        const query = await this.#db.selectPersonagem()

        for (let index = 0; index < query.length; index++) {

            const personagem = new Personagem()

            personagem.id = query[index].id_personagem
            personagem.nome = query[index].nome_personagem
            personagem.genero = query[index].genero_personagem
            personagem.tipo = query[index].tipo_personagem
            personagem.totalcoin = query[index].totalcoin_personagem
            personagem.start_latitude = query[index].start_latitude
            personagem.start_longitude = query[index].start_longitude
            personagem.skins_id_skin = query[index].skins_id_skin

            list_personagem.push(personagem.toJson())     
        }


       
        return list_personagem
    }

    async consultarUm(id){      

        const query = await this.#db.selectPersonagemId(id)

        
        const personagem = new Personagem()

        if(query){
            personagem.id = query[index].id_personagem
            personagem.nome = query[index].nome_personagem
            personagem.genero = query[index].genero_personagem
            personagem.tipo = query[index].tipo_personagem
            personagem.totalcoin = query[index].totalcoin_personagem
            personagem.start_latitude = query[index].start_latitude
            personagem.start_longitude = query[index].start_longitude
            personagem.skins_id_skin = query[index].skins_id_skin
        }

 
        return personagem.toJson()
    }

    async registrarpersonagem(

        nome, 
        genero,
        tipo,
        totalcoin,
        start_latitude,
        start_longitude,
        skins_id_skin
        ){
           
          

         
            const personagem = new Personagem(nome, genero, tipo, totalcoin, start_latitude, start_longitude, skins_id_skin);

            // console.log(">>>\n\n\n"+ personagem.skins_id_skin)

            const sql = await this.#db.AddPersonagem(personagem.toJson())
            
            return sql.insertId;
        }

    async apagar(id){
        const linhasAfetadas =  await this.#db.deletePersonagem(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(nome, genero, tipo,totalcoin, start_latitude, start_longitude, skins_id_skin, id){
        const personagem = new Personagem(nome, genero, tipo, totalcoin, start_latitude, start_longitude, skins_id_skin)
        personagem.id = id

        const r = await this.#db.updatePersonagem(
            personagem.nome,
            personagem.genero,
            personagem.tipo,
            personagem.totalcoin,
            personagem.start_latitude,
            personagem.start_longitude,
            personagem.skins_id_skin,
            personagem.id
        )

        return r.affectedRows;
    }

}


module.exports = PersonagemDAO