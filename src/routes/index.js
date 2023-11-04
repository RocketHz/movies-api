const express = require('express');
const moviesRouter = require('./movies.routes');
const genresRouter = require('./genres.routes');
const actorsRouter = require('./actors.routes');
const directorsRouter = require('./directors.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/movies", moviesRouter);
router.use("/genres", genresRouter);
router.use("/actors", actorsRouter);
router.use("/directors", directorsRouter);


module.exports = router;