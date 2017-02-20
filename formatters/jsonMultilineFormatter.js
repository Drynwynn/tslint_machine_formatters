"use strict";
const tslint_1 = require("tslint");
class Formatter extends tslint_1.Formatters.AbstractFormatter {
    format(failures) {
        const failuresJSON = failures.map((failure) => JSON.stringify(failure.toJson()));
        return failuresJSON.join('\n') + '\n';
    }
}
exports.Formatter = Formatter;
//# sourceMappingURL=jsonMultilineFormatter.js.map