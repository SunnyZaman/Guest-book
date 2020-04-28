const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if(req.method === 'POST'){
        const now = new Date();
        req.body.submitted = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }
    next()
})
server.use(router)
server.listen(5200, () => {
  console.log('JSON Server is running')
})