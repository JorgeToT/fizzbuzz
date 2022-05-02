const ExplorerController = require("../../lib/controllers/ExplorerController");
describe ("Test for Explorer Controller",() => {
    test ("Get explorers by mission", ()=>{
        const explorersFilter = ExplorerController.getExplorersByMission("node");
        expect(explorersFilter[0].name).toContain("Woopa1");
    });
});