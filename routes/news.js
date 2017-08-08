var express=require("express");
var mysql=require("mysql");
var router=express.Router();

var pool=mysql.createPool({
	host:"localhost",
	user:"root",
	password:"",
	database:"exam",
	port:"3306"
});


router.get('/news',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select * from news',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
})

router.post('/Xq',function(req,res){
	var id=req.body['id'];
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select * from news where id='+id,function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
})
module.exports=router;

