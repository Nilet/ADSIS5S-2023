import { Schema, model, Document } from 'mongoose'

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
        timestamps : true
    })
export default model("User", UserSchema)
