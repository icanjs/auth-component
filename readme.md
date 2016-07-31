# auth-component

[![Build Status](https://travis-ci.org/icanjs/auth-component.png?branch=master)](https://travis-ci.org/icanjs/auth-component)

Simple authentication utilities for DoneJS

Find docs for the old version here: https://github.com/marshallswain/auth-component

![auth-component UI](auth-component.jpg)

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'auth-component';
```

### CommonJS use

Use `require` to load `auth-component` and everything else
needed to create a template that uses `auth-component`:

```js
var plugin = require("auth-component");
```

## AMD use

Configure the `can` and `jquery` paths and the `auth-component` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'auth-component',
		    	location: 'node_modules/auth-component/dist/amd',
		    	main: 'lib/auth-component'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/auth-component/dist/global/auth-component.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
