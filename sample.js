
var MeCaby = require('./mecab-yomigana.js');
var my = new MeCaby();

my.parse('どっちも始め何ともこの発見方においてのの中のなるたあり。', function(err, result) {
    if (err) throw err;
    console.log(result);
});

my.parse('林檎', function(err, result) {
    if (err) throw err;
    console.log(result);
});

my.parse('苺', function(err, result) {
    if (err) throw err;
    console.log(result);
});

var result1 = my.parseSync('どっちも始め何ともこの発見方においてのの中のなるたあり。');
console.log(result1);

var result2 = my.parseSync('林檎');
console.log(result1);

var result3 = my.parseSync('苺');
console.log(result3);
