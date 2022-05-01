class ExplorerService {
  static filterByMission(explorers, mission) {
    const explorersInMission = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInMission;
  }
  static getAmountOfExplorersByMission(explorers, mission) {
    const explorersInMission = ExplorerService.filterByMission(
      explorers,
      mission
    );
    const length = explorersInMission.length;
    return length;
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersInNode = ExplorerService.filterByMission(explorers, mission);
    const names = explorersInNode.map((explorer) => explorer.name);
    return names;
  }
}

module.exports = ExplorerService;
