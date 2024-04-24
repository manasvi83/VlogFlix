class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack= ""
    ){
        super(message);
        this.statusCode = statusCode
        this.data  = null
        this.message = message
        this.success = false;
        this.errors= errors

        if(stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export{ApiError};

//this file is made for handling api error this is the basic standard practice of production grade 
//and the stack part is not used in normal applications only in production