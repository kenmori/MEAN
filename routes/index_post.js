var members = {
	kenji: 'morita',
	hana: 'flower'
};
exports.index = function(req, res){
	var name = req.body.name;
	var pass = req.body.pass;
	var msg = '';
	var member_pass = members[name];
	if(member_pass === pass){
		req.session.login = true;
		req.session.name = name;
		msg = '"' + name + '"でログインしました';
		//res.session.cookie.originalMaxAge = 600000; 10min
	} else {
		req.session.login = false;
		msg = 'ログインに失敗しました';
	}
	res.render('index', {
		title: 'Express',
		msg: msg
	});
};