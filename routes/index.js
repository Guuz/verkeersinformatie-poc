var request = require('request')

/*
 * GET home page.
 */

exports.index = function(req, res, next){

	var options = {
		uri: 'http://verkeerstatic.anwb.nl/ANWBMap/anwb/GetStatsJSON?country=NL'
	}

	request.get( options, function( err, response, responseBody ) {
		if( err ) {
			console.error('Fout bij ophalen.' + response.statusCode);
			return next( new Error( err ) );
		}

		if( response.statusCode === 200 && responseBody ) {
			var feed = JSON.parse( responseBody );
			res.render('index', feed);
			return;
		}

		console.error('Fout bij ophalen. ' + response.statusCode);
		return next( new Error('Verkeerde statuscode of geen ontvangen body. statuscode: ' + response.statusCode) );
	});


};
