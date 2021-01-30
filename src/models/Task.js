import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const taskSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: Boolean,
      default: false,
    },
    user_id: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

taskSchema.plugin(mongoosePaginate);
export default model("Task", taskSchema);
