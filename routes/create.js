var pg = require('pg');
//rollback
var rollback = function(client){
	client.query('rollback', function(){
		console.log('rollback');
		client.end();
	});
};

exports.create = function(req, res){
	var conf = "tcp://postgres:morita@localhost:5432/ws_test01";
	pg.connect(conf, function(error, client){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			client.query('begin', function(err, result){
				if(err){
					console.log('begin: ' + err);
					res.redirect('/');
					return;
				} else {
					var sql = "insert into mynavi_db (name, mail, tel) values ('" + req.body.name + "','" + req.body.mail + "','"  + req.body.tel + "')";
					client.query(sql, function(err, result){
						if(err){
							console.log("query:" + err);
							rollback(client);
						} else {
							client.query('commit' , function(err){
								client.end.bind(client);
							});
						}
						res.redirect('/');
					});
				}
			});
			
		}
	});
};
