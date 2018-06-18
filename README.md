## ISICverify - Verify ISIC cards using Node.js
[![Build Status](https://travis-ci.com/GeorgeBgk/isicverify.svg?branch=master)](https://travis-ci.com/GeorgeBgk/isicverify)
### Install
```bash
npm i isicverify
```

### Usage
```js
const verifyISIC = require('isicverify')
verifyISIC('cardnumber').then(function(isValid) {
	console.log(isValid)
})
```
