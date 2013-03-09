
/*
 * GET home page.
 */
exports.index = function(req, res) {
  res.render('index.html', { title: 'Stanford Fixit' })
};

/*
 * GET about page 
 */
exports.about = function(req,res) {
	res.render('about', {title: 'About'})
};

 /*
 * GET contact page
 */
exports.contact = function(req,res) {
	res.render('contact', {title: 'Contact'})
};
