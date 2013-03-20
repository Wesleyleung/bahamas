
/**
 * Module dependencies.
 */

var express = require('express')
  , routes  = require('./routes')
  , emailer = require('./routes/emailer')
  , path    = require('path');

var app = express();

// Configuration

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  //app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  // Add mobile middleware to set a response local var that lets us check 
  // the user agent in views and load scripts appropriately
  app.use(function(req, res, next) {
    var ua = req.get('User-Agent');
    if(/mobile/i.test(ua)) {
      res.locals.is_mobile = true;
    } else {
      res.locals.is_mobile = false;
    }
    next();
  });

  app.use(require('stylus').middleware({
      src: __dirname + '/assets' //.styl files are located in '/assets/stylesheets',
    , dest: __dirname + '/public'//.css files compiles
    , compress: true
    }));
  app.use(app.router);
  //Note: the path '/public/stylesheets/style.css' should be '/stylesheets/style.css' with this line
  app.use(express.static(path.join(__dirname, '/public')));
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/information', routes.information);
app.get('/success', routes.success);
app.get('/failure', routes.failure);
app.post('/email', emailer.email);

app.listen(app.get('port'), function() {
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});
