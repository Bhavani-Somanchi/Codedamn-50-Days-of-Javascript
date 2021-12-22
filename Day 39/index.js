const timeToMixJuice = (name) => {
	// code here

    if(name.match("Pure Strawberry Joy"))
    return 0.5;

    if(name.match("Energizer") || name.match("Green Garden"))
    return 1.5;

    if(name.match("Tropical Island"))
    return 3;

    if(name.match("All or Nothing"))
    return 5;

	return 2.5
}

const limesToCut = (wedgesNeeded, limes) => {
	// code here

    var ans = 0;
    let i = 0;
    while(i < limes.length && ans < wedgesNeeded)
    ans += numberOfWedges(limes[i++]);

	return i;
}

const numberOfWedges = (lime) => {

    if(lime.match("small"))
    return 6;

    if(lime.match("medium"))
    return 8;

    return 10;
}

const remainingOrders = (timeLeft, orders) => {
	// code here
    var time = 0;
    let i = 0;
    while(i < orders.length && time < timeLeft)
    {
        time += timeToMixJuice(orders[i++]);
        orders.splice(0,1);
    }

	return orders
}

console.log(limesToCut(12, ['small', 'small', 'large', 'medium', 'small']));
