module.exports = class Image {
    uploadImage(req,res) {
        console.log(__dirname);
        req.files.picture.mv(__dirname+'/../resources/img/'+req.files.picture.name,
            (error) => {
                if(error){
                    return res.status(500).send(error);
                }
                res.json({ok:"ok"})
            })
    }
};