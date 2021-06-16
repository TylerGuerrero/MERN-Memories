import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
    // const token = req.cookies.jwt
   try {
       const token = req.headers.authorization.split(" ")[1]
       const isCustomAuth = token.length < 500
       let decodeData

       console.log(token)

       if (token && isCustomAuth) {
           decodeData = jwt.verify(token, proccess.env.SECRET)
           req.userId = decodeData?.id
       } else {
           decodeData = jwt.decode(token)
           req.userId = decodeData?.sub
       }
       next()
   } catch (error) {
       console.log(error)
   }

}