
/*
 * GET home page.
 */
exports.index = function(req, res) {
  res.render('index', { title: 'Stanford Fixit',  title_link: '/',
                        left_title: 'About',      left_link: '/about',
                        right_title: 'Contact',    right_link: '/contact'})
};

/*
 * GET about page 
 */
exports.about = function(req,res) {
  res.render('about', { title: 'About',  title_link: '/about',
                        left_title: 'Home',      left_link: '/',
                        right_title: 'Contact',    right_link: '/contact'})

};

 /*
 * GET contact page
 */
exports.contact = function(req,res) {
  res.render('contact', { title: 'Contact',  title_link: '/contact',
                        left_title: 'Home',      left_link: '/',
                        right_title: 'About',    right_link: '/about'})
};
