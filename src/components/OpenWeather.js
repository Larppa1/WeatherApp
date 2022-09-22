export async function getWeather(key, location) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&lang='en'&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    return data
}