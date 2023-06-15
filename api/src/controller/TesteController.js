const conn = require('../db/db')

module.exports = {
    getAll: async () => {
        const query = 'SELECT * FROM teste';

        const [teste] = await conn.execute(query);

        return teste;
    } 

}