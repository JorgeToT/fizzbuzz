const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

// Part 2: Get the quantity of explorers names in node
const explorersInNode = explorers.filter(
  (explorer) => explorer.mission == "node"
);
//console.log(explorersInNode.length)

// Part4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = explorers.filter(
  (explorer) => explorer.mission == "node"
);
const usernamesInNode = explorersInNodeToGetUsernames.map(
  (explorer) => explorer.githubUsername
);
console.log(usernamesInNode)

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
