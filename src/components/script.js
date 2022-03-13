fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});