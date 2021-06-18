// Import Router
import { Router } from 'express';

// Importando al controlador Home
import homeController from '@server/controllers/homeControllers';

// Creando la instancia de un router
const router = new Router();

// GET '/'
router.get('/', homeController.index);

// GET '/greeting
router.get('/greeting', homeController.greeting);
// Exportando el router que maneje las subrutas
// para el controlador home
export default router;
