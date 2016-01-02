var pg = require('pg');
exports.update = function(req, res){
	console.log(req.body);
	var conf = "tcp://postgres:morita@localhost:5432/ws_test01";
	pg.connect(conf, function(err, client){
		if(err){
			console.log(err);
			res.redirect('/');
		} else {
			var sql = "update mynavi_db set name = $1, mail = $2, tel = $3 where id = $4";
				client.query(sql, [req.body.name, req.body.mail, req.body.tel, req.body.id], function(err, result){
					console.log(err);
					res.redirect('/');
				});
		}
	});
};