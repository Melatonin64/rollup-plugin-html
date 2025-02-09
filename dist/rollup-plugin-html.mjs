import { createFilter } from '@rollup/pluginutils';
import { minify } from 'html-minifier';

function string(opts) {
	if ( opts === void 0 ) opts = {};

	if (!opts.include) {
		opts.include = '**/*.html'
	}

	var filter = createFilter(opts.include, opts.exclude);

	return {
		name: 'html',

		transform: function transform(code, id) {

			if (filter(id)) {
				var x = {
					code: ("export default " + (JSON.stringify(minify(code, opts.htmlMinifierOptions))) + ";"),
					map: { mappings: '' }
				};

				return x;
			}
		}
	};
}

export default string;