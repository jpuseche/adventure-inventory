import pg from "pg";
const Pool = pg.Pool;
import {v4 as uuid} from "uuid";

const pool = new Pool({
  user: 'wawandco',
  host: 'localhost',
  database: 'adventure_inventory',
  password: 'root',
  port: 5432,
});

const createTool = (body) => {
    console.log("modelo");
    return new Promise(function(resolve, reject) {
        const { name } = body
        pool.query("INSERT INTO tool (id, name) VALUES ($1, $2) RETURNING *", [uuid(), name], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new tool has been added: ${results.rows[0]}`)
        })
    })
}

export default createTool;