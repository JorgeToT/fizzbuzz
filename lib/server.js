const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use (express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz API Welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(request, response)=> {
    const mission = request.params.mission;
    const amountExplorers = ExplorerController.getExplorersAmountByMission(mission);
    const amountExplorersByMission = {mission: mission, amount: amountExplorers};
    response.json(amountExplorersByMission);
});

app.get("/v1/explorers/usernames/:mission",(request, response)=> {
    const mission = request.params.mission;
    const usernamesExplorers = ExplorerController.getExplorersUsernamesByMission(mission);
    const usernamesExplorersByMission = {mission: mission, usernames: usernamesExplorers};
    response.json(usernamesExplorersByMission);
});

app.get("/v1/fizzbuzz/:number", (request, response) => {
    const number = request.params.number;
    const fizzbuzz = ExplorerController.applyValidationInNumber(number);
    const fizzbuzzByNumber = {score: number, fizzbuzz: fizzbuzz};
    response.json(fizzbuzzByNumber);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost: ${port}`);
});
