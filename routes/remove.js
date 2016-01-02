var pg = require('pg');

exports.remove = function(req, res){
	var conf = "tcp://postgres:morita@localhost:5432/ws_test01";
	pg.connect(conf, function(err, client){
		if(err){
			console.log(err);
			res.redirect('/');
		} else {
			var sql = "delete from mynavi_db where id = $1";
			client.query(sql, [ req.body.id ], function(err, result){
				console.log(err);
				res.redirect('/');
			});
		}
	});
	
};
