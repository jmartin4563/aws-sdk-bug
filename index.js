const newrelic = require('newrelic')
const getSignedUrl = require('./signed-url')

const params = {
  bucketName: 'jlo-test-bucket',
  s3Key: 'test-file.json'
}

getSignedUrl(params).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err)
})
