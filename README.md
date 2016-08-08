# gobble-sass-file

File-level trasformer plugin for `scss` and `sass`. Unlike [gobble-sass](https://github.com/gobblejs/gobble-sass)
combines all `scss` or `sass` files into a single `css` file, this plugin does a 1-to-1 transformation
that also can use includes and imports.

Primary use is for component-level css where you want to write `sass` or `scss` but want to keep
the output `css` separated on a per-file basis.

## Installation

First, you need to have gobble installed - see 
the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-flatten
```

## Usage

**gobblefile.js**

```js
const components = gobble('src/components')
	.transform( sass, {
        // you can still use common include paths:
		includePaths: [ join(process.cwd(), 'src/scss/include') ]
	})
	.transform('babel', {
		sourceMaps: true,
		blacklist: ['es6.modules', 'strict']
	})
	.transform( makeComponent )
	.transform('ractive', { type: 'es6' });
```


## Tests

Uses [gobble-test](https://github.com/gobblejs/gobble-test) example based testing. Run via:

```bash
npm test
```

## License

[MIT](https://opensource.org/licenses/MIT). Copyright 2016 Marty Nelson
