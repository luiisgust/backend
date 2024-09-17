class Gamer{

    #id
    #nome
    #senha
    #email
    #dtnasc
    #personagens_id_personagem
    #coins_id_coin

    constructor( nome, senha, email, dtnasc, personagens_id_personagem, coins_id_coin){
        this.#nome = nome
        this.#senha = senha
        this.#email = email
        this.#dtnasc = dtnasc
        this.#personagens_id_personagem = personagens_id_personagem
        this.#coins_id_coin = coins_id_coin
    }
 
    get id(){
        return this.#id
    }
    set id(value){
        this.#id = value
    }

    get nome(){
        return this.#nome
    }
    set nome(value){
        this.#nome = value
    }
    
    get senha(){
        return this.#senha
    }
    set senha(value){
        this.#senha = value
    }
    
    get email(){
        return this.#email
    }
    set email(value){
        this.#email = value
    }

    get dtnasc(){
        return this.#dtnasc
    }
    set dtnasc(value){
        this.#dtnasc = value
    }

    get personagens_id_personagem(){
        return this.#personagens_id_personagem
    }
    set personagens_id_personagem(value){
        this.#personagens_id_personagem = value
    }

    get coins_id_coin(){
        return this.#coins_id_coin
    }
    set coins_id_coin(value){
        this.#coins_id_coin = value
    }

    toJson(){

        return {
            "id": this.#id,
            "nome": this.#nome,
            "senha": this.#senha,
            "email": this.#email,
            "dtnasc": this.#dtnasc,
            "personagens_id_personagem": this.#personagens_id_personagem,
            "coins_id_coin": this.#coins_id_coin
        }
      
    }
    
}

module.exports = Gamer