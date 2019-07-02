function BrickWallPatterns (n) {
	if(n > 0) {
		if( n == 1 || n == 2) { 
			console.log(n)
		} else if( n > 2) {
		let a = 1;
		let b = 2;
		for( let i = 3; i<=n; i++) {
			let c = a+b;
			a=b;
			b=c;
		}
		console.log(b);
		} }
		 else { 
			console.log(n)
	}
}

BrickWallPatterns(8);