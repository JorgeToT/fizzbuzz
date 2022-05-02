const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzBuzzService = require("../../lib/services/FizzBuzzService");
const explorers = Reader.readJsonFile("explorers.json");
class ExplorerController {
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmountByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
}
module.exports = ExplorerController;