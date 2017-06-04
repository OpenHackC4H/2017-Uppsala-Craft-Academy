// Get the element
var modalLogin = document.getElementById('modalLogin');
var modalJoin = document.getElementById('modalJoin');
var joinbtn = document.getElementById('join');
var loginbtn = document.getElementById('signin');
var closex = document.getElementById('closex');
var closexj = document.getElementById('closexj');
var cancelbtn = document.getElementById('cancelbtn');
var cancelbtnj = document.getElementById('cancelbtnj');
var loginform = document.getElementById('loginform');
var joinform = document.getElementById('joinform');
var username = document.getElementById('username');
var usernamej = document.getElementById('usernamej');
var password = document.getElementById('password');
var passwordj = document.getElementById('passwordj');
var emailj = document.getElementById('emailj');

//Open the login modal on click of login button
loginbtn.onclick = function(event) {
	if(event.target == loginbtn) {
		modalLogin.style.display = "block";
	}
}

//Open the join modal on click of login button
joinbtn.onclick = function(event) {
	if(event.target == joinbtn) {
		modalJoin.style.display = "block";
	}
}

//Close the login modal when user clicks x
closex.onclick = function(event) {
	if(event.target == closex) {
        modalLogin.style.display = "none";
	}
}

//Close the join modal when user clicks x
closexj.onclick = function(event) {
	if(event.target == closexj) {
        modalJoin.style.display = "none";
	}
}

//Close the login modal when user clicks close
cancelbtn.onclick = function(event) {
	if(event.target == cancelbtn) {
        modalLogin.style.display = "none";
	}
}

//Close the join modal when user clicks close
cancelbtnj.onclick = function(event) {
	if(event.target == cancelbtnj) {
        modalJoin.style.display = "none";
	}
}

// When the user clicks anywhere outside of the login modal, close it
window.onclick = function(event) {
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
}

// When the user clicks anywhere outside of the join modal, close it
window.onclick = function(event) {
    if (event.target == modalJoin) {
        modalJoin.style.display = "none";
    }
}

//Validate the user's login details incase required attribute fails
function validateForm() {
	if(username==null || username=="") {
		alert("Please enter your username");
		return false;
	}
	
	if(password==null || password=="") {
		alert("Please enter your password");
		return false;
	}
	
	else {
		var action = "iou_get";
		return true;
	}
}

//Validate the user's login details incase required attribute fails
function validateJoin() {
	if(usernamej==null || usernamej=="") {
		alert("Please enter your username");
		return false;
	}
	
	if(passwordj==null || passwordj=="") {
		alert("Please enter your password");
		return false;
	}
	
	if(emailj==null || emailj=="") {
		alert("Please enter your email");
		return false;
	}
	
	else {
		//var action = "iou_get";
		return true;
	}
}


