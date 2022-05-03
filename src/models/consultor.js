import { pool } from '../database';

async function promesa(qr) {
  let [rows] = await pool.query(qr);
  return rows;
}

export async function consultas(qr) {
  const resultado = await promesa(qr)
    .then((resultado) => {
      return resultado;
    })
    .catch((err) => {
      console.log(err);
    });
  return resultado;
}
