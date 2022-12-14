const { Router } = require('express');
const usersRoutes = require('./usersRoutes')
const userRoute = require('./userRoutes')
const teamsRoutes = require('./teamsRoutes')
const gamesRoute = require('./gamesRoutes');
const worldcupRoute = require ('./worldcupRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/users", usersRoutes)
router.use("/user", userRoute)
router.use("/teams", teamsRoutes)
router.use("/games", gamesRoute)
router.use("/worldcup", worldcupRoute)

module.exports = router;
