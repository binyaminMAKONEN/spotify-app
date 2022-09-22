const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
app.use(cors())
app.use(bodyParser.json())


app.post("/refresh",(req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
  clientId: '391d1235afa54e04aa06774a0bbd8e78',
  clientSecret: '51f6f8b9a495452fb7107b499d418868',
  refreshToken
})
spotifyApi
.refreshAccessToken()
.then(data => {
  console.log(data.body);
  res.json({
    accessToken: data.body.accessToken,
    expiresIn: data.body.expiresIn,
  })
})
.catch(err => {
  console.log(err)
  res.sendStatus(400)
})
})


app.post('/login',(req, res) =>{
    const code=req.body.code;
  const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000',
    clientId: '391d1235afa54e04aa06774a0bbd8e78',
    clientSecret: '51f6f8b9a495452fb7107b499d418868',
  
  })
  spotifyApi.authorizationCodeGrant(code).then(data=>{
    res.json({
        accessToken:data.body.access_token,
        refreshToken:data.body.refresh_token,
        expiresIn:data.body.expires_in
    })
  }).catch((err)=>{ 
    console.log('nvvvv');
    console.log("this:" ,err);
    res.sendStatus(400)})
})
app.listen(3001)

