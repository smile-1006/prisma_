//bring in prisma client and cookie parser

const prisma = require('../prisma/index')
const cookieToken = require('../utils/cookieToken')

//User signup controller
exports.signup = async(req,res,next)=>{
    try {
        const {name,email,password}=req.body
        //check
        if(!name|| !email || !password){
            throw new Error('please provide all fields')
        }
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })
        //send user a token
        cookieToken(user,res)

    }catch (error) {
        console.error(error);
        // handle error
    }
}