const needsLicense = (kind) => {
	// code here

    if(kind.match("car") || kind.match("truck"))
    return true;

	return false;
}

const chooseVehicle = (option1, option2) => {
	// code here
    if(option1.localeCompare(option2) > 0)
    return option2  + " is clearly the better choice.";

	return option1  + " is clearly the better choice.";
}

const calculateResellPrice = (originalPrice, age) => {
	// code here

    var sellingPrice = 0;
    if(age < 3)
    sellingPrice = Math.floor(80 * originalPrice / 100);

    else if(age >= 3 && age <= 10)
    sellingPrice = Math.floor(70 * originalPrice / 100);

    else
    sellingPrice = Math.floor(50 * originalPrice / 100);

	return sellingPrice;
}
console.log(calculateResellPrice(1000, 5))
