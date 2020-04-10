const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const cyan = chalk.cyan;

module.exports = meow(
	`
	Usage
	  ${green(`paddle-affiliate-link-generator`)} ${cyan(`<command>`)}

	Commands
	  ${cyan(`affiliateID`)}         Affiliate ID to generate a link for.

	Examples
	  ${green(`paddle-affiliate-link-generator`)} ${cyan(`111559`)}
`,
	{
		booleanDefault: undefined,
		hardRejection: false,
		inferType: false
	}
);
