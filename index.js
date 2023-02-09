const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults()
const data=require('./data/db.json')
const PORT = process.env.PORT||5000
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/auth', (req, res) => {
  let name=req.body.name
  if( data.profile.name===name && data.profile.pass===req.body.pass)
  {
    res.send({login:true,
    data:data.posts,
    table:data.student
  })
  }
  else
  {
    res.send({login:false,data:{}})
  }
  
})


server.use(router)

// Use default router

server.listen(PORT, () => {
  console.log('JSON Server is running')
})