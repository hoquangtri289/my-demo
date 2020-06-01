const cloudinary = require('cloudinary').v2;

class Coudinary {
    async deleteImg (src){
        let public_id = await src.match(/(?<=\d\/)upload.+?(?=\.)/);
        cloudinary.uploader.destroy(public_id, (err, re) => {
            if(err){
               console.log("loi", err);
         } else {
           console.log('thanh cong', re);
           }
        });
    }
}

module.exports = new Coudinary();