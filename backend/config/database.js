const mysql = require('mysql')

const getConnection = function () {
    const configuracao = {
        host : 'localhost',
        user : 'root',
        password : '123',
        database : 'dashboard_adminlte'
    }

    return mysql.createConnection(configuracao)
}

module.exports = { getConnection }

/*const mongoose = require('mongoose')
//const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/dashboard')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."*/