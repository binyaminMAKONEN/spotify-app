const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.post('/login',(req, res) =>{
    const code=req.body.code;
  const spotifyApi = new SpotifyWebApi({
    clientId: '50c66722fae74cfa992960850b485c9e',
    clientSecret: 'a0f2726ca86146e483d79dbbc0c44f69',
    redirectUri: 'http://localhost:3000'
  
  })
  spotifyApi.authorizationCodeGrant(code).then(data=>{
    res.json({
        accessToken:data.body.access_token,
        refreshToken:data.body.refresh_token,
        expiresIn:data.body.expires_in
    })
  }).catch((err)=>{ 
    console.log("this:" ,err);
    res.sendStatus(400)})
})
app.listen(3001)