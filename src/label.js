import commands from './commands/zpl.js';
import compositeCommands from './commands/composite.js';

function Label() {
    this.text = "";
    this.startFormat();
    return this;
}

Label.prototype = {
    raw: function(data) { this.text += data; return this; }
};

function addCommandToPrototype(defn) {
    var command = function() {
        var args = new Array(defn.fn.length).map((val, idx) => arguments[idx] || "");
        console.log('arguments: '+args.length);
        console.log('fn: '+defn.fn);
        this.text += defn.fn(...arguments);
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
}

commands.map(addCommandToPrototype);
compositeCommands.map(addCommandToPrototype);

console.log(`Label.prototype: ${Object.keys(Label.prototype)}`);

export default Label;
