function checkStr (str) {
	var res = str.replace(/a|e|i|o|u|y/gi, "");
	return res
};

function AbstractName (realName, validName) {
	if( realName.split("").length == validName.split("").length) {
	const real = checkStr(realName).toLowerCase();
		const valid = checkStr(validName).toLowerCase();
		if( real == valid) {
			console.log("Yes");
		} else {
			console.log("No");
		}
	} else { console.log('No')}
}

AbstractName("pele", "polo");
AbstractName("pele", "pola");
AbstractName("ronaldo", "ronaldinio");
AbstractName("pele", "pelet");
AbstractName("pele", "bele");