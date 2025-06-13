import mongoose from 'mongoose';

//Schema que guardará la DB
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

//Modelo para interactuar con los métodos
export default mongoose.model('User', userSchema)