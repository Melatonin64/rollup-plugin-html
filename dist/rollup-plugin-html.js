'use strict';

var _rollup_pluginutils = require('@rollup/pluginutils');
var htmlMinifier = require('html-minifier');

function string(opts) {
	if ( opts === void 0 ) opts = {};

	if (!opts.include) {
		opts.include = '**/*.html'
	}

	var filter = _rollup_pluginutils.createFilter(opts.include, opts.exclude);

	return {
		name: 'html',

		transform: function transform(code, id) {

			if (filter(id)) {
				var x = {
					code: ("export default " + (JSON.stringify(htmlMinifier.minify(code, opts.htmlMinifierOptions))) + ";"),
					map: { mappings: '' }
				};

				return x;
			}
		}
	};
}

module.exports = string;