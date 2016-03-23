import test from 'ava';
global.Promise = Promise;
import execa from 'execa';

test(async t => {
	t.notThrows(execa('./cli.js', ['blue']));
});
