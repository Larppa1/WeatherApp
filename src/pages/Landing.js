import React, { useEffect } from 'react'
import './Landing.css'
import { useWindowSize } from '@react-hook/window-size'
import { getWeather } from '../components/OpenWeather'
import Recent from '../components/Recent'

const key = '34a8d2bb710604c7ee3894ca66372107'
var data = {}
var id = 0
var location = ''

export default function Landing() {
    const [width, height] = useWindowSize()

    if(width < 600) {
        return(
            <div className='container'>
                <div className='header'>
                    <h1 className='weatherTitle'>Weather App</h1>
                </div>
                <div className='content'>
                    <div className='leftContent'>
                        <div className='searchContent'>
                            <input className='searchBar' id='searchBar' placeholder='Search...' onKeyPress={(e) => e.key === 'Enter' && setLocation()}/>
                            <button className='setBtn' onClick={setLocation}>Set location</button>
                        </div>
                    </div>
                    <div className='rightContent'>
                        <div className='right_1'>
                            <div className='weatherIconContainer'>
                                <img className='weatherIcon' src='https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png' alt=''></img>
                            </div>
                        </div>
                        <div className='right_2'>
                            <div className='locationInfoContainer'>
                                <h2 className='cityName' id='cityName'>Location name</h2>
                                <p className='cityInfo' id='cityInfo'>Country</p>
                            </div>
                            <div className='weatherInfoContainer'>
                                <p className='infoText'>Temperature: <span className='infoValue' id='temp'>-°C</span></p>
                                <p className='infoText'>Precipitation: <span className='infoValue' id='precip'>-</span></p>
                                <p className='infoText'>Humidity: <span className='infoValue' id='hum'>-%</span></p>
                                <p className='infoText'>Wind: <span className='infoValue' id='wind'>- m/s</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if(width >= 600 && width < 1000) {
        return(
            <div className='container'>
                <div className='header'>
                    <h1 className='weatherTitle'>Weather App</h1>
                </div>
                <div className='content'>
                    <div className='leftContent'>
                        <div className='searchContent'>
                            <input className='searchBar' id='searchBar' placeholder='Search...' onKeyPress={(e) => e.key === 'Enter' && setLocation()}/>
                            <button className='setBtn' onClick={setLocation}>Set location</button>
                        </div>
                    </div>
                    <div className='rightContent'>
                        <div className='right_1'>
                            <div className='weatherIconContainer'>
                                <img className='weatherIcon' src='https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png' alt=''></img>
                            </div>
                        </div>
                        <div className='right_2'>
                            <div className='locationInfoContainer'>
                                <h2 className='cityName' id='cityName'>Location name</h2>
                                <p className='cityInfo' id='cityInfo'>Country</p>
                            </div>
                            <div className='weatherInfoContainer'>
                                <p className='infoText'>Temperature: <span className='infoValue' id='temp'>-°C</span></p>
                                <p className='infoText'>Precipitation: <span className='infoValue' id='precip'>-</span></p>
                                <p className='infoText'>Humidity: <span className='infoValue' id='hum'>-%</span></p>
                                <p className='infoText'>Wind: <span className='infoValue' id='wind'>- m/s</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else {
        return(
            <div className='container'>
                <div className='header'>
                    <h1 className='weatherTitle'>Weather App</h1>
                </div>
                <div className='content'>
                    <div className='leftContent'>
                        <div className='searchContent'>
                            <input className='searchBar' id='searchBar' placeholder='Search...' onKeyPress={(e) => e.key === 'Enter' && setLocation()}/>
                            <button className='setBtn' onClick={setLocation}>Set location</button>
                        </div>
                        <div className='recentSearchContent' id='recentSearchContent'>
                            <h3 className='recentSearchTitle'>Recent:</h3>
                        </div>
                    </div>
                    <div className='rightContent'>
                        <div className='right_1'>
                            <div className='weatherIconContainer'>
                                <img className='weatherIcon' src='https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png' alt=''></img>
                            </div>
                        </div>
                        <div className='right_2'>
                            <div className='locationInfoContainer'>
                                <h2 className='cityName' id='cityName'>Location name</h2>
                                <p className='cityInfo' id='cityInfo'>Country</p>
                            </div>
                            <div className='weatherInfoContainer'>
                                <p className='infoText'>Temperature: <span className='infoValue' id='temp'>-°C</span></p>
                                <p className='infoText'>Precipitation: <span className='infoValue' id='precip'>-</span></p>
                                <p className='infoText'>Humidity: <span className='infoValue' id='hum'>-%</span></p>
                                <p className='infoText'>Wind: <span className='infoValue' id='wind'>- m/s</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const setLocation = async () => {
    location = document.getElementById('searchBar').value
    let cityName = document.getElementById('cityName')
    let cityInfo = document.getElementById('cityInfo')
    let temp = document.getElementById('temp')
    let precip = document.getElementById('precip')
    let hum = document.getElementById('hum')
    let wind = document.getElementById('wind')
    let dataList = []
    
    data = await getWeather(key, location)
    let i = 0;
    for(const item in data) {
        dataList[i] = item
        i++
    }

    cityName.innerHTML = data.name
    cityInfo.innerHTML = data.sys.country
    temp.innerHTML = data.main.temp.toPrecision(2) + '°C'
    precip.innerHTML = '-'
    hum.innerHTML = data.main.humidity + '%'
    wind.innerHTML = data.wind.speed.toPrecision(1) + ' m/s'
    
    await setRecent()
}

const setRecent = async () => {
    const recentSearchContent = document.getElementById('recentSearchContent')
    if(id === 3) {
        id--
        document.getElementById('recent0').remove()
        const recent1 = document.getElementById('recent1')
        const recent2 = document.getElementById('recent2')
        recent1.id = 'recent0'
        recent2.id = 'recent1'
    }
    const recent = document.createElement('div')
    recent.id = `recent${id}`
    recent.className = `recent${id}`
    localStorage.setItem(`recent${id}`, data.name)
    id++
    const recentText = document.createElement('p')
    recentText.className = 'recentText'
    recentText.id = 'recentText'
    recentText.innerHTML = localStorage.getItem(`recent${id-1}`)
    recentSearchContent.appendChild(recent)
    recent.appendChild(recentText)
}