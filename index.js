const newrelic = require('newrelic')
const { default: axios } = require('axios')
const { generateSignedURL, getBucketContents } = require('./signed-url')

const params = {
  bucketName: 'jlo-test-bucket',
  s3Key: 'test-file.json'
}

newrelic.startWebTransaction('testing', async () => {
  const transaction = newrelic.getTransaction()

  const signedUrl = await generateSignedURL(params)
  const httpResponse = await axios.get(signedUrl)
  console.log('Using Axios: ', httpResponse.data)

  const sdkResponse = await getBucketContents(params)
  const responseString = await sdkResponse.Body.transformToString()
  console.log('Using SDK: ', responseString)

  transaction.end()
})
