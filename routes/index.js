
/*
 * GET home page.
 */

exports.index = function(req, res){
	var id = req.params.id;
	var name = req.params.name;
	res.render('index', {
		title: 'Express',
		msg: 'こんにちは'+ id + '番の' + name + 'さん'
	});
};