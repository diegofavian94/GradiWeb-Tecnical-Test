const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');

const app = express();

const engine = new Liquid({
  root: [
    path.resolve(__dirname, 'templates'),
    path.resolve(__dirname, 'sections'),
    path.resolve(__dirname, 'snippets')
  ],
  extname: '.liquid',

  //No chache on development
  cache: process.env.NODE_ENV === 'production',
});

app.engine('liquid', engine.express());
app.set('views', path.resolve(__dirname, 'templates'));
app.set('view engine', 'liquid');

app.use(express.static('public'));

const products = require('./data/products.json');
const collections = require('./data/collections.json');
const settings = JSON.parse(fs.readFileSync('./config/settings_data.json', 'utf-8'));

app.get('/', (req, res) => {
  res.render('index', { 
    products, 
    collections, 
    settings: settings.sections
  });
});

//Show all errors in development
if (process.env.NODE_ENV !== 'production') {
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`<pre>${err.stack}</pre>`);
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
