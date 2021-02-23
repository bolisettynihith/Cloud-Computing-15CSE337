var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');  


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



/* Process POST Form */
var urlencodedParser = bodyParser.urlencoded({ extended: false });  

router.post('/process', urlencodedParser, function (req, res) {  
  if(req.body.makrs >50){
   a={ title: 'Hello World',name : req.body.name,rno: req.body.roll_no,message:"student is eligible" };
  }
   else{
	a={ title: 'Hello World',name : req.body.name,rno: req.body.roll_no,message:"student is  noteligible" };
}
   res.render('response', a);
  
}); 

module.exports = router;
