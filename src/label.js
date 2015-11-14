var commands = require('./commands.js');

function Label() {
    this.text = "";
    this.startFormat();
    return this;
}

Label.prototype = {
    raw: (data) => this.text += data
};

commands.map(function(defn) {
    var command = function() {
        this.text += defn.fn.apply(arguments);
        return this;
    };
    Object.assign(command, defn);

    // Raw API
    if (command.command instanceof Array)
        command.command.map((c) => Label.prototype[c] = command);
    else
        Label.prototype[command.command] = command;

    // Friendly API
    if (typeof command.alias !== undefined) {
        if (command.alias instanceof Array)
            command.alias.map((c) => Label.prototype[c] = command);
        else
            Label.prototype[command.alias] = command;
    }
});

module.exports = Label;
