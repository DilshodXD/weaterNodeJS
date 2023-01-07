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
    -t [API_KEY] for saving token
  `);
}

const printWeather = (res, icon) => {
  console.log(dedent`
    ${chalk.yellowBright('WEATHER')} City weather ${res.name}
    ${icon} ${res.weather[0].description}
    Temporature ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity ${res.main.humidity}%
    Wind speed: ${res.wind.speed} km/h
  `);
}

export { printError, printSuccess, printHelp, printWeather }