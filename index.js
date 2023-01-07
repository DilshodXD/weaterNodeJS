import getArgument from './helpers/args.js'
import { printError, printSuccess, printHelp } from "./services/log.service.js"
import { saveKeyValue, TOKEN_DICTIOARY } from './services/storage.service.js'
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

const startCli = () => {
  const args = getArgument(process.argv)
  if (args.h) {
    //help
    printHelp()
  }
  if (args.s) {
    //save city
  }
  if (args.t) {
    //save token
    return saveToken(args.t)
  }
  // result
  getWeather('uzbekistan')
}

startCli()