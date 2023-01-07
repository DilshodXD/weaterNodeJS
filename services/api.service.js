import axios from 'axios'
import { getKeyValue, TOKEN_DICTIOARY } from './storage.service.js'

const getWeather = async (city) => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const token = await getKeyValue(TOKEN_DICTIOARY.token)
  console.log(token);
  if (!token) {
    throw new Error(`API dose not exist,
     -t [API_KEY] for saving token`)
  }

  const {data} = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      appid: token,
      lang: "en",
      units:'metric'
    }
  })
  return data
  // console.log(response.data);
}

export { getWeather };