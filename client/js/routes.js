Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function () {
	this.render('lostFound');
});

Router.route('/login', function () {
	this.render('login');
});