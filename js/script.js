//Add Event Listeners to All Question Choice Items
const item = document.querySelectorAll(".grid-item");

const choice_dict = {
  "Q1-choice-one": ["greenTea", "cookieD"],
  "Q1-choice-two": ["pB", "coffee"],
  "Q1-choice-three": ["mint", "rSprink"],
  "Q1-choice-four": ["rSprink", "cookieD"],
  "Q1-choice-five": ["coffee", "mint"],
  "Q1-choice-six": ["pB", "greenTea"],
  "Q2-choice-one": ["rSprink", "cookieD", "pB"],
  "Q2-choice-two": ["greenTea", "coffee", "mint"],
  "Q2-choice-three": ["rSprink", "cookieD", "mint"],
  "Q2-choice-four": ["greenTea", "coffee", "pB"],
  "Q3-choice-one": ["cookieD", "greenTea", "mint"],
  "Q3-choice-two": ["rSprink", "pB", "coffee"],
  "Q3-choice-three": ["rSprink", "coffee", "mint"],
  "Q3-choice-four": ["greenTea", "cookieD", "pB"],
  "Q4-choice-one": ["cookieD"],
  "Q4-choice-two": ["coffee"],
  "Q4-choice-three": ["mint"],
  "Q4-choice-four": ["greenTea"],
  "Q4-choice-five": ["rSprink"],
  "Q4-choice-six": ["pB"],
  "Q5-choice-one": ["cookieD", "greenTea", "mint"],
  "Q5-choice-two": ["greenTea", "coffee", "pB"],
  "Q5-choice-three": ["rSprink", "cookieD", "mint"],
  "Q5-choice-four": ["rSprink", "pB", "coffee"]
};

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", addFlavorScore);
}

console.log(choice_dict);
// console.log(choice_dict[this.id]);

// dict for which values in list to augment
var question_dict = {
  1: [2, 3],
  2: [1, 2, 3],
  3: [1, 2, 2],
  4: [5],
  5: [1, 1, 1]
};

function addFlavorScore() {
  //set current question
  window.localStorage.setItem(
    "currentQuestion",
    Number(window.localStorage.getItem("currentQuestion")) + 1
  );

  if (this.id === "clearScores") {
    window.localStorage.setItem("cookieD", 0);
    window.localStorage.setItem("rSprink", 0);
    window.localStorage.setItem("pB", 0);
    window.localStorage.setItem("greenTea", 0);
    window.localStorage.setItem("coffee", 0);
    window.localStorage.setItem("mint", 0);
    window.localStorage.setItem("currentQuestion", 0);
  }

  // add weighted points to flavors and store in local storage
  for (
    let i = 0;
    i <
    question_dict[Number(window.localStorage.getItem("currentQuestion"))]
      .length;
    i++
  ) {
    // console.log("we got here");
    window.localStorage.setItem(
      choice_dict[this.id][i],
      Number(window.localStorage.getItem(choice_dict[this.id][i])) +
        question_dict[Number(window.localStorage.getItem("currentQuestion"))][i]
    );
  }
}

const find_max_dict = {
  cookieD: window.localStorage.getItem("cookieD"),
  rSprink: window.localStorage.getItem("rSprink"),
  mint: window.localStorage.getItem("mint"),
  pB: window.localStorage.getItem("pB"),
  greenTea: window.localStorage.getItem("greenTea"),
  coffee: window.localStorage.getItem("coffee")
};

// console.log("verify choice_dict works: " + choice_dict["Q1-choice-one"]);
console.log(
  "currentQuestion = " + window.localStorage.getItem("currentQuestion")
);
console.log("cookieD = " + window.localStorage.getItem("cookieD"));
console.log("rSprink = " + window.localStorage.getItem("rSprink"));
console.log("mint = " + window.localStorage.getItem("mint"));
console.log("pB = " + window.localStorage.getItem("pB"));
console.log("greenTea = " + window.localStorage.getItem("greenTea"));
console.log("coffee = " + window.localStorage.getItem("coffee"));

let maxKey,
  maxValue = 0;

for (const [key, value] of Object.entries(find_max_dict)) {
  if (value > maxValue) {
    maxValue = value;
    maxKey = key;
  }
}
var finalFlavor = Object.keys(find_max_dict).find((key) => key === maxKey);

console.log("final flavor = " + finalFlavor);

const endButton = document.getElementById("endbutton");
endButton.addEventListener("click", findFlavorResult);

