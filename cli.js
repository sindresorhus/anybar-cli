#!/usr/bin/env node
'use strict';
const meow = require('meow');
const anybar = require('anybar');

const cli = meow(`
	Usage
	  $ anybar <status>

	Statuses
	  white red orange yellow green cyan blue purple black question exclamation quit

	Options
	  --port, -p  AnyBar.app port [Default: 1738]

	Example
	  $ anybar purple
`, {
	string: [
		'_'
	],
	alias: {
		p: 'port'
	}
});

if (!cli.input[0]) {
	console.error('Specify a status');
	process.exit(1);
}

anybar(cli.input[0], cli.flags);
