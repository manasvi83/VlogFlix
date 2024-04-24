// const asyncHandler = ()=>{}
//it is a higher order func - a func which can accept a func as a parameter or return , they are treated as variable only
// it is used as (fn)=>(next)=>{...} middleware function. here in first fn i am passing another function
//this is just a wrapper function it is mainly used in production grade projects to help in easing the process

//promise method//

const asyncHandler = (requesthandler)=>{
    (req,res,next) => { 
        Promise.resolve(requesthandler(req,res,next)).catch((err)=> next(err))
    }
}

export {asyncHandler}

/* try- catch method
const asyncHandler = (fn) => async(req,res,next) =>{
    try{
        await fn(req,res,next)
    }catch(error){
        req.status(err.code || 500).json({
            success:false,
            message : err.message
        })
    }
} 
*/