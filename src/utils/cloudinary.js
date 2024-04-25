import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const uploadonCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been  uploaded successfully 
        console.log("file is uploaded on coudinary",
            response.url);
        return response;
    } catch (error) { //here error can be in path of  image or any other issue while connecting to clodinary server
        //but we know that atleast the file has been  stored in a temporarirly in our server  so delete it after use
        fs.unlinkSync(localFilePath) //delete locally saved temporary file after error in uploading to clodinary as that can be malicious
        return null;
        // console.log();

    }
}

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//     { public_id: "olympic_flag" },
//     function (error, result) { console.log(result); });


export { uploadonCloudinary };