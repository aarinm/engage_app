const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const authToken = process.env.TWILIO_ACCOUNT_SID;
const accountSid = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

var msg = require('./scheduler.js')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    console.log(req.body); // JSON
    var obj = JSON.parse(req.body);
    var activities = obj.Activity;

    if (activities["Exercise"] != null) {
        var exercise = require('./activity_modules/exercise.js');
        var exercises = exercise.getExercise(activities["Exercise"]);
        msg.sendMessage(exercises, req.body, "Exercise" );
    }

    if (activities["Art"] != null) {
        var art = require('./activity_modules/art.js');
        var arts = art.getArt(activities["Art"]);
        msg.sendMessage(arts, req.body, "Art");
    }

    if (activities["Cooking"] != null) {
        var cooking = require('./activity_modules/cooking.js');
        var cookings = cooking.getCooking(activities["Cooking"]);
        msg.sendMessage(cookings, req.body, "Cooking");
    }

    if (activities["Language"] != null) {
        var language = require('./activity_modules/language.js');
        var languages = language.getLanguage(activities["Language"]);
        msg.sendMessage(languages, req.body, "Language");
    }

    if (activities["Music"] != null) {
        var music = require('./activity_modules/music.js');
        var musics = music.getMusic(activities["Music"]);
        msg.sendMessage(musics, req.body, "Music");
    }
  
})

http.createServer(app).listen(3000,() => {
    console.log('Express server listening on port 3000');
})