
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , index_post = require('./routes/index_post')
  , add = require('./routes/add')
  , create = require('./routes/create')
  , edit = require('./routes/edit')
  , update = require('./routes/update')
  , del = require('./routes/delete')
  , remove = require('./routes/remove')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());//リクエスト時にres.body.[property]で値を取れるミドルウェア
app.use(express.methodOverride());
app.use(express.cookieParser('secret', 'mycom_sercred_key'));//routerより前に書く
app.use(express.session({key: 'session_id'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/index/:id', routes.index);
app.get('/index/:id/:name', routes.index);
app.get('/add', add.add);
app.get('/edit/:id', edit.edit);
app.post('/update', update.update);
app.get('/delete/:id', del.del);
app.post('/remove', remove.remove);
app.post('/create', create.create);
app.post('/', index_post.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

