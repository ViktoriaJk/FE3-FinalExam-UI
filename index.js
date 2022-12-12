const beers = {
	id: "beers",
	logo: "Best Beers",
	button: "details",
	cards: [
		{
			title: "Mango Bay",
			sub: "Mad Scientist Beer",
			text: "Pale Ale - American"
		},
		{
			title: "Távoli Galaxis",
			sub: "Rothbeer Brewery",
			text: "IPA - American"
		},
		{
			title: "Flying Rabbit AIPA",
			sub: "MONYO Brewing Co.",
			text: "IPA - American"
		},
		{
			title: "Liquid Cocaine",
			sub: "Mad Scientist Beer",
			text: "IPA - Imperial"
		},
		{
			title: "Organic Chocolate Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - English"
		},
		{
			title: "Bracia",
			sub: "Thornbridge Brewery",
			text: "Strong Ale - English"
		},
		{
			title: "Oatmeal Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - Oatmeal"
		},
		{
			title: "Black Tokyo Horizon",
			sub: "BrewDog",
			text: "Stout - American Imperial"
		},
		{
			title: "Vintage Ale",
			sub: "Fuller's",
			text: "Old Ale"
		},
		{
			title: "All the Leaves are Brown",
			sub: "Tempest Brewing Company",
			text: "Brown Ale - American"
		},
	]
}

async function getData() {
    const main = document.querySelector(".main-container");
    let number = 1;
    for (const beer of beers.cards) {
        const card = document.createElement("div");
        card.className = "card";
        const cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardTitle.innerHTML = beer.title;
        card.appendChild(cardTitle);
        const cardMoreDetails = document.createElement("div");
        cardMoreDetails.innerHTML = '<p>' + beer.sub + '</p><p class="bold">' + beer.text + '</p><div class="circle">' + number + '</div><div class="button">' + beers.button + '<span class="material-symbols-outlined">arrow_forward</span></div>';
        card.appendChild(cardMoreDetails);
        main.appendChild(card);
        number++;
    }
}

window.addEventListener("load", getData);