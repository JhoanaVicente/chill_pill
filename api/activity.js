// api/activity.js
import axios from 'axios';

export default async function handler(req, res) {
    // Permitir solicitudes CORS solo desde un origen específico
    res.setHeader('Access-Control-Allow-Origin', '*'); // Cambia '*' por tu dominio en producción
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Permitir solo solicitudes GET
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Permitir ciertos encabezados

    // Verificar que el método de solicitud sea GET
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        
        // Aquí podrías revisar el contenido de response.data para asegurarte de que estás enviando la parte correcta
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error al obtener la frase:", error); // Registrar el error en la consola
        res.status(500).json({ error: 'Error al obtener la frase' });
    }
}
