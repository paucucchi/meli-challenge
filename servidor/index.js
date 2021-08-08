const express = require('express');
const get = require('lodash/get');
const api = require('./services/api');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/api/items', async (request, response) => {
  try {
    const query = get(request, 'query.q');
    const data = await api.getItems(query);
    response.json({
      status: 'success',
      data,
    });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
});

app.get('/api/items/:id', async (request, response) => {
  try {
    const id = get(request, 'params.id');
    const data = await api.getItemDetails(id);
    response.json({
      status: 'success',
      data,
    });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

module.exports = app;
