import axios from 'axios'
import { getKeyValue, TOKEN_DICTIOARY } from './storage.service.js'

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIOARY.token)
  console.log(token);
  if (!token) {
    throw new Error(`API dose not exist,
     -t [API_KEY] for saving token`)
  }

  const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      appid: token,
      lang: "en",
      units: 'metric'
    }
  })
  return data
}

export { getWeather };