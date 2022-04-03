
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    name : {type : String, required : true},
    number : {type : Number, required : true, unique : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    confirmpassword : {type : String, required : true},
    tokens : 
    [
        {
            token : 
            {
                type : String,
                required : true
            }
        }
    ]
},  
{   
    timestamps : true,
    
    versionKey : false
});

// Middleware for generate token
// and we use methods for instance
UserSchema.methods.GenerateToken = async function()
{

    try
    {
        console.log('this._id:', this._id)
        console.log('process.env.JSON_WEB_SECRET_KEY:', process.env.JSON_WEB_SECRET_KEY)
        const token = jwt.sign({_id : this._id.toString()}, process.env.JSON_WEB_SECRET_KEY);
        console.log("token :", token);

        // Here I store token in UserSchema
        // in ES6 we use directly ({token}) not we use like --> ({token : token}) but easy we use ({token : token})
        this.tokens = this.tokens.concat({token : token});
        // this.tokens = this.tokens.concat({token : token});

        // for adding token in our database by -->
        // and I don't want store it so don't asign any variable directly await
        await this.save();


        return token;
    }
    catch(error)
    {

        res.send("the error part" + error);
        console.log('"the error part" + error:', "the error part" + error)

    }
}

// Middleware for hashing password
UserSchema.pre("save", async function(next)
{
    if(this.isModified("password"))
    {
        const passwordhash = await bcrypt.hashSync(this.password, 10);

        this.password = passwordhash;

        // this.confirmpassword = undefined;
    }
    if(this.isModified("confirmpassword"))
    {
        const confirmpasswordhash = await bcrypt.hashSync(this.confirmpassword, 10);

        this.confirmpassword = confirmpasswordhash;
    }

    return next();
})

// Check login password by function
UserSchema.methods.checkPassword = async function(password)
{
    // console.log(password);
    console.log('password:', password);
    return await bcrypt.compareSync(password, this.password);
}



const User1 = mongoose.model("user", UserSchema);

module.exports = User1;