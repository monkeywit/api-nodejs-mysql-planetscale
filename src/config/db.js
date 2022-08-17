import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection(process.env.DATABASE_URL);

export default connection.promise();
