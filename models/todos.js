import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    createAt: {
        type: String

    },
    updateAt: {
        type: String
    },
    isDone: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.models.todo || mongoose.model("todo", schema);
export default todo