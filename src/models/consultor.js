import { pool } from '../database';

async function promesa(qr) {
  let [rows] = await pool.query(qr);
  return rows;
}

export async function consultas(qr) {
  try {
    const resultado = await promesa(qr);

    return resultado;
  } catch (err) {
    console.log(err);
  }
}
