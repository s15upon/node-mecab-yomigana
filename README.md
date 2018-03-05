# node-mecab-yomigana
Parsed reading of sentences using MeCab library.

## Introduction

## Quick Start
### Install
```
```

### Example
```
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
```

### Result
```
ドッチモハジメナントモコノハッケンカタニオイテノノナカノナルタアリ。
リンゴ
```

### License
MIT
