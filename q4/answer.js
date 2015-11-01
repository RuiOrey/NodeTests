var fs = require( 'fs' ) ;

var filename = process.argv[ 2 ] ;

var array = fs.readFileSync( filename ).toString().split( "\n" );


function Q4(){

	for( i in array ) {

		var numbers = [];

		var line_array = array[ i ].toString().split( " " );

		for ( var j = line_array[0] ; j <= line_array[1] ; j++ ) {

			for ( var i = line_array[0] ; i <= line_array[1] ; i++ ) {

				numbers.push( Math.pow( j , i ) );
			
			}
		}

		//for each number in the array, only gets the first one to occur ( the output of indexOf )
		var uniqueNumbers = numbers.filter( function( elem, pos ) {

		    return numbers.indexOf( elem ) == pos;
		  
		}); 

		console.log ( uniqueNumbers.length );

	 }

}



Q4();

