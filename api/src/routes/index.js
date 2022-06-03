const { Router } = require('express');
const countriesRoutes = require('./countriesRoutes')
const countryRoute = require('./countryRoute')
const filterRoutes = require('./filterRoutes')
const activityRoute = require('./activityRoute');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countriesRoutes)
router.use("/country", countryRoute)
router.use("/filters", filterRoutes)
router.use("/activities", activityRoute)

module.exports = router;
