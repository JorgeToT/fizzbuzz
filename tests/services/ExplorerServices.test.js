const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");

describe("Tests for Explorer Services", () => {
  const explorers = Reader.readJsonFile("./tests/explorersTest.json");
  test("Test for filter by mission", () => {
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.map((explorer) => explorer.mission)).toContain(
      "node"
    );
  });
  test("Test for get amount of explorers by mission", () => {
    const explorersInNodeLength = ExplorerService.getAmountOfExplorersByMission(
      explorers,
      "node"
    );
    expect(explorersInNodeLength).toBe(5);
  });
  test("Test for get explorer usernames by mission", () => {
    const names = ExplorerService.getExplorersUsernamesByMission(
      explorers,
      "node"
    );
    expect(names).toContain("Woopa1");
  });
});
