
/*
 * GET home page.
 */
var pg = require('pg');

exports.index = function(req, res) {
	var conf = "tcp://postgres:morita@localhost:5432/ws_test01";
	pg.connect(conf, function(err, client) {
		if (err) {
			console.log(err);
		} else {
			client.query("SELECT * from mynavi_db", function(error,result) {
				console.log("データベース繋がったよ");
				res.render('index', {
					title : 'Express',
					msg : 'MyDataの一覧リスト',
					datas : result.rows
				});
			});
		}
	});
};

