const { S3, GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

module.exports = {
  generateSignedURL: async function generateSignedUrl (params) {
    const s3Client = new S3({ region: 'us-east-2' })
    const command = new GetObjectCommand({
      Bucket: params.bucketName,
      Key: params.s3Key
    })

    return getSignedUrl(s3Client, command, { expiresIn: 3600 })
  },
  getBucketContents: async function getBucketContents (params) {
    const s3Client = new S3({ region: 'us-east-2' })
    const command = new GetObjectCommand({
      Bucket: params.bucketName,
      Key: params.s3Key
    })

    return s3Client.send(command)
  }
}
