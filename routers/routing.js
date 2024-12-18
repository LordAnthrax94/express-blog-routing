const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.send('Lista dei miei post')
})

router.get('/:title', (req,res)=>{
  res.send(`Parliamo del post ${req.params.title}`)
})

router.post('/', (req,res) =>{
  res.send('Nuovo Post')
})

router.put('/:title', (req,res)=>{
  res.send(`Modifico il post con il titolo ${req.params.tile} `)
})

router.patch('/:title', (req, res)=>{
  res.send(`Modifico una parte del mio post ${req.params.title}`)
})

router.delete('/:title', (req,res)=>{
  res.send(`Elimino il post con il titolo ${req.params.title}`)
})


module.exports = router