const { request, response } = require("express");
const express = require("express");
const productosCrl = require("./controller/productosCtrl");
const ProductosDao = require("./models/productosDAO");

const app = express();
app.use(express.json());




app.post('/api/productos', async(request, response) => {
    try {
        let producto = request.body;
        await productosCrl.insertar(producto);
        response.status(200).send("El producto ha sido guardado con exito");
    } catch (error) {

        console.log("Error al listar" + error);
        response.status(400).send("Error al listar: " + error);

    }
});

app.get('/api/productos', async(request, response) => {
    try {

        const producto = await productosCrl.listar();
        response.status(201).json(producto);
    } catch (error) {

        console.log("Error al guardar" + error);
        response.status(400).send("Error al guardar: " + error);

    }
});

app.put('/api/productos', async(request, response) => {
    try {
        let producto = request.body;
        await productosCrl.actualizar(producto)
        response.status(200).send("producto actualizado");
    } catch (error) {
        console.log("Error put" + error);
        response.status(400).send("Error Put: " + error);

    }

})


app.delete('/api/productos/:id', async(request, response) => {
    try {
        let id = request.params.id;
        await productosCrl.eliminar(id)
        response.status(200).send("producto eliminado");
    } catch (error) {
        console.log("Error put" + error);
        response.status(400).send("Error Put: " + error);

    }

})

app.listen(1900, () => {
    console.log('Server runnig...')
})