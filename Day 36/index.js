const transcription = (dna) => {
	// code here
    var newStr = "";

    for(let i = 0; i < dna.length; i++)
    newStr += complement(dna.charAt(i));

	return newStr;
}

function complement(ch)
{
    if(ch == 'G')
    return 'C';

    if(ch == 'C')
    return 'G';

    if(ch == 'T')
    return 'A';

    return 'U';
}

console.log(transcription('GCT'));
