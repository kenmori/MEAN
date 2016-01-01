var pg = require('pg');
exports.create = function(req, res){
	var conf = "tcp://postgres:morita@localhost:5432/ws_test01";
	pg.connect(conf, function(error, client){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			var sql = "insert into mynavi_db (name, mail, tel) values ('";
			sql += req.body.name + "','" + req.body.mail + "','" + req.body.tel + "')";
			console.log(sql);
			client.query(sql, function(err, result){
				console.log(err);
				res.redirect('/');
			});
		}
	});
};