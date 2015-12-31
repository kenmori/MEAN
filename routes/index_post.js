var data  = {
	kenji : {mail: 'kenji@fafafa', tel: '080-9999-9999'},
	nekochan : {mail: 'nekochan@fafafa', tel: '080-8888-8888'} 
}
exports.index = function(req, res){
	var name = req.body.name;
	var result = data[name];
	if(result === undefined){
		result = {mail: '見つかりませんでした', tel: '見つかりませんでした'};
	}
	res.send(result);
};