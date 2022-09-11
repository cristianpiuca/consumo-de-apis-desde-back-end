const express = require('express');
const router = express.Router();
const genresAPIController = require('../../controllers/api/genresAPIController');

/* RUTA /api/genres */

router.get('/', genresAPIController.list);
router.get('/:id', genresAPIController.detail);
router.get('/:id/movies', genresAPIController.genreMovies);

module.exports = router;