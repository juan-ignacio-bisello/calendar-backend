// Events Routes
// /api/events
const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvent, actualizarEvento, crearEvento, eliminarEvento } = require('../controllers/events');
const { validarCampos } = require('../middlewares/Validar-compos');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use( validarJWT );

router.get('/', getEvent );

router.post('/',
    [
        check('title', 'titulo obligatorio' ).not().isEmpty(),
        check('start', 'fecha de inicio es obligatoria' ).custom( isDate ),
        check('end', 'fecha de finalizacion es obligatoria' ).custom( isDate ),
        validarCampos
    ],
    crearEvento );

router.put('/:id', actualizarEvento );

router.delete('/:id', eliminarEvento );

module.exports = router;