## ISICverify - Verify ISIC cards using Node.js
[![Build Status](https://travis-ci.com/gbougakov/isicverify.svg?branch=master)](https://travis-ci.com/gbougakov/isicverify) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgbougakov%2Fisicverify.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgbougakov%2Fisicverify?ref=badge_shield)
- test ISIC card expired
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

### How it works
ISIC does not have a public API, but they have a [verification form](https://www.isic.org/verify/) which this module fills out and then parses the response HTML to get the result


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgbougakov%2Fisicverify.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgbougakov%2Fisicverify?ref=badge_large)