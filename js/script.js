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
		data.forEach(user => {
			output += `<p><strong>User: </strong> ${user.name}</p>`;
			output += `<p><strong>Email:</strong>  <em>${user.email}</em></p><br />`;
		});
		document.getElementById('fetchData').innerHTML = output;
	})
	.catch(err => console.log('You can\'t sit with us!', err));
};

document.querySelector('#runAPI').addEventListener('click', getAPI);

function getAPI() {
	let gifs = '';
	fetch(`http://api.giphy.com/v1/gifs/search?q=mean+girls&api_key=${config.apiKey}&limit=5`)
	.then(res => res.json())
	.then (data => {
		data.data.map(gif => {
			gifs += `<img src="${gif.images.fixed_width.url}" alt="${gif.title}" /><br />`
		})
		document.getElementById('fetchData').innerHTML = gifs;
	})
	.catch(err => console.log('She doesn\'t even go here!', err));
}







