const Skin = require('../models/SkinModel')
const DatabaseMySQL = require('../../repository/DataBase')

class SkinDAO{

    #db

    constructor(){
        this.#db = new DatabaseMySQL()
    }

    async consultarTodos(){

        let list_skin = []

        const query = await this.#db.selectSkin()

        for (let index = 0; index < query.length; index++) {

            const skin = new Skin()

            skin.id = query[index].id_skin
            skin.categoria = query[index].categoria_skin
            skin.nome = query[index].nome_skin
            skin.desc = query[index].descr_skin
            skin.genero = query[index].genero_skin
            skin.valor = query[index].valor_skin
            skin.raridade = query[index].raridade_skin
            skin.foto1 = query[index].foto1_skin
            skin.foto2 = query[index].foto2_skin
            skin.id_promocoes = query[index].promocoes_id_promocoes

            list_skin.push(skin.toJson())     
        }
       
        return list_skin
    }


    async consultarUm(id){      

        const query = await this.#db.selectSkinId(id)

        
        const skin = new Skin()

        if(query){
            skin.id = query[index].id_skin
            skin.categoria = query[index].categoria_skin
            skin.nome = query[index].nome_skin
            skin.desc = query[index].descr_skin
            skin.genero = query[index].genero_skin
            skin.valor = query[index].valor_skin
            skin.raridade = query[index].raridade_skin
            skin.foto1 = query[index].foto1_skin
            skin.foto2 = query[index].foto2_skin
            skin.id_promocoes = query[index].promocoes_id_promocoes
        }

 
        return skin.toJson()
    }

    async registrarskin(
        categoria,
        nome,
        desc,
        genero,
        valor,
        raridade,
        foto1,
        foto2,
        id_promocoes){

         
            const skin = new Skin(categoria, nome, desc, genero, valor, raridade, id_promocoes);

            skin.foto1 = foto1
            skin.foto2 = foto2

            const sql = await this.#db.AddSkin(skin.toJson())

            return sql.insertId;
        }

    async apagar(id){
        const linhasAfetadas =  await this.#db.deleteSkin(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(categoria, nome, desc, genero, valor, raridade, foto1, foto2, id_promocoes, id){
        const skin = new Skin(categoria, nome, desc, genero, valor, raridade, foto1, foto2, id_promocoes)
        skin.id = id

        const r = await this.#db.updateSkin(
            skin.categoria,
            skin.nome,
            skin.desc,
            skin.genero,
            skin.valor,
            skin.raridade,
            skin.foto1,
            skin.foto2,
            skin.id_promocoes,
            skin.id
        )

        return r.affectedRows;
    }

}

module.exports = SkinDAO