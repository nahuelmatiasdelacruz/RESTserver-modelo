const {response} = require("express");
const usuariosGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: "GET api - Controlador",
        query
    });
}
const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: "PUT api - Controlador",
        id
    });
}
const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: "Post api - Controlador",
        body
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete api - Controlador",
    });
}
module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}