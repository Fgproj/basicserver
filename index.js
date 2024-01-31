import express from 'express'

const app = express();

app.get('/', (req,res) => {
  let recebido = req.query.dados;

  console.log(recebido);
  res.json({recebido : recebido});
});

app.listen(5000,() => {
    console.log('Servidor iniciado ');
  });