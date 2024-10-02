const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Habilitar CORS
app.use(cors());

app.get('/api/activity', async (req, res) => {
  try {
    const response = await axios.get('https://bored-api.appbrewery.com/');
    res.json(response.data); // Reenviar la respuesta al cliente
  } catch (error) {
    console.error('Error fetching activity:', error); // Log de error en consola
    res.status(500).send('Error fetching activity: ' + error.message); // Devuelve un error más descriptivo
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
