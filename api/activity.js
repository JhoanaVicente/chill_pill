// api/activity.js
import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la frase' });
    }
}