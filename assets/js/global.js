const loadHTML = async (path, position) => {
	try {
		const res = await fetch(path);
		const template = await res.text();
		document.body.insertAdjacentHTML(position, template);
	} catch (err) {
		console.log(err);
	}
}

loadHTML("/assets/footer.html", "beforeend");

const generateDropGlow = (img) => {
	const imgDiv = document.createElement("div");
	imgDiv.className = "drop_glow";
	img.className = "";
	const bgImg = document.createElement("img");
	bgImg.src = img.src;
	imgDiv.append(bgImg);
	img.replaceWith(imgDiv);
	imgDiv.append(img);
}
const dropGlowImgs = [];
for (element of document.getElementsByClassName("generate_drop_glow")) {
	if (element.tagName === "IMG") {
		dropGlowImgs.push(element);
	}
}
for (img of dropGlowImgs) {
	generateDropGlow(img);
}
