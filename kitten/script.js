var fish = 0;
var fishPerClick = 1;
var moreFishPrice = 50;
var fisherMen = 0;
var fisherManPrice = 1000;
var catPals = 0;
var catPalPrice = 100000;
var finder = false;
var overlord = false;
var ascensions = 0;
var ascensionPrice = 100000000;
var cyberMen = 0;
var cyberManPrice = 50000;
var audioRate = 1;
var messages = ["Mmmm... Fish.", "\"You should ascend lol\" -????", "Nearby cities are complaining about the smell of rancid fish.", "Nobody knows where the fish are going...", "How many fish does it take to satisfy you?", "What kind of fish only comes out at night? A starfish", "Nobody knows where the fish are coming from at this point", "Breaking news: Local cat population quadruples in a single week", "Breaking news: Strange triangle man keeps asking for peanut butter", "Breaking news: Cat related power outage causes minor annoyance to citizens", "Breaking news: Laser pointer shortage rocks the nation\'s teacher population", "Breaking news: Sushi found in bottom left corner\, awards 10%", "Breaking news: Cats of the nation have begun to rebel, domestic animals or genius fish entrepreneurs?", "Fish... cookies.. fish.. cookies?", "Breaking news: Orteil sues CatR3kd over a web game"];

document.addEventListener('contextmenu', event => event.preventDefault());

var audio = new Audio("/Assets/nekoatsume.mp3");
audio.loop = true;

document.getElementById("fishCount").innerHTML = "Fish: " + fish;

function clickFish(){
  fish = fish + fishPerClick;
  document.getElementById("fishCount").innerHTML = "Fish: " + fish;
}

function doConfetti(duration){
  confetti.start();
  setTimeout(function(){confetti.stop()}, duration)
}

function hideMenu(){
  document.getElementById("menu").style.visibility = "hidden";
  document.getElementById("continue").style.visibility = "hidden";
  document.getElementById("menuShadow").style.visibility = "hidden";
  document.body.style.overflow = "auto";
  document.getElementById("message").innerHTML = messages[Math.floor(Math.random() * messages.length)];
  audio.play();
  setInterval(function(){
  document.getElementById("message").innerHTML = messages[Math.floor(Math.random() * messages.length)];
}, 10000);
}

function moreFish(){
  if(fish >= moreFishPrice){
    fish = fish - moreFishPrice;
    moreFishPrice = Math.round(moreFishPrice + (moreFishPrice / 15));
    fishPerClick++;
    document.getElementById("moreFish").innerHTML = "More Fish: $" + moreFishPrice + "<br>Fish Per Click: " + fishPerClick;
    document.getElementById("fishCount").innerHTML = "Fish: " + fish
    if(fishPerClick == 2){
      doConfetti(2000);
    }
  }
}

function fisherMan(bot){
  if(fish >= fisherManPrice){
    fish = fish - fisherManPrice;
    if(!bot){
    fisherManPrice = Math.round(fisherManPrice + (fisherManPrice / 15));
    }
    fisherMen++;
    document.getElementById("fisherMan").innerHTML = "Fisherman: $" + fisherManPrice + "<br>Fishermen: " + fisherMen;
    document.getElementById("fishCount").innerHTML = "Fish: " + fish;
    if(fisherMen == 1){
      doConfetti(2000);
      setInterval(function(){
        fish = fish + (fisherMen * 1);
        document.getElementById("fishCount").innerHTML = "Fish: " + fish;
      }, 1000);
      messages.push("\"Can I please be paid?\" -Fisherman #5883");
      messages.push("\"When\'s lunch?\" -Fisherman #5883");
    }
  }
}

function fisherManFinder(){
  if(fish >= 5000 && !finder){
    finder = true;
    fish = fish - 5000;
    doConfetti(2000);
    document.getElementById("fishCount").innerHTML = "Fish: " + fish;
    document.getElementById("fisherManFinder").innerHTML = "<strike>Fisherman Recruiter</strike><br>Unclocked!";
    document.getElementById("fisherManFinder").classList.add("unlocked");
    document.getElementById("fisherManFinder").disabled = true;
    setInterval(function(){
      fisherMan(true);
    }, 1000);
  }
}

