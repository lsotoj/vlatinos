import { Client } from 'pg';

const client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: 'virtual_latinos',
	password: 'root',
	port: 5432
});

// client.connect();

// // Ejecuta una consulta SQL
// client.query('SELECT * FROM fuits', (err, res) => {
// 	if (err) throw err;
// 	console.log(res.rows);
// 	client.end();
// });

// export const connectToDB = async () => await client.connect();
export { client };
