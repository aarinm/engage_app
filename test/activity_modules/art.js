exports.getArt = function(subacts){
  var artarray = [];
  var i = 0;
  while (i < subacts.Size){
    var artObj = subacts.ObjectAt(i);
    var artActName = artObj.StringOf("name");
    var artString = createString(artActName);
    artarray.push(artString);
    i = i+1;
  }
  return artarray;
}

exports.getRandom = function(){
  array = ['watercolor', 'oil', 'sketches', 'coloring', 'origami', 'sculpture', 'crafts'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  var rand = createString(randomElement);
  return rand;
}

createString = function(subactname){
  var artstring;
  if (subactname === 'watercolor'){
    artstring = "Find your inner peace with these watercoloring activities: ";
    artstring += watercolor();
  }
  else if (subactname === 'oil'){
    artstring = "Create the next amazing oil painting: ";
    artstring += oil();
  }
  else if (subactname === 'sketches'){
    artstring = "Get creative with these sketch prompts: ";
    artstring += sketches();
  }
  else if (subactname === 'coloring'){
    artstring = "Achieve maximum relaxation with these coloring pages: ";
    artstring += coloring();
  }
  else if (subactname === 'origami'){
    artstring = "Fold your way to greatness with these origami activities: ";
    artstring += origami();
  }
  else if (subactname === 'sculpture'){
    artstring = "Sculpt something cool with these activities: ";
    artstring += sculpture();
  }
  else{
    artstring = "Here's some fun crafts to try: "
    artstring += crafts();
  }
}

watercolor = function(){
  array = ['https://theartofeducation.edu/2018/04/30/an-engaging-watercolor-lesson-for-all-grade-levels/', 'https://www.howweelearn.com/easy-watercolor-painting-ideas/', 'https://bydawnnicole.com/10-fun-watercolor-projects/'];
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement;
}

oil = function(){
  array = ['https://www.youtube.com/watch?v=mT0RNrTDHkI&list=PLXZYfNCCCIGZNcKJYLDf9hi7MSWSKjag9', 'https://www.thesprucecrafts.com/top-tips-for-beginning-oil-painting-2578745', 'https://conceptartempire.com/oil-painting-tutorials/', 'https://willkempartschool.com/oil-painting-for-beginners-simple-still-life-step-by-step/'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

sketches = function(){
  array = ['https://mymodernmet.com/easy-sketch-ideas/', 'https://www.instructables.com/id/Sketching-Drawing-Lessons/', 'https://www.creativelive.com/blog/5-drawing-exercises-turn-make-anyone-artist/'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

coloring = function(){
  array = ['https://www.justcolor.net/', 'https://www.fabercastell.com/pages/coloring-pages-for-adults', 'https://www.happinessishomemade.net/free-adult-coloring-pages/'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement; 
}

origami = function(){
  array = ['https://diyprojectsforteens.com/best-diy-origami/', 'https://www.thesprucecrafts.com/top-origami-for-beginners-2540688', 'https://www.itsalwaysautumn.com/20-fun-origami-tutorials-adults-kids.html', 'http://make-origami.com/'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

sculpture = function(){
  array = ['https://www.artistsandillustrators.co.uk/how-to/sculpture/252/beginners-guide-to-sculpting-in-clay', 'https://tutorialspress.com/useful-sculpting-tutorials/', 'https://sculptingnoobs.tumblr.com/'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement; 
}

crafts = function(){
  array = ['https://artsycraftsymom.com/pipe-cleaner-crafts-for-kids/', 'https://diyjoy.com/fun-diy-ideas-adults/', 'https://www.paradisefibers.com/pages/knitting-101-knitting-for-beginners', 'https://coolmompicks.com/blog/2017/07/18/coolest-lanyard-patterns-summer-camp/'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement; 
}
