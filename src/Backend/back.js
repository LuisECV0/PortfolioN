const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...req.body,
        access_key: 'dc85e2e6-f5e4-4842-bca7-d18a628a2d75', // Clave protegida en backend
      }),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al procesar la solicitud.' });
  }
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));