function findFlavorResult() {
  console.log("RESULT BABY!!!");
  if (finalFlavor === "pB") {
    console.log("pB page");
    window.location.href = "pB.html";
  }
  if (finalFlavor === "mint") {
    console.log("mint page");
    window.location.href = "mint.html";
  }
  if (finalFlavor === "coffee") {
    console.log("coffee page");
    window.location.href = "coffee.html";
  }
  if (finalFlavor === "rSprink") {
    console.log("rSprink page");
    window.location.href = "rSprink.html";
  }
  if (finalFlavor === "cookieD") {
    console.log("cookieD page");
    window.location.href = "cookieD.html";
  }
  if (finalFlavor === "greenTea") {
    console.log("greenTea page");
    window.location.href = "greenTea.html";
  }
}

// const clearScore = document.getElementById("clearScores");
// clearScore.addEventListener("click", clearAllScores);

// const homeButton = document.getElementById("back-home");
// homeButton.addEventListener("click", clearAndHome);

// function clearAndHome() {
//   if (this.id === "back-home") {
//     window.localStorage.setItem("cookieD", 0);
//     window.localStorage.setItem("rSprink", 0);
//     window.localStorage.setItem("pB", 0);
//     window.localStorage.setItem("greenTea", 0);
//   }
// }

// if (
//   this.id === "Q1-choice-one" ||
//   this.id === "Q1-choice-three" ||
//   this.id === "Q2-choice-one" ||
//   this.id === "Q2-choice-three" ||
//   this.id === "Q3-choice-two" ||
//   this.id === "Q3-choice-three" ||
//   this.id === "Q4-choice-one" ||
//   this.id === "Q5-choice-four" ||
//   this.id === "Q5-choice-three"
// ) {
//   window.localStorage.setItem(
//     "rSprink",
//     Number(window.localStorage.getItem("rSprink")) + 1
//   );
// }
// if (
//   this.id === "Q1-choice-one" ||
//   this.id === "Q1-choice-four" ||
//   this.id === "Q2-choice-one" ||
//   this.id === "Q2-choice-three" ||
//   this.id === "Q3-choice-one" ||
//   this.id === "Q3-choice-four" ||
//   this.id === "Q4-choice-six" ||
//   this.id === "Q5-choice-one" ||
//   this.id === "Q5-choice-three"
// ) {
//   window.localStorage.setItem(
//     "cookieD",
//     Number(window.localStorage.getItem("cookieD")) + 1
//   );
// }
// if (
//   this.id === "Q1-choice-six" ||
//   this.id === "Q1-choice-two" ||
//   this.id === "Q2-choice-one" ||
//   this.id === "Q2-choice-four" ||
//   this.id === "Q3-choice-two" ||
//   this.id === "Q3-choice-four" ||
//   this.id === "Q4-choice-six" ||
//   this.id === "Q5-choice-four" ||
//   this.id === "Q5-choice-two"
// ) {
//   window.localStorage.setItem(
//     "pB",
//     Number(window.localStorage.getItem("pB")) + 1
//   );
// }
// if (
//   this.id === "Q1-choice-six" ||
//   this.id === "Q1-choice-one" ||
//   this.id === "Q2-choice-two" ||
//   this.id === "Q2-choice-four" ||
//   this.id === "Q3-choice-one" ||
//   this.id === "Q3-choice-four" ||
//   this.id === "Q4-choice-four" ||
//   this.id === "Q5-choice-one" ||
//   this.id === "Q5-choice-two"
// ) {
//   window.localStorage.setItem(
//     "greenTea",
//     Number(window.localStorage.getItem("greenTea")) + 1
//   );
// }
// if (
//   this.id === "Q1-choice-five" ||
//   this.id === "Q1-choice-two" ||
//   this.id === "Q2-choice-two" ||
//   this.id === "Q2-choice-four" ||
//   this.id === "Q3-choice-two" ||
//   this.id === "Q3-choice-three" ||
//   this.id === "Q4-choice-two" ||
//   this.id === "Q5-choice-four" ||
//   this.id === "Q5-choice-two"
// ) {
//   window.localStorage.setItem(
//     "coffee",
//     Number(window.localStorage.getItem("coffee")) + 1
//   );
// }
// if (
//   this.id === "Q1-choice-five" ||
//   this.id === "Q1-choice-three" ||
//   this.id === "Q2-choice-two" ||
//   this.id === "Q2-choice-three" ||
//   this.id === "Q3-choice-one" ||
//   this.id === "Q3-choice-three" ||
//   this.id === "Q4-choice-three" ||
//   this.id === "Q5-choice-three" ||
//   this.id === "Q5-choice-one"
// ) {
//   window.localStorage.setItem(
//     "mint",
//     Number(window.localStorage.getItem("mint")) + 1
//   );
// }
