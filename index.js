
import express from "express"
import http from "http"
import passport from "passport"
import config from "./config/index.js"
import api from "./api/index.js"

const app = express();
const port = config.port;

// app.use(passport.initialize())
// app.use(passport.session())
app.use("/api",api)

const server = http.createServer(app)

server.listen(port,()=>
{
    console.log(`http://localhost:${port}`)
})