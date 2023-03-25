setTimeout(function() {
    alert(
      "Welcome to Papa Space Battle page ! "
    );
  }, 100);
  
let remainingHull
let remainingMainHull
let target

// base ship to build other ships
class Ship {
  constructor(name, hull, firepower, accuracy) {
      this.name = name,
      this.hull = hull, 
      this.firepower = firepower,
      this.accuracy = accuracy
  }
}

// base for user ship -- new user ship options in future?
class MainShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    // maybe have player choose their own name
    this.name = name,
    this.hull = hull,
    this.firepower = firepower,
    this.accuracy = accuracy
  }
  // bind the method
  attackAlien(target) {
  if (this.hull >= target.hull) {
    this.fightAlien(allAlien[i]);
  } else if (target.hull <= 0) {
      console.log(`You destroyed ${target.name}!`)
      userChoice()
  } else if (allAlien[i] === undefined) {
    console.log(`Congratulations, ${userShip.name}! You have destroyed all of the Alien Ships and saved planet Earth!`)
  } else if (target.hull > 0) {
      target.attackMain(this)
      (console.log(`You missed!! AlienShip has ${target.hull} hull.`))
    }
  }
  fightAlien(target) {
    remainingHull = target.hull -= this.firepower
    if (remainingHull > 0) {
        console.log(`You attacked with ${this.firepower} firepower and hit the alien ship!`)
        if (remainingHull > 0) {
        console.log(`AlienShip now has ${remainingHull} hull.`)
      }
        allAlien[i].attackMain(userShip)
      } else if (remainingHull <= 0) {
        allAlien.shift()
        console.log(`You attacked with ${this.firepower} firepower and destroyed the AlienShip!`)
        userChoice()
      }
    }
  }

// base for alien ships
class AlienShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy)
    this.name = name,
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
  attackMain(targetUser) {
    if (this.hull > 0 && targetUser.hull > 0) {
    this.fightMain(userShip)
    } else if (remainingHull <= 0) {
      allAlien.shift()
      console.log("You have destroyed AlienShip!")
      userChoice()
    }
  }
  fightMain(targetUser) {
      remainingMainHull = targetUser.hull - this.firepower
      console.log(`AlienShip hit you with ${this.firepower} firepower!`)
      if (remainingMainHull > 0) {
      console.log(`You now have ${remainingMainHull} hull.`)
      userShip.attackAlien(this)
    } else {
      console.log(`${userShip.name} has been destroyed. Earth is doomed!`)
      console.log("Click 'Quit Game' to Quit or Play Again.")
    }
  }
}

// -----------
// - PLAYERS -
// -----------
// create main ship and alien ships
const userShip = new MainShip("USS CRYSTAL", 20, 5, .7)
  const alienShip1 = new AlienShip("Al1")
  const alienShip2 = new AlienShip("Al2")
  const alienShip3 = new AlienShip("Al3")
  const alienShip4 = new AlienShip("Al4")
  const alienShip5 = new AlienShip("Al5")
  const alienShip6 = new AlienShip("Al6")

// array of alien ships 
let allAlien = [alienShip1 , alienShip2, alienShip3, alienShip4 , alienShip5, alienShip6]

// -------------
// - FUNCTIONS -
// -------------


const userChoice = () => {
  // prompt choice to continue or 'retreat'
if (confirm('Ready to fight next AlienShip? Click "OK" to continue or "Cancel" to quit.')) {
    userShip.attackAlien(this);
} else {
    retreat() //if choice is false quit game
  }
}
  
const retreat = () => {
  if (alert('Are you sure you want to quit? Click "OK" to Quit or "Cancel" to continue.') == true) {
    text = "Play Again Later";
    window.location.reload()
  } else {
    text = "Keep Going!";
  }
  }

// *******************
// -- START OF GAME --
// *******************
console.log(`Greetings! Earth has been attacked by a horde of aliens! You are the captain of the ${userShip.name} on a mission to destroy every last alien ship.`)

const startGame = () => {
  if(confirm('Ready to attack? Click "OK" to attack or "Cancel" to Quit')) {
    for (i = 0; i < allAlien.length; i++) {
    target = allAlien[i]
      while (target.hull > 0) {
        console.log(`${userShip.name} VS AlienShip ${target.name}...`)
        userShip.attackAlien(target);
      } if (userShip.hull <= 0) {
        console.log(`${userShip.name} has been destroyed. Earth is doomed!`)
        console.log("Click 'Quit Game' to Quit or Play Again.")
      } else if (target === undefined) {
        console.log(`Congratulations, ${userShip.name}! You have destroyed all of the Alien Ships and saved planet Earth!`)
      }
    }
  }
}


// ---------------------------
// --- button click events ---
// ---------------------------
const beginGame = () => {
  console.log('Battle the aliens as you try to destroy them with your lasers.Get ready!')
  startGame(), userChoice()
}

let startButton = document.getElementById('startButton')
startButton.addEventListener('click', () =>{
 beginGame(),  { passive: false }});

let quitAlert = document.getElementById('quitGame')
quitAlert.addEventListener('click', () => {
 
if (confirm("Are you sure you want to quit?") == true) {
  
  window.location.reload()
  
} else {
  console.log ("Keep Going!");
}
})
let retreatButton = document.getElementById('retreat')
retreatButton.addEventListener('click', () =>{
  retreat(),  alert ('maybe another time')
console.log(' i will come back for you i promise!!!')})
