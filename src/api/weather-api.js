import axios from "axios";

export async function getWeatherForeCast(){
   const resp =  await axios.get("https://rspintelligentsubmissionsdev-dev.azurewebsites.net/WeatherForecast");
   return resp.data;
}