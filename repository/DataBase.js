var mysql = require('mysql2');

class DatabaseMySQL {

  #connection

  constructor() {
    this.#connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'bdgp'
    }).promise();
  }

  async selectAtrat() {
    const query = await this.#connection.query('select * from atrativos')
    return query[0]
  }
  async selectAtrativoId(id) {
    const query = await this.#connection.query('select * from atrativos where id_atrativo =' + id)
    return query[0]
  }
  async AddAtrativo(param) {
    const sql = `insert into atrativos (nome_atrativo, lat_atrativo, long_atrativo, desc_atrativo, image_atrativo)
   values ('${param.nome}','${param.latitude}','${param.longitude}','${param.descricao}','${param.imagem}')`

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async deleteAtrativo(id) {
    const sql = 'delete from atrativos where id_atrativo =' + id

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async updateAtrativo(nome, lat, long, image, desc, id) {
    const sql = `update atrativos 
    set nome_atrativo = "${nome}",
        lat_atrativo = "${lat}",
        long_atrativo = "${long}",
        image_atrativo = "${image}",
        desc_atrativo = "${desc}"
        where id_atrativo = ${id}
  `
    console.log(sql)
    const r = await this.#connection.execute(sql)
    return r[0]
  }


  async selectCoin() {
    const query = await this.#connection.query('select * from coins')
    return query[0]
  }
  async selectCoinId(id) {
    const query = await this.#connection.query('select * from coins where id_coin =' + id)
    return query[0]
  }
  async AddCoin(param) {
    const sql = `insert into coins (nome_coin, value_coin, image_coin)
   values ('${param.nome}','${param.value}','${param.image}')`

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async deleteCoin(id) {
    const sql = 'delete from coins where id_coin =' + id

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async updateCoin(nome, value, image, id) {
    const sql = `update coins 
    set nome_coin = "${nome}",
        value_coin = "${value}",
        image_coin = "${image}"
        where id_coin = ${id}`

    console.log(sql)
    const r = await this.#connection.execute(sql)
    return r[0]
  }


  async selectMissao() {
    const query = await this.#connection.query('select * from missoes')
    return query[0]
  }
  async selectMissaoId(id) {
    const query = await this.#connection.query('select * from missoes where id_missao =' + id)
    return query[0]
  }
  async AddMissao(param) {
    const sql = `insert into missoes (nome_missao, desc_missao, recompensa_missao)
   values ('${param.nome}','${param.desc}','${param.recompensa}')`

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async deleteMissao(id) {
    const sql = 'delete from missoes where id_missao =' + id

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async updateMissao(nome, desc, recompensa, id) {
    const sql = `update missoes 
    set nome_missao = "${nome}",
        desc_missao = "${desc}",
        recompensa_missao = "${recompensa}"
        where id_missao = ${id}`

    console.log(sql)
    const r = await this.#connection.execute(sql)
    return r[0]
  }


  async selectPersonagem() {
    const query = await this.#connection.query('select * from personagens')
    return query[0]
  }
  async selectPersonagemId(id) {
    const query = await this.#connection.query('select * from personagens where id_personagem =' + id)
    return query[0]
  }
  async AddPersonagem(param) {


    const sql = `insert into personagens values (null , '${param.nome}','${param.genero}','${param.tipo}', '${param.totalcoin}', '${param.start_latitude}', '${param.start_longitude}', '${param.skins_id_skin}')`

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async deletePersonagem(id) {
    const sql = 'delete from personagens where id_personagem =' + id

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async updatePersonagem(nome, genero, tipo, totalcoin, start_latitude, start_longitude, skins_id_skin, id) {
    const sql = `update personagens 
    set nome_personagem = "${nome}",
        genero_personagem = "${genero}",
        tipo_personagem = "${tipo}",
        totalcoin_personagem = "${totalcoin}",
        start_latitude = "${start_latitude}",
        start_longitude = "${start_longitude}",
        skins_id_skin = "${skins_id_skin}"
          where id_personagem = ${id}`

    console.log(sql)
    const r = await this.#connection.execute(sql)
    return r[0]
  }


  async selectSkin() {
    const query = await this.#connection.query('select * from skins')
    return query[0]
  }

  async selectSkinId(id) {
    const query = await this.#connection.query('select * from skins where id_skin =' + id)
    return query[0]
  }
  async AddSkin(param) {
    const sql = `insert into skins values (null ,'${param.categoria}', '${param.nome}','${param.desc}','${param.genero}','${param.valor}', '${param.raridade}', '${param.foto1}', '${param.foto2}', '${param.promocoes_id_promocao}')`

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async deleteSkin(id) {
    const sql = 'delete from skins where id_skin =' + id

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async updateSkin(categoria, nome, desc, genero, valor, raridade, foto1, foto2, promocoes_id_promocao, id) {
    const sql = `update skins 
    set categoria_skin = "${categoria}",
        nome_skin = "${nome}",
        desc_skin = "${desc}",
        genero_skin = "${genero}",
        valor_skin = "${valor}",
        raridade_skin = "${raridade}",
        foto1_skin = "${foto1}",
        foto2_skin = "${foto2}",
        promocoes_id_promocao = "${id_promocoes}"
        where id_skin = ${id}`

    console.log(sql)
    const r = await this.#connection.execute(sql)
    return r[0]
  }


  async selectGamer() {
    const query = await this.#connection.query('select * from gamers')
    return query[0]
  }
  async selectGamerId(id) {
    const query = await this.#connection.query('select * from gamers where id_gamers =' + id)
    return query[0]
  }
  async AddGamer(param) {
    const sql = `insert into gamers values (null ,'${param.nome}','${param.senha}','${param.email}','${param.dtnasc}','${param.personagens_id_personagem}', '${param.coins_id_coin}')`

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async deleteGamer(id) {
    const sql = 'delete from gamers where id_gamers =' + id

    const query = await this.#connection.execute(sql)
    return query[0]
  }
  async updateGamer(nome, senha, email, dtnasc, personagens_id_personagem, coins_id_coin, id) {
    const sql = `update gamers 
    set nome_gamer = "${nome}",
        senha_gamer = "${senha}",
        email_gamer = "${email}",
        dtnasc_gamer = "${dtnasc}",
        personagens_id_personagem = "${personagens_id_personagem}",
        coins_id_coin = "${coins_id_coin}"
        where id_skin = ${id}`

    console.log(sql)
    const r = await this.#connection.execute(sql)
    return r[0]
  }


  async selectPromocao() {
    const query = await this.#connection.query('select * from promocoes')
    return query[0]
  }



  async selectLogin(email, senha) {
    const query = await this.#connection.query(`select * from gamers where email_gamer = '${email}' and senha_gamer = '${senha}'`)
    return query[0]
  }


}

module.exports = DatabaseMySQL

