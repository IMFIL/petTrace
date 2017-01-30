import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('lostFound');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/signup', function () {
  this.render('signup');
});