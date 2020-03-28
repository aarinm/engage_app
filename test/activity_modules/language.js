exports.getLanguage = function(subacts){
  var langarray = [];
  var i = 0;
  while (i < subacts.Size){
    var langObj = subacts.ObjectAt(i);
    var langActName = langObj.StringOf("name");
    var langString = createString(cookActName);
    langarray.push(langString);
    i = i+1;
  }
  return langarray;
}

exports.getRandom(){
  array = ['english', 'spanish', 'french', 'chinese', 'italian'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  var rand = createString(randomElement);
  return rand;  
}

createString = function(subactname){
  var langstring;
  if (subactname === 'english'){
    langstring = "Brush up on your English with these resources: ");
    langstring += english();
  }
  else if (subactname === 'spanish'){
    langstring = "Hola, learn Spanish with these resources: ");
    langstring += spanish();
  }
  else if (subactname === 'french'){
    langstring = "Bonjour! Learn French with these resources: ");
    langstring += french();
  }
  else if (subactname === 'chinese'){
    langstring = "Ni hao! Learn Chinese with these resources: ");
    langstring += chinese();
  }
  else{
    langstring = "Ciao! Learn Italian with these resources: ";
    langstring += italian();
  }
  return langstring;
}

english = function(){
  array = ['https://www.englishclub.com/learn-english.htm', 'https://learnenglish.britishcouncil.org/', 'https://www.duolingo.com/course/en/es/Learn-English', 'https://learningenglish.voanews.com/a/lets-learn-english-lesson-one/3111026.html'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

spanish = function(){
  array = ['https://studyspanish.com/', 'https://www.duolingo.com/course/es/en/Learn-Spanish', 'https://www.babbel.com/learn-spanish', 'https://www.spanishdict.com/learn'];
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement; 
}

french = function(){
  array = ['https://www.thefrenchexperiment.com/', 'https://www.elearningfrench.com/', 'http://www.bbc.co.uk/languages/french/', 'https://www.duolingo.com/course/fr/en/Learn-French'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;  
}

chinese = function(){
  array = ['https://www.loecsen.com/en/learn-chinese', 'https://www.mondly.com/learn-chinese-online', 'https://www.chineseboost.com/blog/10-best-free-resources-learn-chinese/', 'http://www.bbc.co.uk/languages/chinese/', 'https://www.duolingo.com/course/zh/en/Learn-Chinese'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;   
}

italian = function(){
  array = ['https://www.duolingo.com/course/it/en/Learn-Italian', 'https://www.theitalianexperiment.com/', 'https://www.mondly.com/learn-italian-online', 'http://www.oneworlditaliano.com/english/home.htm'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;  
}
