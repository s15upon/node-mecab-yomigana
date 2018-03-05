const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const sq = require('shell-quote');

var MeCaby = function() {};

MeCaby.prototype = {
    command : 'mecab -Oyomi',
    options : {},
    shell_ : function (str) {
        return sq.quote(['echo', str]) + ' | ' + this.command;
    },
    parseResult_: function (text, result) {
      const lines = result.split('\n');
      return lines.length > 0 ? String(lines[0]) : text;
    },
    parse : function(text, callback) {
        process.nextTick(() => {
            exec(this.shell_(text), this.options, (err, result) => {
                if (err) {
                  return callback(err);
                }
                callback(err, this.parseResult_(text, result));
            });
        });
    },
    parseSync : function (text) {
        const result = execSync(this.shell_(text), this.options);
        return this.parseResult_(text, String(result));
    },
};

for (const x in MeCaby.prototype) {
    MeCaby[x] = MeCaby.prototype[x];
}

module.exports = MeCaby;
