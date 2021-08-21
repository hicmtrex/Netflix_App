require("dotenv").config();
//dummy data
const movieData = require('./dummyMovies');
const listData = require('./dummyLists');

//database
const connectDB = require('../config/db');
const Movie = require('../models/Movie');
const List = require('../models/List');

connectDB()

  const importData = async () => {
    try {
     await Movie.deleteMany({});
    //await List.deleteMany({});
     await Movie.insertMany(movieData);
      //await List.insertMany(listData);
      console.log("Data Import Success");
  
      process.exit();
    } catch (error) {
      console.error("Error with data import", error);
      process.exit(1);
    }
  };
  
  importData();