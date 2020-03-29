exports.sendMessage = function(messages, obj, activity){
    for (index = 0; index < exercises.length; index++) {
        var schedule = require('node-schedule');
        var start_time = (activities[activity][index].start_time).split(':');
        var end_time = activities[activity][index].end_time;
        var date = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), start_time[0], start_time[1], 0);
        schedule.scheduleJob(date, function(){
            client.messages
                .create({
                body: exercises[index],
                from: '+1243',
                to: obj["Phone_number"] // Need to obtain caller's phone number                    
                })
            .then(message => console.log(message.sid));
        });
    }
}