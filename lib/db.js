import mysql from 'serverless-mysql';

const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.local')

require('dotenv').config({ path: envPath });

export const db = mysql({
	config: {
		host: process.env.MYSQL_HOST,
		database: process.env.MYSQL_DATABASE,
		user: process.env.MYSQL_USERNAME,
		password: process.env.MYSQL_PASSWORD
	}
})

export default async function sql_query(query_string, value = []) {
	try {
		const result = await db.query(query_string, value);
		await db.end();
		return result;
	} catch (e) {
		throw Error(e.message);
	}
}