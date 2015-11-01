var fs = require( 'fs' ) ;

var filename = process.argv[ 2 ] ;

var array = fs.readFileSync( filename ).toString().split( "\n" );


function Q1() {

	for( i in array ) {

	    var line_array = array[ i ].toString().split( " " );

	    var initial_position = line_array.length - 1;

	    var new_line = "";

	    for ( j in line_array ) {

	    	 new_line += line_array[ initial_position - j ] + ( j == initial_position ? "" : " " ) ;

	    }

	    console.log( new_line );  

	}

}

Q1();