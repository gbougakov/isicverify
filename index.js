const request = require('request')
const cheerio = require('cheerio')

function verifyISIC(num) {
  return new Promise(function(resolve, reject) {
    request.post({
      url: 'https://www.isic.org/verify',
      form: {
        'verify_card_number': num
      }
    }, function(err, httpResponse, body) {
      if (err) { reject(err) }
      const $ = cheerio.load(body)
      // console.log($("form > strong").html())
      if ($('form > strong').html() === 'You entered a valid card number') {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}
module.exports = verifyISIC
