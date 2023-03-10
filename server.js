const express = require('express')
const app = express()
const PORT = 8000

const songs = {
    'ibenji': {
        'title': 'Hellraiser (Davip Remix)',
        'datePlayed': '10/31/22',
        'genre': 'Breakbeat',
        'url': 'https://soundcloud.com/davip/ibenji-hellraiser-davip-remix-rottun-records-out-now'
    },
    'voltem': {
        'title': 'Halloween (A Dead By Daylight Shape Remix)',
        'datePlayed': '10/31/22',
        'genre': 'Drum and Bass',
        'url': 'https://soundcloud.com/user-489602255/voltem-halloween-a-dead-by-daylight-the-shape-remix'
    },
    'unknown': {
        'title': 'N/A',
        'dateplayed': 'N/A',
        'genre': 'N/A',
        'url': 'N/A'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const songName = request.params.name.toLowerCase()
    if(songs[songName]){
        response.json(songs[songName])
    }else {
        response.json(songs['unknown'])
    }    
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})