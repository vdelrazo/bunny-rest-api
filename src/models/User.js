import {Schema, model} from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
});

userSchema.plugin(mongoosePaginate);
export default model("User", userSchema)