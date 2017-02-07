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

  Template.login.events({

    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-email').value
      var password = t.find('#login-password').value;

        // Trim and validate your fields here.... 

        Meteor.loginWithPassword(email, password, function(err){
        if (err){
        }
        else{
          // The user has been logged in.
        }
      });
         return false; 
      },

      'click .registerLink':function(){
      	$(".overlay").css("display","flex");
      	$(".registerPopUpContainer").show();
      }

  });

   Template.registerPopUp.events({
   	'click .overlay':function(){
		if($(".overlay").css("display") == "flex"){
			$(".overlay").hide();
	      	$(".registerPopUpContainer").hide();
		}
		}
	});


  Template.navBar.events({
  	'click #login': function(){
  		Router.go("/login");
  	},
  	'click #petTrace': function(){
  		Router.go("/");
  	}
  });
