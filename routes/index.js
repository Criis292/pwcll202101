var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',author:'Cristian Izquierdo',appName:'WebApp' });
});
/*Agregando nueva ruta*/
router.get('/greeting',function(req,res,next){
  res.send('Hola soy del ITGAM')
})

router.get('/carrera',function(req,res,next){
  res.status(200).json({message:'Estudio Ingenieria en tics'})
})
module.exports = router;
