const readJsonFile = require("../lib/utils/Reader");

describe("Reader works", () => {
  test("readJsonFile returns an array", () => {
    const filePath = "explorers.json";
    const explorers = readJsonFile.readJsonFile(filePath);
    expect(explorers).toBeInstanceOf(Array);
  });
});
