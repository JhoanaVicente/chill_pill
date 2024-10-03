const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Ruta para obtener una actividad (chiste de Chuck Norris)
app.get("/api/activity", async (req, res) => {
    try {
        // Usar la API de Chuck Norris
        const response = await axios.get("https://api.chucknorris.io/jokes/random");
        const joke = response.data.value; // Acceder al chiste
        res.json({ activity: joke }); // Enviar el chiste como actividad
    } catch (error) {
        console.error("Error al obtener la actividad:", error.message); // Agrega un log del error
        res.status(500).json({ error: "Error al obtener la actividad" });
    }
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
