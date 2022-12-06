import { S3Client , PutObjectAclCommand , ListObjectsCommand , GetObjectCommand} from '@aws-sdk/client-s3'
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {
    AWS_BUCKET_NAME,
AWS_BUCKET_REGION,
AWS_PUBLIC_KEY,
AWS_SECRET_KEY} = process.env;

import fs from  'fs'

 const client = new S3Client({
    region:  AWS_BUCKET_REGION,
    credentials:{
        accessKeyId: AWS_SECRET_KEY,
        secretAccessKey: AWS_SECRET_KEY
    }
})

async function uploadFile(file){
    const stream = fs.createReadStream(file)
    const uploadParams = {
        Bucket : AWS_BUCKET_NAME,
        Key : 'hola.png',
        Body :stream
    }
    const command = new PutObjectAclCommand(uploadParams)
    const  result = await client.send(command)
    console.log(result)
    return result
}


async function getAllFiles(){
   const command = new ListObjectsCommand ({
        Bucket: AWS_BUCKET_NAME
    })
    const result = await client.send(command)
    console.log(result)
    return result
}

async function getOneFile (fileName){
    const command = GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: fileName
    })

    const result = await client.send(command)
    console.log(result)
    return result
}

async function downloadFile (fileName){
    const command = GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: fileName
    })

    const result = await client.send(command)
    console.log(result)
    return result
    result.Body.pipe(fs.createWriteStream('./images/image.png'))
}

async function getFileURL (fileName){
    const command = GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: fileName
    })

    const result = await getSignedUrl(client, command, {expiresIn: 9999999})
    console.log(result)
    return result
}

