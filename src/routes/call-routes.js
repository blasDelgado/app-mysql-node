import { Router } from 'express';
import {
  daNombre,
  buscaPorNombre,
  daFechas,
  buscaPorFechas,
  daUnaFecha,
  buscaUnaFecha,
  daMesa,
  buscaCantidadPorMesa,
  daPrecios,
  buscaPorPrecios,
  platoCaro,
  platoBarato,
  platoDisponible,
  platoNoDisponible,
  platosPorCategorias,
} from '../controller/call-controller.js';

//Iniciación de router
const router = Router();

//Rutas Reservas

//Buscar por nombre
router.post('/reservas/busca-reservaciones', daNombre);
router.get('/reservas/:nombre', buscaPorNombre);
//Busca una fecha especifica
router.post('/reservas/busca-fecha', daUnaFecha);
router.get('/reservas/fecha/:fecha', buscaUnaFecha);
//Buscar entre fechas
router.post('/reservas/busca-reservaciones-fechas', daFechas);
router.get('/reservas/:fechaInicio/:fechaFin', buscaPorFechas);
//Buscar por cantidad de personas por mesa
router.post('/reservas/busca-cantidad-por-mesa', daMesa);
router.get('/reservas-por-mesa/:mesa', buscaCantidadPorMesa);

//Rutas Platos

//Buscar platos entre precios
router.post('/platos/busca-platos-entre-precios', daPrecios);
router.get('/platos/precios/:precio1/:precio2', buscaPorPrecios);
//Plato mas caro
router.get('/platos/precios/plato-mas-caro', platoCaro);
//Plato mas barato
router.get('/platos/precios/plato-mas-barato', platoBarato);
//Platos disponibles
router.get('/platos/disponibles', platoDisponible);
//Platos no disponibles
router.get('/platos/no-disponibles', platoNoDisponible);
//Platos por categoria
router.get('/platos/categorias', platosPorCategorias);

export default router;
