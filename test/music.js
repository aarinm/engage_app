exports.getMusic = function(subacts) {
  var musicarray = [];
  var i = 0;
  while (i < subacts.Size){
    var musObj = subacts.ObjectAt(i);
    var musActName = musObj.StringOf("name");
    var musString = createString(musActName);
    musicarray.push(musString);
    i = i+1;
  }
  return musicarray;
}

exports.getRandom = function(){
  array = ['listen', 'learn', 'karaoke', 'jam'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  var rand = createString(randomElement);
  return rand;
}

createString = function(subactname){
  var musicstring;
  if (subactname === 'listen'){
    musicstring = "Chill out with some funky tunes: ";
    musicstring += listen();
  }
  else if (subactname === 'learn'){
    musicstring = "Learn a cool new instrument: ";
    musicstring += learn();
  }
  else if (subactname === 'karaoke'){
    musicstring = "Sing your heart out with these fun songs! ";
    musicstring += karaoke();
  }
  else if (subactname === 'jam'){
    musicstring = "Jam out with these backing tracks! ";
    musicstring += jam();
  }
  return musicstring;
}

listen = function(){
  array = ['https://www.youtube.com/watch?v=YgBlISXhoP8&list=PL1s89zMwwA_2Fe3oOrsnFSUrXGx3RTGfv', 'https://www.youtube.com/watch?v=sMsEwX3ixMg&list=PLtdoQpQncVG-Td_mY35jHyD6cL3Ax5mmF', 'https://www.youtube.com/watch?v=Qyclqo_AV2M&list=PLmo4pBukfRoN8SB5RKvfiY9CTl9pI_IFc', 'https://www.youtube.com/watch?v=T58tRXzjC7c&list=PLPRWtKgY2MOsLn_JUJyzEczn5T7xoDvzt'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

learn = function(){
  array = ['https://www.wikihow.com/Play-Guitar', 'https://how-to-play-bass.com/', 'https://www.pianolessons.com/piano-lessons/learn-to-play-piano.php', 'https://takelessons.com/blog/how-to-play-drums-z07']
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement; 
}

karaoke = function(){
  array = ['https://www.youtube.com/watch?v=F_cUogRHP20&list=PLcLj1bJcSm1I8fKZYMeGmve8UF8_b2krC', 'https://www.youtube.com/watch?v=IP3wQc2gh8A&list=PLprqB9h4cfZYUD0_gOREzsvKPwAIMVWNi', 'https://www.youtube.com/watch?v=ZkNf0YMvdqQ&list=PL8D4Iby0Bmm_tCIEQyfVuBLaOUDeZL2hd', 'https://www.youtube.com/watch?v=3MPYmLU8lRs&list=PLocvIzR73poah-PALQLAzuFoI7BYbiUsn']
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement; 
}

jam = function(){
  array = ['https://www.youtube.com/watch?v=IvPp4XTVyRI&list=PLizJeHmFiy3VUJbKyqz7ud21XPBTKp1pf', 'https://www.youtube.com/watch?v=gLvvsXea8w4&list=RDgLvvsXea8w4&start_radio=1', 'https://www.youtube.com/watch?v=PDIKkra-LAs&list=PLqkOQzeoKvnQHaVTatTQrVPbUcJRhaM_f', 'https://www.youtube.com/watch?v=iyHDHYrdWPs&list=PLpmPci27wd59WTEATJ5HQDCuamMTJj0fA']
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement; 
}
