const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;


const client = new Client({
  user: 'postgres', 
  host: 'localhost',
  database: 'formCNT', 
  password: 'luke2005sos.', 
  port: 5432,
});

client.connect();


app.get('/api/data', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM nombre');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los datos');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
