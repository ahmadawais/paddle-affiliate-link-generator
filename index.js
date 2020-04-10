#!/usr/bin/env node

const cli = require('./utils/cli.js');
const init = require('./utils/init.js');
const theEnd = require('./utils/theEnd.js');
const handleError = require('cli-handle-error');
const clipboardy = require('clipboardy');
const to = require('await-to-js').default;
const sym = require('log-symbols');

// CLI.
const [affiliateID] = cli.input;
const affiliateLink = `https://a.paddle.com/v2/click/16413/${affiliateID}?link=1227`;

(async () => {
	init();
	const [err, res] = await to(clipboardy.write(affiliateLink));
	handleError(`CLIPBOARD`, err);
	console.log(`${sym.info} Copied to your clipboard:`);
	console.log(affiliateLink);
	theEnd();
})();
