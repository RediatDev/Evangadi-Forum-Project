import mysql from "mysql2";
import  dotenv from "dotenv";
dotenv.config();

let connectionInfo = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit :20
});



export default connectionInfo