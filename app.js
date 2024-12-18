const express = require('express');
const app = express();
const port = 3000;
const posts = require('./data/posts');
const postRouter = require('./routers/routing');

app.get('/', (req, res)=>{
  res.send('I miei post')
})

app.use('/data/posts', postRouter)

app.listen(port, ()=>{
  console.log(`Sono in ascolto per il server sulla porta ${port}`);  
})