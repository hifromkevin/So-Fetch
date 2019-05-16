document.getElementById('getText').addEventListener('click', getText);

// function getText() {
// 	fetch('sample.txt')
// 	.then(res => console.log(res))
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(err => 'You can\'t sit with us!');
// };

function getText() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'sample.txt');
	xhr.onload = function() {
		if (this.status === 200) {
			console.log(this.responseText);
		} else {
			console.log('She doesn\'t even go here!');
			
		}
	};
	xhr.send();
}