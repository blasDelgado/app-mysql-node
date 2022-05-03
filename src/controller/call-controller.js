import { consultas } from '../models/consultor.js';

//Reservas

// Buscar por nombre

//Post
export const daNombre = (req, res) => {
  let nombre = req.body.nombre;

  res.redirect('/reservas/' + nombre);
};
//Get
export const buscaPorNombre = async (req, res) => {
  const nombre = req.params.nombre;
  try {
    let resultado = await consultas(
      `SELECT * FROM reservaciones WHERE nombre = '${nombre}';`
    );

    if (typeof resultado[0] != 'object') {
      resultado = await consultas(
        `SELECT * FROM reservaciones WHERE apellido = '${nombre}'`
      );
    }

    if (resultado != '') {
      res.json(resultado);
    } else res.json({ respuesta: 'Nombre no encontrado' });
  } catch (err) {
    console.log(err);
  }
};

// Buscar por fecha

//Post
export const daUnaFecha = (req, res) => {
  let fecha = req.body.fecha;

  res.redirect('/reservas/fecha/' + fecha);
};

//Get

export const buscaUnaFecha = async (req, res) => {
  let fecha = req.params.fecha;

  try {
    const resultado = await consultas(
      `SELECT * FROM reservaciones WHERE fecha = '${fecha}' ;`
    );

    if (resultado != '') {
      res.json(resultado);
    } else res.json({ respuesta: 'No hay reservaciones para esta fecha' });
  } catch (err) {
    console.log(err);
  }
};

//Busca entre fechas

//Post
export const daFechas = (req, res) => {
  let fechaInicio = req.body.fechaInicio;
  let fechaFin = req.body.fechaFin;

  res.redirect('/reservas/' + fechaInicio + '/' + fechaFin);
};
//Get
export const buscaPorFechas = async (req, res) => {
  let fechaInicio = req.params.fechaInicio;
  let fechaFin = req.params.fechaFin;

  try {
    const resultado = await consultas(
      `SELECT * FROM reservaciones WHERE fecha BETWEEN '${fechaInicio}' AND '${fechaFin}';`
    );

    if (resultado != '') {
      res.json(resultado);
    } else res.json({ respuesta: 'Fechas no encontradas' });
  } catch (err) {
    console.log(err);
  }
};

//Busca por cantidad personan en mesa

//Post
export const daMesa = (req, res) => {
  let mesa = req.body.mesa;

  res.redirect('/reservas-por-kmesa/' + mesa);
};

//Get

export const buscaCantidadPorMesa = async (req, res) => {
  let mesa = req.params.mesa;

  try {
    const resultado = await consultas(
      `SELECT * FROM reservaciones WHERE cantidadmesa = '${mesa}';`
    );
    if (resultado == '') {
      res.json({ respuesta: 'Cantidad de personas por mesa no encontrada' });
    }
    res.json(resultado);
  } catch (e) {
    console.log(e);
  }
};

//Platos

//Busca entre precios de platos

//Post

export const daPrecios = (req, res) => {
  let precio1 = req.body.precio1;
  let precio2 = req.body.precio2;

  res.redirect('/platos/precios/' + precio1 + '/' + precio2);
};

//Get

export const buscaPorPrecios = async (req, res) => {
  let precio1 = req.params.precio1;
  let precio2 = req.params.precio2;

  try {
    const resultado = await consultas(
      `SELECT * FROM platillos WHERE precio BETWEEN '${precio1}' AND '${precio2}';`
    );

    if (resultado != '') {
      res.json(resultado);
    } else res.json({ respuesta: 'No hay platos entre esos precios' });
  } catch (err) {
    console.log(err);
  }
};

//Plato mas caro

export const platoCaro = async (req, res) => {
  try {
    const resultado = await consultas(
      'SELECT * FROM platillos ORDER BY precio DESC LIMIT 1 ;'
    );
    res.json(resultado);
  } catch (e) {
    console.log(e);
  }
};

//Plato mas barato

export const platoBarato = async (req, res) => {
  try {
    const resultado = await consultas(
      'SELECT * FROM platillos ORDER BY precio ASC LIMIT 1 ;'
    );
    res.json(resultado);
  } catch (e) {
    console.log(e);
  }
};

//Platos disponibles

export const platoDisponible = async (req, res) => {
  try {
    let resultado = await consultas(
      'SELECT * from platillos WHERE disponible = 1 ;'
    );

    res.json(resultado);
  } catch (e) {
    console.log(e);
  }
};

export const platoNoDisponible = async (req, res) => {
  try {
    let resultado = await consultas(
      'SELECT * from platillos WHERE  disponible = 0 ;'
    );
    res.json(resultado);
  } catch (e) {
    console.log(e);
  }
};

export const platosPorCategorias = async (req, res) => {
  try {
    let resultado = await consultas(
      'SELECT categoria.nombre AS categoria_nombre, platillos.id , platillos.nombre, platillos.precio, platillos.disponible FROM categoria INNER JOIN platillos ON categoria.id=platillos.categoriaid WHERE concat(categoria.id , platillos.categoriaid) ;'
    );

    res.json(resultado);
  } catch (e) {
    console.log(e);
  }
};
