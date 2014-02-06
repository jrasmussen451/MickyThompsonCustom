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
        var text = {
            'Address1': 'Address',
            'Tel1': 'Telephone 3',
            'Tel2': 'Telephone 2',
            'Tel3': 'Telephone 1',
            'Title1': 'Title',
            'ZIP': 'Zip'
        }
        var results = [];
        angular.forEach(fields, function(f) {
            f.Name = text[f.Name] || f.Name;
            if (f.Name == 'Name' || f.Name == 'Title' || f.Name == 'Address' || f.Name == 'City' || f.Name == 'State' || f.Name == 'Zip' || f.Name == 'Telephone 1'
                || f.Name == 'Telephone 2' || f.Name == 'Telephone 3' || f.Name == 'Email') {
                results.push(f);
            }

        });

        return results;
    }
});