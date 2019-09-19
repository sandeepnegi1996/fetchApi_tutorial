console.log('this is just a test');

const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');

const getData = () => {
	fetch('https://reqres.in/api/users')
		.then(response => {
			return response.json();
		})
		.then(myjson => {
			console.log(myjson);
		});
};

const postData = () => {
	fetch('https://reqres.in/api/register', {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: 'eve.holt@reqres.in',
			password: 'pistol'
		})
	})
		.then(response => {
			console.log(response);
			return response.json();
		})
		.then(myjson => {
			console.log(myjson);
		});
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
