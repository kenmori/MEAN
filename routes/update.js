var pg = require('pg');
exports.update = function(req, res){
	console.log(req.body);
	var conf = "tcp://postgres:morita@localhost:5432/ws_test01";
	pg.connect(conf, function(err, client){
		if(err){
			console.log(err);
			res.redirect('/');
		} else {
			var sql = "update mynavi_db set name = '"
				+ req.body.name + "',mail = '"
				+ req.body.mail + "', tel = '"
				+ req.body.tel + "' where id = "
				+ req.body.id;
				client.query(sql, function(err, result){
					console.log(err);
					res.redirect('/');
				});
		}
	});
};