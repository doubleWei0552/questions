const multer = require('multer')

const storage = multer.diskStorage({
            destination: 'www/uploads',
            filename: function(req, file, callback){
                var petname = req.cookies.petname
                callback(null, `${petname}.jpg`)
            }
        })

module.exports = multer({storage})