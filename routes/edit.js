exports.edit = function(req, res){
	pg = require('pg');
	var id = req.params.id;
	
	var conf = "tcp://postgres:morita@localhost:5432/ws_test01";
	pg.connect(conf, function(err, client){
		if(err){
			console.log(err);
			res.redirect('/');
		} else {
			var sql = "select * from mynavi_db where id = " + id;
			client.query(sql, function(err, result){
				if(err){
					console.log(err);
					res.redirect('/');
				} else {
					res.render('edit', {
						title: 'Express',
						msg: '送信してください',
						data: result.rows[0]
					});
				}
			});
		}
	});
};