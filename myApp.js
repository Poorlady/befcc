require('dotenv').config();
const mongoose = require("mongoose");
const { Schema } = mongoose;
// const Person = require("./models/Person");
// connect to mongoose
mongoose.connect(process.env.MONGO_URI).catch(err => console.log(err));

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: []
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = async (done) => {
  const personToSave = new Person({
    name: "Alif Ekasmara",
    age: 23,
    favoriteFoods: ["Pasta", "Pizza"]
  });

  const personReturn = await personToSave.save();

  done(null, personReturn /*, data*/);
};

const createManyPeople = async (arrayOfPeople, done) => {
  // const peopleToSave = [
  //   { 
  //     name: "Alif Ekasmara", 
  //     age: 23, 
  //     favoriteFoods: ["Pasta", "Pizza"] 
  //   }, 
  //   { 
  //     name: "Thomas Cook", 
  //     age: 25, 
  //     favoriteFoods: ["British Breakfast"] 
  //   }
  // ];

  const people = await Person.create(arrayOfPeople);

  done(null, people /*, data*/);
};

const findPeopleByName = async (personName, done) => {
  const person = await Person.find({ name: personName });

  done(null, person /*, data*/);
};

const findOneByFood = async (food, done) => {
  const person = await Person.findOne({ favoriteFoods: { $elemMatch: food } });
  done(null, person /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
