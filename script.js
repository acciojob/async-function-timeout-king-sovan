function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessage() {
	const text = document.getElementById('text').value;
	const delayTime = document.getElementById('delay').value;

	await delay(delayTime);

	document.getElementById('output').textContent = text;
}

document.getElementById('btn').addEventListener('click', displayMessage);
