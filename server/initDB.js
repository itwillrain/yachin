const dbInit = require('db-migrate').getInstance(true,{
    env: 'init'
})
const db = require('db-migrate').getInstance(true,{
    env: 'dev'
})
module.exports = new Promise(async (resolve) => {
    await dbInit.createDatabase(process.env.MYSQL_DATABASE)
    await db.up()
    resolve()
})