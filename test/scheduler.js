const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const client = require('twilio')(accountSid, authToken);

exports.sendMessage = function(messages, activity_array, obj){
    for (index = 0; index < activity_array.length; index++) {
        var schedule = require('node-schedule');
        var start_time = (activity_array[index].start_time).split(':');
        var currentTime = new Date();
        var date = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), parseInt(start_time[0]), parseInt(start_time[1]), 0);
        var x = messages[index];
        var j = schedule.scheduleJob(date, function(y){
            console.log("The world is going to end!");
            client.messages
                .create({
                body: y,
                from: '+12547813211',
                to: obj.Phone_number // Need to obtain caller's phone number                    
                })
            .then(message => console.log(message.sid));
        }.bind(null,x));

        console.log(j);
    }
}