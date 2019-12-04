const db = require('../config/database')

module.exports = {
    Query: {
        async getUsers(_, {id}){  // '_' -> ignora o primeiro parametro que é um objeto
            //return await db('users').where({id: id}) //{atributo: paramatro}
            return await db('users').where({id}).first()
        },
        //async getUsers(_, {offset, limit }) //delimitar quantidade de retornos
        async getUsers(){
            return await db('users')
        }
    },
    Mutation: {
        async createUser (_, {input}) {
            const result = await db('users').insert({ //await fica esperando resultado
                name: input.name,
                email: input.email,
                password: input.password,
            })

            //pegar retorno
            const id = result[0]
            return await db('users').where({id}).first()
        }
    }
}