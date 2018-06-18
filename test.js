const test = require('ava').test
const verifyISIC = require('./index')

test('valid async', async t => {
  console.log(process.env.validcard)
  t.is(await verifyISIC(process.env.validcard), true)
})
test('invalid async', async t => {
  t.is(await verifyISIC('S123456789012Z'), false)
})
