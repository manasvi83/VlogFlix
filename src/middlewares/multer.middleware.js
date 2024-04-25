import multer from "multer";
//read multer documentation disk storage  https://github.com/expressjs/multer#diskstorage

const storage = multer.diskStorage({
    destination: function (req, file, cb) { //here cb means callback
      cb(null, "../../public/temp")//first parameter gives error handling &second is destination to store the files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) //try out different options of file either read documetation or try console log
    }
  })
  
export const upload = multer({ 
    storage: storage 
})
