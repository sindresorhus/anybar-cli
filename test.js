import test from 'ava';

global.Promise = Promise;
const execa = require('execa');

test(async t => {
	t.notThrows(execa('./cli.js', ['blue']));
});
