const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("./ExplorerService");
const FizzbuzzService = require("./FizzbuzzService");
const TelegramBot = require("node-telegram-bot-api");
const Data = Reader.readJsonFile("explorers.json");


class BotService {
    static Response(token){
        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, {polling: true});
        
        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
        
            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"
        
            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });
        
        // Listen for any kind of message. There are different kinds of
        // messages.
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
            const mission = msg.text;
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                return bot.sendMessage(chatId, responseBot);
            } 
            if (mission === "node" || mission === "java") {
                const explorers = ExplorerService.getExplorersUsernamesByMission(Data, mission);
                const responseBot = `Exploradores de la misión ${mission}: ${explorers}`;
                return bot.sendMessage(chatId, responseBot);
            }
            else {
                bot.sendMessage(chatId, "Envía un valor válido");
            }
        
        });
    }
}

module.exports = BotService;