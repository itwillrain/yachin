const { Nuxt, Builder } = require("nuxt")
const app = require('express')()
const openurl = require('openurl')
const config =require ('./nuxt.config')
const PORT = 3000
require('./server/initDB.js').then(()=> {
  console.log('db created')
  const api = require ('./server/api/index.js')

  app.use('/api', api)

  const nuxt = new Nuxt(config)
  app.use(nuxt.render)

  new Builder(nuxt).build()
  app.listen(PORT)

  if(config.dev) openurl.open(`http://localhost:${PORT}`)
})

