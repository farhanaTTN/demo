import pkg from "pg"
// import {port} from "pg"
import config from "../../config/index.js"
// import { query } from "express";
import utils from "util"

const {Pool} = pkg;


const sql_pool = new Pool({
        user : config.dbUser,
        database : config.dataBase,
        password:config.dbPassword,
        dbPort:config.dbPort,
        max: config.max,
        idleTimeoutMillies :config.idleTimeoutMillies,
        connectionTimeOutMillis : config.connectionTimeOutMillis
})
const pool = {
    query :(sql,args)=>
    {
        return utils.promisify(sql_pool.query).call(sql_pool,sql,args)
    }
}
export default pool;