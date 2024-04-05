import { db } from './db';

export async function getData() {
  try {
    const data = await db.query('SELECT * FROM transaction'); // Name of the tabel here
    console.log(data.rows);
    return data.rows;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getTransactions() {
  const res = await db.query('SELECT * FROM transaction')
  return res.rows
}