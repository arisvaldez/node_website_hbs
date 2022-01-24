const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

hbs.registerPartials(`${__dirname}/views/partials`, (err) => {});
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Aris Valdez',
    title: 'Titulo',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Aris Valdez',
    title: 'Titulo',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Aris Valdez',
    title: 'Titulo',
  });
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port,()=>{
    console.log(`Application running at ${port} port`)
});
