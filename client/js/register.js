
//you were searching: How to send emails to verify user accounts. :) thank your past you ! 
Template.registerPopUp.events({ 
   	'click .overlay':function(e){
		if($(".overlay").css("display") == "flex" && !$("#account-email").is(":focus") && !$("#account-password").is(":focus") 
													&& !$("#create-account").is(":focus")
												&& !$("."+e.target.className).parents(".registerPopUpContainer").length == 1 
											&& !$("."+e.target.className).parents(".overlay").length == 1){
			$(".overlay").hide();
	      	$(".registerPopUpContainer").hide();
		}
	},
	'submit #register-form' : function(e, t) {  //now we need email verification, not email validity verification !
        e.preventDefault();
        var email = t.find('#account-email').value
        var name = t.find('#account-name').value.toLowerCase();
        var password = t.find('#account-password').value;
        name == undefined ? name = name[0].toUpperCase() + name.slice(1):name = "";

        Meteor.call("checkPass",password,function(errorPass,resultPass){
			if(!resultPass){
				document.getElementById('account-password').setCustomValidity("Your password must be at least 8 characters"+
				"and contain a number,A lower and upper case letter and a special character.");
			}
			else{
				Accounts.createUser({email: email, password : password,profile:{name:name}}, function(err){
				    if (err) {
					    console.log(err); //remove
				    // Inform the user that account creation failed
			    	} 
				    else {
			    // Success. Account has been created and the user
			    // has logged in successfully. 
				    }

				});
			}
		})
	    return false;      
	}
});