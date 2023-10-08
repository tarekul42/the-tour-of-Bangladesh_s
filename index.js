const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const places = require('./data/places.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('This is from The Tour of Bangladesh_s')
})

app.get('/places', (req, res) =>{
    res.send(places)
})

app.get('/places/:id', (req, res) =>{
  const id = req.params.id;
  const displayPlace = places.find(place => place.id == id);
  res.send(displayPlace)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})