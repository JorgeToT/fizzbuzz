const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

const ExplorerService = require("./lib/services/ExplorerService");
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const names = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(names);

const FizzbuzzService = require("./lib/services/FizzbuzzService");
const tricks = explorers.map((explorer) =>
    FizzbuzzService.applyValidationInExplorer(explorer)
);
console.log(tricks);
