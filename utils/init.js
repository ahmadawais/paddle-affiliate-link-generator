const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const pkgJSON = require('./../package.json');
const updateNotifier = require('update-notifier');
const unhandledError = require('cli-handle-unhandled');

module.exports = async () => {
	unhandledError();
	checkNode(`12`);
	welcome(
		`paddle-affiliate-link-generator`,
		`by Awais.dev\n${pkgJSON.description}`,
		{
			bgColor: `#0097FF`,
			color: `#FFFFFF`,
			bold: true,
			clear: true,
			version: `v${pkgJSON.version}`
		}
	);
	updateNotifier({
		pkg: pkgJSON,
		shouldNotifyInNpmScript: true,
		updateCheckInterval: 1000 * 60 * 60 * 24 * 7 // 1 week.
	}).notify({isGlobal: true});
};
