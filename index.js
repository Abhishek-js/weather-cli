const request = require('request')
const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f0700b0f60c0d329db89ef0f4520a211'
request(url,(error,response) => {
    console.log(response)
})
