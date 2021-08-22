require('dotenv').config();
const cors = require('cors');
const http = require('http');
const app = require('./app')

const host = process.env.HOST;
const port = process.env.PORT;
// app.use(cors({origin: 'http://localhost:3000'}));
const server =http.createServer(app)

server.listen(port,()=> {
    console.log(`server started on ${host}: ${port}`);
})