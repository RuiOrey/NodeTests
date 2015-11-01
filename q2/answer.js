var fs = require( 'fs' ) ;

var filename = process.argv[ 2 ] ;

var array = fs.readFileSync( filename ).toString().split( "\n" );



 
function Q2() {

	function count(  coins , m, n ) {

	    if ( n == 0 )
	        return 1;
	     
	    if ( n < 0 )
	        return 0;
	 
	    
	    if ( m <= 0 && n >= 1 )
	        return 0;
	 
	   return count( coins, m - 1, n ) + count( coins , m , n - coins[ m-1 ] );

	}

	var coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ];
   
   	var m = coins.length ;

   	for( i in array ) {

   		if( array[ i ] !== "" )

	   		console.log( count(coins, m, array[ i ] ) );

   }
}

Q2();





