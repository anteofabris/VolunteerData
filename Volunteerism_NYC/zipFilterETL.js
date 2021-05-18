const db = require('./database/index.js');
const Volunteers = require('./database/models/VolunteersSchema.js');
const Population = require('./database/models/PopulationSchema.js');
const Incomes = require('./database/models/IncomesSchema.js');
const Rankings = require('./database/models/RankingsSchema.js');
const Coords = require('./database/models/CoordSchema.js');
const ZipPaths = require('./database/models/ZipPathsSchema.js');
const USZips = require('./database/models/USZipsSchema.js');
const NYZips = require('./database/models/NYZipsSchema.js');

var zipsArray = []

USZips.find({ county_name: "Bronx" })
  .then((response) => {

    zipsArray = zipsArray.concat(response)

    USZips.find({ county_name: "Kings" })
      .then((response) => {
        zipsArray = zipsArray.concat(response)

        USZips.find({ county_name: "Richmond" })
          .then((response) => {
            zipsArray = zipsArray.concat(response)

            USZips.find({ county_name: "Queens" })
              .then((response) => {
                zipsArray = zipsArray.concat(response)

                USZips.find({ county_name: "New York" })
                  .then((response) => {
                    zipsArray = zipsArray.concat(response)

                    storeAll(zipsArray);
                  })
                  .catch((err) => {
                    console.log('error finding by New York ', err)
                  })
              })
              .catch((err) => {
                console.log('error finding by Queens ', err)
              })
          })
          .catch((err) => {
            console.log('error finding by Richmond ', err)
          })
      })
      .catch((err) => {
        console.log('error finding by Kings ', err)
      })
  })
  .catch((err) => {
    console.log('error finding by Bronx ', err)
  })

var storeAll = (array) => {

  console.log('this is array: ', array)
  if (array.length === 0) {
    return console.log('saved!')
  }

  NYZips.create({
    zip: array[0].zip,
    city: array[0].city,
    state_id: array[0].state_id,
    state_name: array[0].state_name,
    population: array[0].population,
    county_name: array[0].county_name,
    density: array[0].density

  })
    .then(() => {
      storeAll(array.splice(1))
    })
    .catch((err) => {
      console.log('error in NYZips.create: ', err)
    })
}