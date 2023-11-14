const JWT = require('jsonwebtoken');

module.exports = async (req,res,next) => { // next is for middleware
    try {
         const token = req.headers['authorization'].split(" ")[1]
         console.log(token);
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGNkMDgyMTMxYTZlNDQ1OWRmYmI3OTUiLCJpYXQiOjE2OTMwMDAxMTIsImV4cCI6MTY5MzA4NjUxMn0.Dn-KD3ioFGnSdcldEMDPJqFx3Fd91MH1xv9baqpEM_g";
         JWT.verify(token, process.env.JWT_SECRET,(err,decode) => {
            if(err) {
                return res.status(401).send({
                    success: false,
                    message:' Auth Failed 1'
                })
            }
            else {
                req.body.userId = decode.userId;
                next();
            }
         })
    } catch (error) {
        console.log(error)
        return res.status(401).send({
            success: false,
            message:'Auth Failed 2',
            error,
        })
    }

}