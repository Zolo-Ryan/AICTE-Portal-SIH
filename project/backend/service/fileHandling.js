const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const CLIENT_ID = "1021961724295-lk2ige2ca2bqf8sk1c15mvuqc6frsa47.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04_TCE_brs9caCgYIARAAGAQSNwF-L9Ir49-2pxPuIx-EC0ySVx1TiLvHWB_6_NAEug_FJLWdVfiqs-eYbchgt1uizKe4HB6eze8"

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,CLIENT_SECRET,REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})

async function generatePublicUrl(data){
    try {
        const fileId = "1dsEAUkijp5AfT4hx8P-w_Fp6rQcALtPJ";
        await drive.permissions.create({ // can capture this response into something
            fileId: data.id,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        });
        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink, webContentLink'
        })
        console.log("generate",result.data);
        //this has webViewLink and webContentLink
    } catch (error) {
        console.log(error);
    }
}

async function uploadFile(file) {
    try {
        const filePath = path.join(__dirname,"../uploads",file.name);
        const res = await drive.files.create({
            requestBody: {
                name: file.name,
                mimeType: "image/jpeg"
            },
            media:{
                mimeType: file.mimeType,
                body: fs.createReadStream(filePath)
            }
        })
        generatePublicUrl(res.data);
        console.log("drive upload",res.data);
        //got a unique id by req.data.id

    } catch (error) {
        console.log(error);
    }
}

async function deleteFile() {
    try {
        const response = await drive.files.delete({
            fileId: "1cFmoqM92lciMe9VR-JZ0p2NDaWQ6zmsn",
        });
        console.log(response.data,response.status);
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    generatePublicUrl,
    uploadFile,
    deleteFile
}