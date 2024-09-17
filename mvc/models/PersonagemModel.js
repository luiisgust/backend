class Personagem{

    #id
    #nome
    #genero
    #tipo
    #totalcoin
    #start_latitude
    #start_longitude
    #skins_id_skin

    constructor( nome, genero, tipo, totalcoin, start_latitude, start_longitude, skins_id_skin){
        this.#nome = nome
        this.#genero = genero
        this.#tipo = tipo
        this.#totalcoin = totalcoin
        this.#start_latitude = start_latitude
        this.#start_longitude = start_longitude
        this.#skins_id_skin = skins_id_skin
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

    get genero(){
        return this.#genero
    }
    set genero(value){
        this.#genero = value
    }

    get tipo(){
        return this.#tipo
    }
    set tipo(value){
        this.#tipo = value
    }

    get totalcoin(){
        return this.#totalcoin
    }
    set totalcoin(value){
        this.#totalcoin = value
    }

    get start_latitude(){
        return this.#start_latitude
    }
    set start_latitude(value){
        this.#start_latitude = value
    }

    get start_longitude(){
        return this.#start_longitude
    }
    set start_longitude(value){
        this.#start_longitude = value
    }

    get skins_id_skin(){
        return this.#skins_id_skin
    }
    set skins_id_skin(value){
        this.#skins_id_skin = value
    }

    toJson(){

        return {
            "id": this.#id,
            "nome": this.#nome,
            "genero": this.#genero,
            "tipo": this.#tipo,
            "totalcoin": this.#totalcoin,
            "start_latitude": this.#start_latitude,
            "start_longitude": this.#start_longitude,
            "skins_id_skin": this.#skins_id_skin
        }
      
    }
    
}

module.exports = Personagem