const Login = require('../models/LoginModel');
const DatabaseMySQL = require('../../repository/DataBase')


class LoginDAO{

    #db

    constructor(){
        this.#db = new DatabaseMySQL()
    }

    async logar(email, senha){

        const login = new Login(email, senha)

        const query = await this.#db.selectLogin(login.email, login.senha)
       

        return login.permitirEntrada(query)
    }

    
}

module.exports = LoginDAO