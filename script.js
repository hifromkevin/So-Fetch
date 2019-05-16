document.getElementById('getText').addEventListener('click', getText);

function getText() {
	fetch('sample.txt')
	.then(res => res.text())
	.then(data => {
		document.getElementById('fetchData').innerHTML = data;
	})
	.catch(err => 'You can\'t sit with us!');
};

document.getElementById('getUsers').addEventListener('click', getUsers);

function getUsers() {
	fetch('users.json')
	.then(res => res.json())
	.then(data => {
		let output = '<h2>Users</h2>';
		data.forEach((user) => {
			output += `<p><strong>User: </strong> ${user.name}</p>`;
			output += `<p><strong>Email:</strong>  <em>${user.email}</em></p><br />`;
		});
		document.getElementById('fetchData').innerHTML = output;
	})
	.catch(err => 'You can\'t sit with us!');
};
