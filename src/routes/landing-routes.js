import { Router } from 'express';
import { inicioVista, reservasVista, platosVista } from "../controller/views-controller.js";

//Iniciación de router
const router = Router();

//Página principal
router.get("/", inicioVista);
router.get("/inicio", inicioVista);

//Página inicio de reservas
router.get("/reservas", reservasVista);

//Página inicio de platos
router.get("/platos", platosVista);

export default router;
