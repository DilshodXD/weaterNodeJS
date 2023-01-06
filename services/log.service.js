import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (err) => {
  console.log(chalk.bgRed("ERROR" + ' ' + err));
}

const printSuccess = (succes) => {
  console.log(chalk.bgYellow("SUCCESS" + ' ' + succes));
}

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgBlue('HELP')}
    -s [CITY] for install city
    -h [HELP] for help
    -h [API_KEY] for saving token
  `);
}

export { printError, printSuccess, printHelp }