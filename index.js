const sass = require( 'node-sass' );
// const path = require( 'path' );

function sassFile( input, options ) {
	options = options || {};
	options.data = input;

	/* TODO: source maps not working with file transformer :( */

	// const useSourceMaps = options.sourceMap !== false;
	
	// if ( useSourceMaps ) {
	// 	// by default, generate sourcemaps and include comments
	// 	options.outFile = this.dest;
	// 	options.sourceMap = options.outFile + '.map';
	// 	options.sourceMapRoot = path.dirname( options.outFile );
	// 	options.sourceMapContents = options.sourceMapContents !== false;
	// }
	
	// const out = sass.renderSync(options);
	// const result = useSourceMaps ? { code: out.css.toString(), map: out.map.toString() } : out.css;
	// return result;

	return sass.renderSync(options).css;

}

sassFile.defaults = {
	accept: ['.scss', '.sass'],
	ext: '.css'
};

module.exports = sassFile;