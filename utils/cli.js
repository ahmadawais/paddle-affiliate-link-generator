const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;
const dim = chalk.dim;

module.exports = meow(
	`
	Usage
	  ${green(`paddle-affiliate-link-generator`)} ${cyan(`<command>`)} ${yellow(`[--option]`)}

	Commands
	  ${cyan(`command`)}         Description

	Options
	  ${yellow(`--option`)}, ${yellow(`-o`)}         Description

	Examples
	  ${green(`paddle-affiliate-link-generator`)} ${cyan(`command`)}
	  ${green(`paddle-affiliate-link-generator`)} ${yellow(`--option`)}

	❯ You can also run command + option at once:
	  ${green(`paddle-affiliate-link-generator`)} ${cyan(`command`)} ${yellow(`-o`)}
`,
	{
		booleanDefault: undefined,
		hardRejection: false,
		inferType: false,
		flags: {
			option: {
				type: 'boolean',
				default: false,
				alias: 'o'
			}
		}
	}
);
