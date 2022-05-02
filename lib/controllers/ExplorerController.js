const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzBuzzService = require("../../lib/services/FizzBuzzService");
class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersFilter = ExplorerService.filterByMission(explorers, mission);
        return explorersFilter;
    }
}
module.exports = ExplorerController;