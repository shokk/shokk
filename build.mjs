// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
const data = {
	name: chalk.white('Ernest Oporto'),
	handle: chalk.white('shokk'),
	work: chalk.white('Principal Security Engineer at Vitech Systems Group (o_0)'),
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan('shokk'),
	mastodon: chalk.gray('https://masto.ai/') + chalk.magenta('@shokk'),
        bluesky: chalk.cyan('@ernieoporto.shokk.com'),
	github: chalk.gray('https://github.com/') + chalk.green('shokk'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('eoporto'),
	web: chalk.cyan('https://www.shokk.com'),
	npx: `${chalk.red('npx')} ${chalk.white('shokk')}`,
	labelWork: chalk.white.bold('    Work:'),
	labelTwitter: chalk.white.bold(' Twitter:'),
	labelMastodon: chalk.white.bold('Mastodon:'),
	labelBluesky: chalk.white.bold(' Bluesky:'),
	labelGitHub: chalk.white.bold('  GitHub:'),
	labelLinkedIn: chalk.white.bold('LinkedIn:'),
	labelWeb: chalk.white.bold('     Web:'),
	labelCard: chalk.white.bold('    Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const primary = chalk.hex('#36D1DC');    // Vibrant teal for borders
const secondary = chalk.hex('#FF6B6B');  // Coral pink for brackets
const accent = chalk.hex('#58D68D');     // Bright green for URLs
const subtle = chalk.hex('#AEB6BF');     // Subtle gray for dividers
const highlight = chalk.hex('#FFDB58').bold; // Golden yellow for name
const heading = ' ' + secondary('{') + highlight(`${data.name}`) + secondary('}') + ' ' + primary('</') + accent(`${data.handle}`) + primary('>');
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`;
const blueskying = `${data.labelBluesky}  ${data.bluesky}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + // data.name + data.handle
	newline +
	newline + // Add one whole blank line
	working +
	newline + // data.labelWork + data.work
	twittering +
	newline + // data.labelTwitter + data.twitter
	mastodoning +
	newline + // data.labelTwitter + data.twitter
	blueskying +
	newline + // data.labelBluesky + data.bluesky
	githubing +
	newline + // data.labelGitHub + data.github
	linkedining +
	newline + // data.labelLinkedIn + data.linkedin
	webing +
	newline +
	newline + // data.labelWeb + data.web
	carding; // data.labelCard + data.npx

writeFileSync(
	join(import.meta.dirname, 'output'),
	chalk.green(boxen(output, options)),
);
