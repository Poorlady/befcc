const mongoose = require("mongoose");
const { Schema } = mongoose;

const PersonSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: []
});

const Person = mongoose.model("Person", PersonSchema);

export default Person;