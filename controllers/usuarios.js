const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, limit, page = 1 } = req.query;
    res.json({
        "msg": "get API controlador",
        q,
        limit,
        page
    });
}
const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        "msg": "put API- controlador",
        id
    });
}
const usuariosPost = (req = request, res = response) => {
    const { nombre, soltero } = req.body;
    res.json({
        "msg": "post API- controlador",
        nombre,
        soltero
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        "msg": "delete API- controlador"
    });
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}