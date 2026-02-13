const projects = [
	{
		name: "Flecto",
		desc: "Flecto is a puzzle game where you shatter targets by bouncing bullets around each level. Place blocks and prisms in order to deflect and split bullets as they travel. Strategically use your limited tiles to destroy every target and complete each level.",
		img: "assets/images/flecto_cover_315px.webp",
		href: "https://store.steampowered.com/app/4143420?utm_source=coffee",
		linktext: "Wishlist on Steam",
		type: "game",
	},
	{
		name: "Orbis",
		desc: "Orbital color matching game.<br />Winner of the Indie Den Godot Jam.",
		img: "assets/images/orbis_cover_315px.webp",
		href: "https://programmeroncoffee.itch.io/orbis",
		type: "game",
	},
	{
		name: "Ricochet",
		desc: "Bullet-bouncing puzzle game.<br />Created for the Mini Code for a Cause jam.",
		img: "assets/images/ricochet_cover_315px.webp",
		href: "https://programmeroncoffee.itch.io/ricochet",
		type: "game",
	},
	{
		name: "Silversea",
		desc: "Journey out to sea on a beautiful day.<br />Created for the 81st Godot Wild Jam.",
		img: "assets/images/silversea_cover_315px.webp",
		href: "https://programmeroncoffee.itch.io/silversea",
		type: "game",
	},
	{
		name: "GDTerminal",
		desc: "GDTerminal is a <b>free</b> addon for Godot Engine that introduces a GDScript Terminal.<br />Run GDScript code in the editor at the click of a button to speed up your workflow.",
		img: "assets/images/gdterminal_cover_315px.webp",
		href: "/GDTerminal/",
		type: "tool",
	},
]

for (project of projects) {
	var outerDiv = document.createElement("div");
	outerDiv.className = "project";
	const img = document.createElement("img");
	img.src = project.img;
	img.alt = project.name + " cover";
	outerDiv.append(img);

	const innerDiv = document.createElement("div");
	const h2 = document.createElement("h2");
	h2.textContent = project.name;
	innerDiv.append(h2);
	const p = document.createElement("p");
	p.innerHTML = project.desc;
	innerDiv.append(p);
	const a = document.createElement("a");
	a.target = "_blank";
	a.textContent = "linktext" in project ? project.linktext : project.type == "tool" ? "More Details" : "View on Itch";
	a.href = project.href;
	innerDiv.append(a);
	outerDiv.append(innerDiv);

	document.getElementById("projects").append(outerDiv);
}