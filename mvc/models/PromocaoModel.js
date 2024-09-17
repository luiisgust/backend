class Promocao{

    #id
    #nome
    #dt_start
    #dt_end
    #descr
    #ativa
    #id_descontos

    constructor(id, nome, dt_start, dt_end, descr, ativa, id_descontos, ){
        this.#id = id 
        this.#nome = nome
        this.#dt_start = dt_start
        this.#dt_end = dt_end
        this.#descr = descr
        this.#ativa = ativa
        this.#id_descontos = id_descontos
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

    get dt_start(){
        return this.#dt_start
    }
    set dt_start(value){
        this.#dt_start = value
    }

    get dt_end(){
        return this.#dt_end
    }
    set dt_end(value){
        this.#dt_end = value
    }

    get descr(){
        return this.#descr
    }
    set descr(value){
        this.#descr = value
    }

    get ativa(){
        return this.#ativa
    }
    set ativa(value){
        this.#ativa = value
    }

    get id_descontos(){
        return this.#id_descontos
    }
    set id_descontos(value){
        this.#id_descontos = value
    }

    toJson(){

        return {
            "id": this.#id,
            "nome": this.#nome,
            "dt_start": this.#dt_start,
            "dt_end": this.#dt_end,
            "descr": this.#descr,
            "ativa": this.#ativa,
            "id_descontos": this.#id_descontos,
        }
      
    }
    
}

module.exports = Promocao