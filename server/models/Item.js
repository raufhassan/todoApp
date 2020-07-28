const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    
})
module.exports = Items = mongoose.model("Items", UserSchema);  