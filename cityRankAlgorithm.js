// Schema Description
// happiness:                 range [29.19 to 72.30] higher == better
// wellbeing:                 range [1 to 182] lower == better
// income_and_employment:     range [1 to 182] lower == better
// community_and_environment: range [1 to 182] lower == better

let cityMetrics = [
	{"Plano, TX": {"happiness": 72.30, "wellbeing": 7, "income_and_employment": 6, "community_and_environment": 8 }},
	{"Irvine, CA": { "happiness": 71.86, "wellbeing": 14, "income_and_employment": 11, "community_and_environment": 5 }},
	{"Madison, WI": { "happiness": 71.81, "wellbeing": 3, "income_and_employment": 14, "community_and_environment": 7 }},
	{"Fremont, CA": { "happiness": 71.17, "wellbeing": 10, "income_and_employment": 37, "community_and_environment": 1 }},
	{"Huntington Beach, CA": { "happiness": 69.74, "wellbeing": 6, "income_and_employment": 46, "community_and_environment": 28 }},
	{"Charleston, WV": { "happiness": 39.68, "wellbeing": 180, "income_and_employment": 65, "community_and_environment": 93 }},
	{"Toledo, OH": { "happiness": 39.48, "wellbeing": 177, "income_and_employment": 171, "community_and_environment": 148 }},
	{"Detroit, MI": { "happiness": 29.19, "wellbeing": 181, "income_and_employment": 181, "community_and_environment": 181}}
];


$("#happy-button").on("click", function(beHappier){
    beHappier.preventDefault();

    //Take in the user input
    var happyOne = $("#happy").val().trim();

    console.log(happyOne);
	alert("You have a happiness level of " + happyOne);

	//Figure out how to iterate the array so that you can get the best city for you
	for(var goodCity = 0; goodCity < cityMetrics.length; goodCity++){
			let cityKey = Object.keys(cityMetrics[goodCity]);
			console.log(cityKey);

			let prefs = cityMetrics[goodCity][cityKey];
			console.log(prefs["happiness"]);

			prefs["distance"] = Math.abs(prefs["happiness"]-happyOne).toFixed(2);
			console.log(prefs.distance);
	}

	// sort by distance
	var citySort = cityMetrics.sort(function (a, b) {
		var keyA = Object.keys(a); 
		var keyB = Object.keys(b);

		console.log(keyA);
		console.log(keyB);

		let distanceA = Number(a[keyA].distance);
		let distanceB = Number(b[keyB].distance); 

		console.log(typeof(distanceA));
		console.log(typeof(distanceB));

		console.log("distanceA", distanceA);
		console.log("distanceB", distanceB);
				

		if(distanceA > distanceB){
			return -1;
		}
		if(distanceA < distanceB){
			return 1;
		}
		return 0; 
	});

	console.log("Sorted distance: " + citySort);

});