
/*
 * GET home page.
 */

exports.index = function(req, res){
	var msg = '';
	var cookie = req.cookies;
	if(req.session.login !== true || cookie === undefined){
		msg = 'ログインしてください。';
	} else {
		msg = 'ID:' + req.session.name + 'でログインしています';
	}
	res.render('index', {
		title: 'Express',
		msg: msg
	});
};