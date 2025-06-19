const projects = [
	{
		name: "GDTerminal",
		desc: "GDTerminal is a <b>free</b> addon for Godot Engine that introduces a GDScript Terminal.<br />Run GDScript code in the editor at the click of a button to speed up your workflow.",
		img: "assets/images/gdterminal_cover_315px.webp",
		href: "/GDTerminal/",
		type: "tool",
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
]

for (project of projects) {
	var outerDiv = document.createElement("div");
	outerDiv.className = "project";
	const img = document.createElement("img");
	img.src = project.img;
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
	a.textContent = project.type == "tool" ? "More Details" : "View on Itch";
	a.href = project.href;
	innerDiv.append(a);
	outerDiv.append(innerDiv);

	document.getElementById("projects").append(outerDiv);
}