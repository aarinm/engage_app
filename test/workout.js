exports.getExercise  = function() {
    array = ["https://youtu.be/HVgBWSOPx0I", "https://youtu.be/vc1E5CfRfos","https://youtu.be/I-XpxwHqc8g"];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
};

exports.getMusic = function() {
    array = ["https://youtu.be/8mlny-duG4c", "https://youtu.be/fk8323r577w", "https://youtu.be/IeSU4FAWxfU"];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
};