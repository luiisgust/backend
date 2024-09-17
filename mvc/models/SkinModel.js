class Skin{

    #id
    #categoria
    #nome
    #desc
    #genero
    #valor
    #raridade
    #foto1
    #foto2
    #id_promocoes

    constructor(categoria, nome, desc, genero, valor, raridade, foto1, foto2, id_promocoes){
        this.#categoria = categoria
        this.#nome = nome
        this.#desc = desc
        this.#genero = genero
        this.#valor = valor
        this.#raridade = raridade
        this.#foto1 = foto1
        this.#foto2 = foto2
        this.#id_promocoes = id_promocoes
    }

    get id(){
        return this.#id
    }
    set id(value){
        this.#id = value
    }

    get categoria(){
        return this.#categoria
    }
    set categoria(value){
        this.#categoria = value
    }

    get nome(){
        return this.#nome
    }
    set nome(value){
        this.#nome = value
    }

    get desc(){
        return this.#desc
    }
    set desc(value){
        this.#desc = value
    }

    get genero(){
        return this.#genero
    }
    set genero(value){
        this.#genero = value
    }

    get valor(){
        return this.#valor
    }
    set valor(value){
        this.#valor = value
    }

    get raridade(){
        return this.#raridade
    }
    set raridade(value){
        this.#raridade = value
    }

    get foto1(){
        return this.#foto1
    }
    set foto1(value){
        this.#foto1 = value
    }
    
    get foto2(){
        return this.#foto2
    }
    set foto2(value){
        this.#foto2 = value
    }
    
    get id_promocoes(){
        return this.#id_promocoes
    }
    set id_promocoes(value){
        this.#id_promocoes = value
    }

    toJson(){

        return {
            "id": this.#id,
            "categoria": this.#categoria,
            "nome": this.#nome,
            "desc": this.#desc,
            "genero": this.#genero,
            "valor": this.#valor,
            "raridade": this.#raridade,
            "foto1": this.#foto1,
            "foto2": this.#foto2,
            "id_promocoes": this.#id_promocoes,
        }
      
    }
    
}

module.exports = Skin