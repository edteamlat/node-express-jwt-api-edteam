const { Schema, model } = require("mongoose");

const moviesSchema = new Schema({
    title: String,
    year: String,
    rate: String,
    director: String
},
{
    timestamps: true,
    versionKey: false,
}
);

module.exports = model("Movies", moviesSchema);
