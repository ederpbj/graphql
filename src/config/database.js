const knexfile = require('../knexfile')

//Instanciar o kenex
const knex = require('knex')(knexfile)
module.exports = knex

/* knex('users').insert({
    name: 'Teste',
    email: 'teste@email.com.br',
    password: 'teste'
}).then(data => console.log(data)) */

//Select, knex('users'), todas as consultas retornam mesmo resultado
//knex('users').select('*').then(resultado => console.log(resultado))
//knex('users').first().then(resultado => console.log(resultado))
//knex('users').then(resultado => console.log(resultado))
knex('users').where({id: 1}).then(resultado => console.log(resultado))