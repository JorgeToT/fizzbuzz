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
        } else {
            return (explorer.trick = 1);
        }
    }
}

module.exports = FizzbuzzService;
