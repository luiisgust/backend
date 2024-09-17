class Login{

    #id
    #email
    #senha

    constructor(email, senha){ 
        this.#email = email
        this.#senha = senha
    }

    get id(){
        return this.#id
    }
    set id(value){
        this.#id = value
    }

    get email(){
        return this.#email
    }
    set email(value){
        this.#email = value
    }
    
    get senha(){
        return this.#senha
    }
    set senha(value){
        this.#senha = value
    }

    permitirEntrada(dados){
        if(dados.length > 0){
            return true
        }
        else{
            return false
        }
    }

    

    toJson(){

        return {
            "id": this.#id,
            "email": this.#email,
            "senha": this.#senha
        }
      
    }
    
}

module.exports = Login