exports.del = function(req, res){
	var pg = require('pg');
	var id = req.params.id;
	var conf = "tcp://postgres:morita@localhost:5432/ws_test01";
	pg.connect(conf, function(err, client){
		if(err){
			res.redirect('/');
		} else {
			var sql = "select * from mynavi_db where id = " + id;
			client.query(sql, function(err, result){
				if(err){
					console.log(err);
					res.redirect('/');
				} else {
					res.render('delete', {
						title: 'Express',
						msg: 'このレコードを削除しますか？',
						data: result.rows[0]
					});
				}
			});
		}
	});
};
