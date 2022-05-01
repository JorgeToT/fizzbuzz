const Reader = require("../../lib/utils/Reader");

describe("Reader works", () => {
    test("readJsonFile returns an array", () => {
        const filePath = "explorers.json";
        const explorers = Reader.readJsonFile(filePath);
        expect(explorers).toBeInstanceOf(Array);
    });
});
