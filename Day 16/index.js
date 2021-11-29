function hey(message) {
	// Code here

    var check = message.toUpperCase();
    if(message.endsWith("?"))
    {
        if(message === check)
        return "'Calm down, I know what I'm doing!";

        return "Sure.";
    }

    if(check.trim() === "")
    return "Fine. Be that way!";

    if(message === check)
    return "Whoa, chill out!";

	return "Whatever.";
}

console.log(hey(""));