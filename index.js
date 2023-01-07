import getArgument from './helpers/args.js'
import { printError, printSuccess, printHelp, printWeather } from "./services/log.service.js"
import { getKeyValue, saveKeyValue, TOKEN_DICTIOARY } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist")
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIOARY.token, token)
    printSuccess("Token saved")
  } catch (error) {
    printError(error.message)
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError("City doesn't exist")
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIOARY.city, city)
    printSuccess("City saved")
  } catch (error) {
    printError(error.message)
  }
}

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIOARY.city))
    const response = await getWeather(city)
    // console.log(response);
    printWeather(response)
  } catch (error) {
    if (error?.response?.status == 404) {
      printError('City not found')
    } else if (error?.response?.status == 401) {
      printError('Invalid token')
    } else {
      printError(error.message)
    }
  }
}

const startCli = () => {
  const args = getArgument(process.argv)
  if (args.h) {
    //help
    return printHelp()
  }
  if (args.s) {
    //save city
    return saveCity(args.s)
  }
  if (args.t) {
    //save token
    return saveToken(args.t)
  }
  // result
  getForcast()
}

startCli()