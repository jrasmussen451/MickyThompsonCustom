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
            'StateA': 'State'
        }
        var results = [];
        angular.forEach(fields, function(f) {
            f.Name = text[f.Name] || f.Name;
            if (f.Name == 'State'){
                results.push(f);
            }

        });

        return results;
    }
});
four51.app.filter('businesscardspecs1', function() {
    return function(fields) {
        var text = {
            'Teltype1': 'Type 1'
        }
        var results = [];
        angular.forEach(fields, function(f) {
            f.Name = text[f.Name] || f.Name;
            if (f.Name == 'Type 1'){
                results.push(f);
            }

        });

        return results;
    }
});
four51.app.filter('businesscardspecs2', function() {
    return function(fields) {
        var text = {
            'Teltype2': 'Type 2'
        }
        var results = [];
        angular.forEach(fields, function(f) {
            f.Name = text[f.Name] || f.Name;
            if (f.Name == 'Type 2'){
                results.push(f);
            }

        });

        return results;
    }
});
four51.app.filter('businesscardspecs3', function() {
    return function(fields) {
        var text = {
            'Teltype3': 'Type 3'
        }
        var results = [];
        angular.forEach(fields, function(f) {
            f.Name = text[f.Name] || f.Name;
            if (f.Name == 'Type 3'){
                results.push(f);
            }

        });

        return results;
    }
});