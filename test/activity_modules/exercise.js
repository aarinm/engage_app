exports.getExercise = function(array) {
    messages = [];
    array.forEach(function (item, index) {
        if (item.name == "yoga") {
            var link = yoga();
            var res = "Want to do some yoga? Check this out: ".concat(link);
            messages.push(res);
        }
        
        if (item.name == "calisthenics") {
            var link = calisthenics();
            var res = "Here is a calisthenics workout for you try: ".concat(link);
            messages.push(res);
        }

        if (item.name == "cardio") {
            var link = cardio();
            var res = "Stay healthy by doing some cardio: ".concat(link);
            messages.push(res);
        }

        if (item.name == "circuits") {
            var link = circuits();
            var res = "Here are some circuit workouts to get your heart rate up: ".concat(link);
            messages.push(res);
        }

        if (item.name == "losing_weight") {
            var link = losing_weight();
            var res = "Burn fat with these exercises: ".concat(link);
            messages.push(res);
        }
        
        if (item.name == "gaining_muscle") {
            var link = gaining_muscle();
            var res = "Make some gains with these workouts: ".concat(link);
            messages.push(res);
        }
         
    })
    return messages; // Returns array of string messages
  
}

exports.getRandom = function(){
  var rand;
  array = ["yoga", "calisthenics", "cardio", "circuits", "losing weight", "gaining muscle"];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  if (randomElement === 'yoga'){
    var link = yoga();
    rand = "Want to do some yoga? Check this out: ".concat(link);
  }
  else if (randomElement === 'calisthenics'){
    var link = calisthenics();
    rand = "Here is a calisthenics workout for you try: ".concat(link);
  }
  else if (randomElement === 'cardio'){
    var link = cardio();
    rand = "Stay healthy by doing some cardio: ".concat(link);
  }
  else if (randomElement === 'circuits'){
    var link = circuits();
    rand = "Here are some circuit workouts to get your heart rate up: ".concat(link);
  }
  else if (randomElement === 'losing weight'){
    var link = losing_weight();
    rand = "Burn fat with these exercises: ".concat(link);
  }
  else{
    var link = gaining_muscle();
    rand = "Make some gains with these workouts: ".concat(link);
  }
  return rand;
}

yoga = function(){
  array = ["https://youtu.be/v7AYKMP6rOE", "https://www.youtube.com/watch?v=uC2Q6KynZi8", "https://www.youtube.com/watch?v=S9p5yhE6_fk" ];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

calisthenics = function(){
  array = ["https://youtu.be/qyH6wcgmMlI", "https://youtu.be/d0C3_60obdc", "https://youtu.be/smPAPSJ4vF4", "https://youtu.be/EUXGdQadwao"];
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement; 
}

cardio = function(){
    array = ["https://youtu.be/-YJXpabrX4k", "https://youtu.be/8JpKOczCPHU", "https://youtu.be/05fCNM9f0ic" ];
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement; 
}

circuits = function(){
    array = ["https://youtu.be/l0gDqsSUtWo", "https://youtu.be/TkaYafQ-XC4", "https://youtu.be/UBMk30rjy0o"];
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement; 
}

losing_weight = function() {
    array = ["https://youtu.be/H3jJ29oE8Zg", "https://youtu.be/2MoGxae-zyo", "https://youtu.be/7fICF_O5esc" ];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}

gaining_muscle = function() {
    array = ["https://youtu.be/95846CBGU0M", "https://youtu.be/ynDyv6LDRTM", "https://youtu.be/h63JTsVdntw"];
    const randomElement = array[Math.floor(Math.random() * array.length)]; 
    return randomElement; 
}
