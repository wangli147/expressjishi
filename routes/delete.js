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

router.post('/Xq',function(req,res){
	var id=req.body['id'];
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('delete from news where con',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
})

/*修改：update 表名 set 字值=值 where 条件；
	eg:update employee set Address=上海 where Name=杨春雪
删除: delete from  表名  where 条件*/
module.exports=router;