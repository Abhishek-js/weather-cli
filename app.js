const request = require('request')
const dotenv = require('dotenv').config()
const chalk = require('chalk')
const command = process.argv[2]
const url = `http://api.openweathermap.org/data/2.5/weather?q=${command}&units=metric&appid=${process.env.API_KEY}`

if(!command){return console.log(chalk.bold.blue('Please enter a city name'))}


request(url,(error,response,body) =>{
const data = JSON.parse(body)
console.log(chalk.bold.green('Its Currently ' + data.main.temp + ' degree Outside'))
})







