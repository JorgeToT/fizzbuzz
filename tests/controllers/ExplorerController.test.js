const ExplorerController = require("../../lib/controllers/ExplorerController");
describe ("Test for Explorer Controller",() => {
    test ("Get explorers by mission", ()=>{
        const explorersFilter = ExplorerController.getExplorersByMission("node");
        expect(explorersFilter[0].name).toContain("Woopa1");
    });
    test ("Get explorers user name by mission", () => {
        const explorersFilterUsername = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersFilterUsername).toContain("ajolonauta1");
    });
    test ("Get explorers amount by mission" , () => {
        const explorersAmount = ExplorerController.getExplorersAmountByMission("node");
        expect(explorersAmount).toBe(10);
    });
});