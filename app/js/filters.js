'use strict';

/* Filters */

four51.app.filter('onproperty', function($451) {
	var defaults = {
		'OrderStats': 'Type',
		'Message': 'Box'
	};

	return function(input, query) {
		if (!input || input.length === 0) return;
		if (!query) return input;
		query.Property = query.Property || defaults[query.Model];
		return $451.filter(input, query);
	}
});

four51.app.filter('kb', function() {
	return function(value) {
		return isNaN(value) ? value : parseFloat(value) / 1024;
	}
});

four51.app.filter('noliverates', function() {
	return function(value) {
		var output = [];
		angular.forEach(value, function(v) {
			if (v.ShipperRateType != 'ActualRates')
				output.push(v);
		});
		return output;
	}
});

four51.app.filter('businesscardspecs', function() {
    return function(fields) {
        var results = [];
        angular.forEach(fields, function(f) {
            if (f.Name == 'Name' || f.Name == 'Title1' || f.Name == 'Address1' || f.Name == 'CityA' || f.Name == 'State' || f.Name == 'ZIP' || f.Name == 'Tel1'
                || f.Name == 'Tel2' || f.Name == 'Tel3' || f.Name == 'Email') {
                results.push(f);
            }
        });

        return results;
    }
});