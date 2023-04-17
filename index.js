const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const { request } = require("express");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const tareas = [
  { id: 1, Titulo: 'Tarea 1', Descripcion: 'Descripcion de la tarea 1', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 2, Titulo: 'Tarea 2', Descripcion: 'Descripcion de la tarea 2', TiempoDefinido: '01:30', TiempoRestante: '00:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 3, Titulo: 'Tarea 3', Descripcion: 'Descripcion de la tarea 3', TiempoDefinido: '01:30', TiempoRestante: '00:05:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 4, Titulo: 'Tarea 4', Descripcion: 'Descripcion de la tarea 4', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 5, Titulo: 'Tarea 5', Descripcion: 'Descripcion de la tarea 5', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 6, Titulo: 'Tarea 6', Descripcion: 'Descripcion de la tarea 6', TiempoDefinido: '01:30', TiempoRestante: '00:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 7, Titulo: 'Tarea 7', Descripcion: 'Descripcion de la tarea 7', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 8, Titulo: 'Tarea 8', Descripcion: 'Descripcion de la tarea 8', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 9, Titulo: 'Tarea 9', Descripcion: 'Descripcion de la tarea 9', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 10, Titulo: 'Tarea 10', Descripcion: 'Descripcion de la tarea 10', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 11, Titulo: 'Tarea 11', Descripcion: 'Descripcion de la tarea 11', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 12, Titulo: 'Tarea 12', Descripcion: 'Descripcion de la tarea 12', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 13, Titulo: 'Tarea 13', Descripcion: 'Descripcion de la tarea 13', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 14, Titulo: 'Tarea 14', Descripcion: 'Descripcion de la tarea 14', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 15, Titulo: 'Tarea 15', Descripcion: 'Descripcion de la tarea 15', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 16, Titulo: 'Tarea 16', Descripcion: 'Descripcion de la tarea 16', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 17, Titulo: 'Tarea 17', Descripcion: 'Descripcion de la tarea 16', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
  { id: 18, Titulo: 'Tarea 18', Descripcion: 'Descripcion de la tarea 17', TiempoDefinido: '01:30', TiempoRestante: '01:30:00', Estado: 'Pendiente', TipoDuracion: 'CortaMedia' },
];


app.get('/', (req, res) => {
  res.send('Node JS api');
});

app.get('/api/tareas', (req, res) => {
  res.send(tareas);
});

app.get('/api/tareas/:id', (req, res) => {
  const tarea = tareas.find(t => t.id === parseInt(req.params.id));
  if (!tarea) return res.status(404).send('Tarea no encontrada');
  else res.send(tarea);
});

app.post('/api/tareas', (req, res) => {
  const tarea = {
    id: tareas.length + 1,
    Titulo: req.body.Titulo,
    Descripcion: req.body.Descripcion,
    TiempoDefinido: req.body.TiempoDefinido,
    TiempoRestante: req.body.TiempoRestante = req.body.TiempoDefinido,
    Estado: req.body.Estado = 'Pendiente',
    TipoDuracion: req.body.TipoDuracion = ''
  };

  tareas.push(tarea);
  res.send(tarea);
});

app.delete('/api/tareas/:id', (req, res) => {
  const tarea = tareas.find(t => t.id === parseInt(req.params.id));
  if (!tarea) return res.status(404).send('Tarea no encontrada');
  const index = tareas.indexOf(tarea);
  tareas.splice(index, 1);
  res.send(tarea);
});

app.put('/api/tareas/:id', (req, res) => {

  const { id } = req.params;

  const ta = {
    id: req.body.id = parseInt(id),
    Titulo: req.body.Titulo,
    Descripcion: req.body.Descripcion,
    TiempoDefinido: req.body.TiempoDefinido,
    TiempoRestante: req.body.TiempoRestante,
    Estado: req.body.Estado,
    TipoDuracion: req.body.TipoDuracion
  };
  const tarea = tareas.find(t => t.id === parseInt(id));
  if (!tarea) return res.status(404).send('Tarea no encontrada');
  const index = tareas.indexOf(tarea);
  tareas[index] = ta;
  res.send(tarea);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`conectado en puerto ${port}...`));