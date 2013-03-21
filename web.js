
/**
 * Module dependencies.
 */

var express = require('express')
  , routes  = require('./routes')
  , emailer = require('./routes/emailer')
  , path    = require('path')
  , location_results = require('./routes/location_results');

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

//var mongoUri = 'mongodb://localhost/dormLocationDB';
  //process.env.MONGOLAB_URI || 
  //process.env.MONGOHQ_URL || 
  //'mongodb://localhost/dormLocationDB'; 

//mongo.Db.connect(mongoUri, function (err, db) {
  //var locations = db.locations.find();
  /*console.log('herrow');
  var numLocations = db.locations.count();
  var locations = db.locations.find();
  var minDistance = -1;
  var index = -1;

  for (var i = 0; i < numLocations; i++) {
    var locLat = locations[i].lat;
    var locLng = locations[i].lng;
    var distance = pow((testLocation.lat - lat),2) + pow((testLocation.lng - lng),2);
    if (minDistance > 0 && distance < minDistance) {
      minDistance = distance;
      index = i;
    }
  }
  $('#building').attr('value', locations[index].name);*/
  //db.collection('locations', function(err2, collection) {
    //collection.find();
  //});
//});

// Routes

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/information', routes.information);
app.get('/success', routes.success);
app.get('/failure', routes.failure);
app.post('/email', emailer.email);
app.get('/location_results', location_results.fetchLocations);

app.listen(app.get('port'), function() {
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});

