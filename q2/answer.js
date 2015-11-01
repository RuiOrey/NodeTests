var fs = require( 'fs' ) ;

var filename = process.argv[ 2 ] ;

var array = fs.readFileSync( filename ).toString().split( "\n" );
 
function Q2() {

	//recursive function to count the coins
	//coins - possible coins array
	//m - number of possible coins
	function count(  coins , number_coins, money_left ) {

		//if the money left is 0, so we have a valid coin combination
	    if ( money_left == 0 )
	        return 1;
	    
	    // if the money left is less than 0, this combination needs too much coins
	    if ( money_left < 0 )
	        return 0;
	 
	    // if there is no coins and there is money to convert
	    if ( number_coins <= 0 && money_left >= 1 )
	        return 0;
	 
	 	//returns the count of coins left, by building a tree where decreases the actual index of the coin in the coins set and sums it to the tree count build after removing a coin ( number_coins -1 ) of the money left
	   	return count( coins, number_coins - 1, money_left ) + count( coins , number_coins , money_left - coins[ number_coins - 1 ] );

	}

	//universe of possible coins
	var coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ];
   
   	var number_coins = coins.length ;

   	//for all lines of the input
   	for( i in array ) {

   		if( array[ i ] !== "" )

	   		console.log( count(coins, number_coins, array[ i ] ) );

   }
}

Q2();





