const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const client = require('twilio')(accountSid, authToken);

var msg = require('./scheduler.js')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    var obj = req.body;
    console.log(obj);
    var activities = obj.Activity;
    console.log(activities)

    if (!Array.isArray(activities["Exercise"]) || activities["Exercise"].length != 0) {
        var exercise = require('./activity_modules/exercise.js');
        var exercises = exercise.getExercise(activities["Exercise"]);
        console.log(exercises);
        msg.sendMessage(exercises, activities["Exercise"], obj );
    }

    if (!Array.isArray(activities["Art"]) || activities["Art"].length != 0) {
        var art = require('./activity_modules/art.js');
        var arts = art.getArt(activities["Art"]);
        msg.sendMessage(arts, activities["Art"], obj);
    }

    if (!Array.isArray(activities["Cooking"]) || activities["Cooking"].length != 0) {
        var cooking = require('./activity_modules/cooking.js');
        var cookings = cooking.getCooking(activities["Cooking"]);
        msg.sendMessage(cookings, activities["Cooking"], obj);
    }

    if (!Array.isArray(activities["Language"]) || activities["Language"].length != 0) {
        var language = require('./activity_modules/language.js');
        var languages = language.getLanguage(activities["Language"]);
        msg.sendMessage(languages, activities["Language"], obj);
    }

    if (!Array.isArray(activities["Music"]) || activities["Music"].length != 0) {
        var music = require('./activity_modules/music.js');
        var musics = music.getMusic(activities["Music"]);
        msg.sendMessage(musics, activities["Music"], obj);
    }
  
})

http.createServer(app).listen(3000,() => {
    console.log('Express server listening on port 3000');
})