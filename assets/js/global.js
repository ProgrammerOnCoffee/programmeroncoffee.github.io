const loadHTML = async (path, position) => {
	try {
		const res = await fetch(path);
		const template = await res.text();
		document.body.insertAdjacentHTML(position, template);
	} catch (err) {
		console.log(err);
	}
}

loadHTML("/assets/footer.txt", "beforeend");