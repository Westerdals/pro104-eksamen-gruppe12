const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
nextPage = false;

form.addEventListener('submit', e => {
	e.preventDefault();

	newAccount();
	
//local storage object
	var lsPerson = {
		username: username.value,
		email: email.value,
		password: password.value
	};
	localStorage.setItem('Bruker', JSON.stringify(lsPerson));


	console.log(username.value.toString().length);


// 
	if(username.value.length > 0){
		console.log('test1');
		if(email.value.length > 0){
		console.log('test2');
		if(password.value.length > 0){
			console.log('test3');
		 if(email.value.length > 0){
			console.log('test4');
		if((password2.value === password.value)){
				console.log('test 5');
				newSite();
	
			}
			}
			
}
		}
	}
	
});		



function newAccount() {
	// trim to remove the whitespaces
	let usernameValue = username.value.trim();
	let emailValue = email.value.trim();
	let passwordValue = password.value.trim();
	let password2Value = password2.value.trim();

	


	if (usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		nextPage = false;
	} else {
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		nextPage = false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		nextPage = false;
	} else {
		setSuccessFor(email);
		
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		nextPage = false;
	} else {
		setSuccessFor(password);
	}

	if (password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		nextPage = false;
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		nextPage = false;
	} else {
		setSuccessFor(password2);
		
	}
	
	
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
		
function newSite() {
	window.location = '/docs/HTML/main.html';

}
