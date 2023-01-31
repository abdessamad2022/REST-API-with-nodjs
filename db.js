const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host: "127.0.0.1",
    database:"students",
    password:"Pgsq1p@ssword",
    port: 5432,
});
module.exports = pool;

 