Meteor.methods({
	"checkPass": function(pass){
		check(pass,String);
		var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
		return(pattern.test(pass));
	}
});

