const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");
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
    static applyValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}
module.exports = ExplorerController;