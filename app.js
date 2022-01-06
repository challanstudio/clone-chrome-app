// array

const days = ["mon", "tue", "wed", "thus", "fri", "sat"];
console.log(days);

days.push("sun");
console.log(days);

console.log(days[0], days[3]);

days[3] = "none";
console.log(days);

days.push("the other");
console.log(days);

// object | it's looks like CSS

const player = {
  name: "sooyeon",
  age: 30,
};

console.log(player);
console.log(player.name);

player.name = "kim";
console.log(player);

player.registerIn = "japan";
console.log(player);

// function

function plus(a, b) {
  console.log(a + b);
}

plus(3, 6);

const buyTo = {
  vegi: ["tomato", "potato"],
  fruit: function (e) {
    console.log("could you buy a " + e + " ?");
  },
};

buyTo.fruit(buyTo.vegi[0]);

// recap

const list = {
  words: ["first name", "last name", "nationality"],
  quest: function (q) {
    console.log("What is your " + q + "?");
  },
};

list.quest(list.words[0]);
list.quest(list.words[1]);
list.quest(list.words[2]);
