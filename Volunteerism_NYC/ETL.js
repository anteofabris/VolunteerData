const db = require('./database/index.js');
const Volunteers = require('./database/models/VolunteersSchema.js');
const Population = require('./database/models/PopulationSchema.js');
const Incomes = require('./database/models/IncomesSchema.js');
const Rankings = require('./database/models/RankingsSchema.js');

var zipCodeVols = {}
var zipCodePop = {}
var percentages = {}
var medianIncomes = {}

Volunteers.find().sort({ zip_code: 1 })
  .then((response) => {
    // console.log('response:', response)
    response.forEach((item) => {
      if (!zipCodeVols[item.zip_code]) {
        zipCodeVols[item.zip_code] = item.total_volunteers
      } else {
        zipCodeVols[item.zip_code] += item.total_volunteers
      }

    })

    Population.find().sort({ zip_code: 1 })
      .then((response) => {
        // console.log('this is response: ', response)
        response.forEach((item) => {
          if (!zipCodePop[item.zip_code]) {
            zipCodePop[item.zip_code] = item.pop_est
          } else {
            zipCodePop[item.zip_code] += item.pop_est
          }
        })

        // console.log('this is zipCodePop: ', zipCodePop)
        for (var key in zipCodePop) {
          // if zipCodeVols at key exists
          if (zipCodeVols[key]) {
            // divide number of volunteers by population * 100 and store in percentages at key
            percentages[key] = (zipCodeVols[key] / zipCodePop[key]) * 100;
          } else {
            // else, store 0 at percentages at key
            percentages[key] = 0
          }
        }

        Incomes.find().sort({ S1901_C01_012E: 1 })
          .then((response) => {
            response.forEach((item) => {
              var zip = Number(item.NAME.split(' ')[1])
              if (!medianIncomes[zip]) {
                medianIncomes[zip] = item.S1901_C01_012E
              }
            })

            for (var key in medianIncomes) {
              if (!medianIncomes[key]) {
                medianIncomes[key] = 0
              }
              if (key === NaN) {
                delete medianIncomes[key]
              }
            }
            console.log('checking: ', medianIncomes)

            createRankings(zipCodeVols, zipCodePop, medianIncomes, percentages)
          })

      })
      .catch((err) => {
        console.log('error in Population.find: ', err)
      })

  })
  .catch((err) => {
    console.log('error in Volunteers.find: ', err)
  })


var createRankings = (volunteers, population, income, percent) => {

  var array = []
  // console.log('population obj:', population)

  for (var key in population) {
    if (population[key] && income[key] && volunteers[key] && percent[key]) {

      var zip = key;
      var pop = population[key] ? population[key] : 0
      var vols = volunteers[key]? volunteers[key] : 0
      var inc = income[key] ? income[key] : 0;
      var perc = percent[key] ? percent[key] : 0;
      var score = (inc / perc) ? (inc/perc) : 0;

      var tempObj = {
        zip: zip,
        pop: pop,
        vols: vols,
        income: inc,
        percent: perc,
        score: score
      }

      array.push(tempObj)


    }
  }
  // console.log('array currently: ', array)

  return createFromArray(array);
}


var createFromArray = (array) => {
  // console.log('array: ', array)
  // bc. if array is empty
  if (array.length === 0) {
    // return console.log('done!')
    return console.log('done creating rankings!')
  }
  var thisArray = array
  // rc stire the first item in array in var current
  var current = array[0]
  // create rankings doc
  Rankings.create({
    zip_code: current.zip,
    population: current.pop,
    total_volunteers: current.vols,
    percent_volunteers: current.percent,
    median_income: current.income,
    score: current.score
  })
    .then(() => {
      console.log('created')
      createFromArray(thisArray.splice(1))
    })
    .catch((err) => {
      console.log('error creating ranking: ', err)
    })

}
      // then, call createFromArray(splice(1))

