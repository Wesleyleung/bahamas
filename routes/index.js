
/*
 * GET home page.
 */
exports.index = function(req, res) {
  res.render('index', { title: 'Stanford Fixit',  title_link: '/',
                        left_title: 'Info',      left_link: '/information'})
};

exports.information = function(req, res) {
	res.render('information', { title: 'Info', title_link: '/information',
								left_title: 'Home', left_link: "/"})
};

exports.success = function(req, res) {
  res.render('success', { title: 'Success', title_link: '/success',
                          left_title: 'Home', left_link: "/"})
};

exports.failure = function(req, res) {
  res.render('failure', { title: 'Failure', title_link: '/failure',
                          left_title: 'Home', left_link: "/"})
};


/*
 * GET about page 
 */
exports.about = function(req,res) {
  res.render('about', { title: 'About',  title_link: '/about',
                        left_title: 'Info',      left_link: '/information',
                        right_title: 'Home',    right_link: '/'})

};

 /*
 * GET contact page
 */
exports.contact = function(req,res) {
  res.render('contact', { title: 'Contact',  title_link: '/contact',
                        left_title: 'Info',      left_link: '/information',
                        right_title: 'Home',    right_link: '/'})
};
