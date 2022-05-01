// Clase anterior con la que obtenemos los explorers
const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

// Aplicación del ExplorerService sobre la lista de explorers
const ExplorerService = require("./lib/services/ExplorerService");
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const names = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

console.log(names);
