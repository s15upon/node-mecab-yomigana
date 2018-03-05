# node-mecab-yomigana
Parsed reading of sentences using MeCab library.

## Introduction
MeCabを使用して、文章を読み仮名に変換します。変換後はカタカナになります。  
変換できない場合は、変換に使用した文字がそのまま返ります。

## Quick Start
### Install
```
npm install mecab-yomigana
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
