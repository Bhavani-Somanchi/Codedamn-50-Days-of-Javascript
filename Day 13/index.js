const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	}

	// Your solution starts here

    var earthYears = seconds / 31557600;
    yearsInAllPlanets.Earth = parseFloat(earthYears.toFixed(2));

    yearsInAllPlanets.Mercury = parseFloat((earthYears / 0.2408467).toFixed(2));
    yearsInAllPlanets.Venus = parseFloat((earthYears /  0.61519726).toFixed(2));
    yearsInAllPlanets.Mars = parseFloat((earthYears / 1.8808158).toFixed(2));
    yearsInAllPlanets.Jupiter = parseFloat((earthYears / 11.862615).toFixed(2));
    yearsInAllPlanets.Saturn = parseFloat((earthYears / 29.447498).toFixed(2));
    yearsInAllPlanets.Uranus = parseFloat((earthYears / 84.016846).toFixed(2));
    yearsInAllPlanets.Neptune = parseFloat((earthYears / 164.79132).toFixed(2));



	// Your solution ends here

	return yearsInAllPlanets
}

console.log(spaceAge(Math.round(Math.random() * 99999999)))