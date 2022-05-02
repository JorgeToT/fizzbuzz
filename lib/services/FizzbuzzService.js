class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 3 == 0 && explorer.score % 5 == 0) {
            return (explorer.trick = "FIZZBUZZ");
        }
        if (explorer.score % 3 == 0) {
            return (explorer.trick = "FIZZ");
        }
        if (explorer.score % 5 == 0) {
            return (explorer.trick = "BUZZ");
        } 
        if (explorer.score % 3 != 0 && explorer.score % 5 != 0) {
            return (explorer.trick = explorer.score);
        }
    }
    static applyValidationInNumber(number) {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FIZZBUZZ";
        }
        if (number % 3 == 0) {
            return "FIZZ";
        }
        if (number % 5 == 0) {
            return "BUZZ";
        } 
        if (number % 3 != 0 && number % 5 != 0) {
            return number;
        }
    }
}

module.exports = FizzbuzzService;
