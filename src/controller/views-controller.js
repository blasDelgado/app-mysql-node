import { consultas } from '../models/consultor.js';

export const inicioVista = (req, res) => {
  res.json({ boton: 'Platos url Reservas url' });
};
export const platosVista = async (req, res) => {
  const resultado = await consultas('SELECT * FROM platillos');
  res.json(resultado);
};
export const reservasVista = async (req, res) => {
  const resultado = await consultas('SELECT * FROM reservaciones');
  res.json(resultado);
};
