const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const authToken = process.env.TWILIO_ACCOUNT_SID;
const accountSid = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

var response = require('./workout.js');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    console.log(req.body); // JSON
    var obj = JSON.parse(req.body);
    var activities = obj.Activity;

    if (activities["Exercise"] != null) {
        var exercises = response.getExercise(activities["Exercise"]);
        for (index = 0; index < exercises.length; index++) {
            var schedule = require('node-schedule');
            var start_time = (activities["Exercises"][index].start_time).split(':');
            var end_time = activities["Exercises"][index].end_time;
            var date = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), start_time[0], start_time[1], 0);
            schedule.scheduleJob(date, function(){
                client.messages
                    .create({
                    body: exercises[index],
                    from: '+1243',
                    to: '2132132' // Need to obtain caller's phone number                    
                    })
                .then(message => console.log(message.sid));
            });
        }
    }

   if (req.body.Body.includes("exercise")) {
     var1 = ('Here is a workout you might like: ');
     var2 = response.getExercise();
     var1 = var1.concat(var2);
     twiml.message(var1);
   } else if (req.body.Body.includes('music')) {
       var1 = ('Here is a song you might like: ');
       var2 = response.getMusic();
       var1 = var1.concat(var2);
       twiml.message(var1);
   } else {
    twiml.message(
        'No Body param match, Twilio sends this in the request to your server.'
      );
   }

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
})

http.createServer(app).listen(3000,() => {
    console.log('Express server listening on port 3000');
})