function cyberMan(){
  if(fish >= cyberManPrice){
    fish = fish - cyberManPrice;
    cyberManPrice = Math.round(cyberManPrice + (cyberManPrice / 15));
    cyberMen++;
    document.getElementById("cyberMan").innerHTML = "Cybernetic Fisherman: $" + cyberManPrice + "<br>Cyborgs: " + cyberMen;
    document.getElementById("fishCount").innerHTML = "Fish: " + fish;
    if(cyberMen == 1){
      messages.push("\"....Wait, if I can't be paid\, why do I work here?\" -Cyborg #299");
      messages.push("Breaking news: Robot men with fishing poles break in to a store, cats suspected.");
      doConfetti(2000);
      setInterval(function(){
        fish = fish + (cyberMen * 100);
        document.getElementById("fishCount").innerHTML = "Fish: " + fish;
      }, 1000);
    }
  }
}

function kittyOverlord(){
  if(fish >= 500000 && !overlord){
    overlord = true;
    fish = fish - 500000
    doConfetti(2000);
    messages.push("<b><i>\"HISSSSSSSS\"</i></b> -Kitten Overlord");
    document.getElementById("fishCount").innerHTML = "Fish: " + fish;
    document.getElementById("kittyOverlord").innerHTML = "<strike>Kitten Overlord</strike><br>Unclocked!";
    document.getElementById("kittyOverlord").classList.add("unlocked");
    document.getElementById("kittyOverlord").disabled = true;
    setInterval(function(){
      catPal(true);
    }, 1000);
  }
}


function catPal(bot){
  if(fish >= catPalPrice){
    fish = fish - catPalPrice;
    if(!bot){
    catPalPrice = Math.round(catPalPrice + (catPalPrice / 15));
    }
    catPals++;
    document.getElementById("catPal").innerHTML = "Kitten Sidekick: $" + catPalPrice + "<br>Sidekicks: " + catPals;
    document.getElementById("fishCount").innerHTML = "Fish: " + fish;
    if(catPals == 1){
      doConfetti(2000);
      messages.push("\"Mrrroooww!\" -Kitten Sidekick #4208");
      messages.push("Cybernetic fisherman have accidentally disturbed the kittens... Oh no")
      setInterval(function(){
        fish = fish + (catPals * fishPerClick);
        document.getElementById("fishCount").innerHTML = "Fish: " + fish;
      }, 1000);
    }
  }
}

function ascend(){
  if(fish >= ascensionPrice){
    if(ascensions == 0){
      messages.push("\"do it again\" -????");
    }
    if(ascensions == 2){
      messages.push("<b>\"again\"</b> -????");
    }
    if(ascensions == 4){
      document.getElementById("title").innerHTML = "Ʞᴉʇʇǝu ɔlᴉɔʞǝɹ";
    }
    if(ascensions == 9){
      messages.push("<strike><b><i>Just once more</i></b> -????</strike>");
      document.getElementById("redShadow").style.opacity = 0.5;
    }
    audio.playbackRate = (audio.playbackRate - 0.05);
    fish = 0;
    moreFishPrice = 50;
    fisherManPrice = 1000;
    catPalPrice = 100000;
    cyberManPrice = 50000;
    finder = false;
    overlord = false;
    document.getElementById("cyberMan").innerHTML = "Cybernetic Fisherman: $" + cyberManPrice + "<br>Cyborgs: " + cyberMen;
    document.getElementById("fisherManFinder").innerHTML = "Fisherman Recruiter: $5000";
    document.getElementById("fisherManFinder").classList.remove("unlocked");
    document.getElementById("fisherManFinder").disabled = false;
    document.getElementById("kittyOverlord").innerHTML = "Kitten Overlord: $500000";
    document.getElementById("kittyOverlord").classList.remove("unlocked");
    document.getElementById("kittyOverlord").disabled = false;
    document.getElementById("fishCount").innerHTML = "Fish: " + fish;
    document.getElementById("moreFish").innerHTML = "More Fish: $" + moreFishPrice + "<br>Fish Per Click: " + fishPerClick;
    document.getElementById("fisherMan").innerHTML = "Fisherman: $" + fisherManPrice + "<br>Fishermen: " + fisherMen;
    document.getElementById("catPal").innerHTML = "Kitten Sidekick: $" + catPalPrice + "<br>Sidekicks: " + catPals;
    ascensions++;
    ascensionPrice = ascensionPrice * 2;
    document.getElementById("ascend").innerHTML = "Ascension: $" + ascensionPrice + "<br>Ascensions: " + ascensions;
  }
}

function sushi(){
  fish = fish + Math.round(fish / 10);
  document.getElementById("sushi").remove();
  document.getElementById("fishCount").innerHTML = "Fish: " + fish;
}