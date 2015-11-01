var fs = require( 'fs' ) ;

var calendar = require('node-calendar');

var filename = process.argv[ 2 ] ;

var array = fs.readFileSync( filename ).toString().split( "\n" );



function Q3(){

	var cal = new calendar.Calendar();

   	for( i in array ) {

   		var five_sundays_months = 0;
   		
	    var line_array = array[ i ].toString().split( " " );

		var years = [ line_array[ 1 ] , line_array[ 3 ] ];

		var months = [ calendar[ line_array[ 0 ].toUpperCase() ] , calendar[ line_array[ 2 ].toUpperCase() ] ];

		var year_shift = years[ 1 ] - years[ 0 ];

		var month_shift = months[ 0 ] <= months[ 1 ] ? months[ 1 ] - months[ 0 ] : ( months[ 1 ] + 12 ) - months[ 0 ];

		var total_months = month_shift + ( year_shift > 0 ? ( ( year_shift ) * 12 ) : 0 ) ; 

		var actual_month = months[ 0 ] ;

		var actual_year = years[ 0 ] ;

	    for ( var j = 0 ; j <= total_months; j++ ) {

		   	//gets all weeks and days for each month
		   	var monthCalendar = cal.monthdays2calendar( actual_year , actual_month );

		   	var sundays = 0;

		   	for ( week in monthCalendar ) {

		   		//gets the day of the month of sunday ( 6 day ) and checks if is not 0
		   		if ( monthCalendar[week][6][0] !== 0 ) {

		   				sundays++;

			   		}


		   	}

		   	if ( sundays === 5) {

		   		five_sundays_months++;

		   	}

		   	actual_month++;

		   	//changing year
		   	if ( actual_month > 12 ) {

		   		actual_month = 1;

		   		actual_year ++ ;
		   	}

	    }

   console.log(  five_sundays_months );

   }

}

Q3();

