#!/usr/bin/env node
import meow from 'meow';
import anybar from 'anybar';

const cli = meow(`
	Usage
	  $ anybar <status>

	Statuses
	  white red orange yellow green cyan blue purple black question exclamation quit

	Options
	  --port -p  AnyBar app port [Default: 1738]

	Example
	  $ anybar purple
`, {
	flags: {
		port: {
			type: 'number',
			alias: 'p'
		}
	}
});

if (cli.input.length === 0) {
	console.error('Specify a status');
	process.exit(1);
}

anybar(cli.input[0], cli.flags);
