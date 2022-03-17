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
  const person = await Person.findOne({ favoriteFoods: food });
  done(null, person /*, data*/);
};

const findPersonById = async (personId, done) => {
  const person = await Person.findById(personId);
  done(null, person /*, data*/);
};

const findEditThenSave = async (personId, done) => {
  const foodToAdd = "hamburger";

  const person = await Person.findById(personId);
  person.favoriteFoods.push(foodToAdd);
  const updatedPerson = new Person(person);
  updatedPerson.markModified("favoriteFoods");
  const updatedResult = await updatedPerson.save();

  done(null, updatedResult /*, data*/);
};

const findAndUpdate = async (personName, done) => {
  const ageToSet = 20;
  const updatedPerson = await Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true });

  done(null, updatedPerson /*, data*/);
};

const removeById = async (personId, done) => {
  const personDeleted = await Person.findOneAndRemove({ _id: personId });

  done(null, personDeleted /*, data*/);
};

const removeManyPeople = async (done) => {
  const nameToRemove = "Mary";

  const results = await Person.deleteMany({ name: nameToRemove });

  done(null, results/*, data*/);
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
