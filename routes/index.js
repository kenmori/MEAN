
/*
 * GET home page.
 */
var datas  = [
	{name: 'kenji', mail: 'kenji@fafafa'},
	{name: 'nekochan', mail: 'nekochan@fafafa'}
];
exports.index = function(req, res){
	res.render('index', {
		title: 'Express',
		msg: '送信してください',
		datas: datas
	});
};