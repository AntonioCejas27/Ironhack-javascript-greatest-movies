/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

movies.orderbyYear([anArray]){
    r

    movies.year.sort()
    console.log()

    // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

    function howManyMovies(anArray) {
        if (genre == "drama" && director == "steven speilberg") {
            return
        }
    }


    function howManyMovies(anArray) {
        anArray.filter((eachMovie) => {
        }
    }

    // Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

    function orderAlphabetically(array) {

        let copy = [...array];

        copy.sort((a, b) => {
            if (a.title < b.title) {
                return -1
            }
            else if (b.title, a.title) {
                return 1;
            }

            else{
            return 0;

        }

    }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

var movies = ["god father", "god father 2", "dark night", "12 angry men", "pulp fiction" ]

var avg = (movies / movies.length; i ++){
    var avg = (movies[i] / movies.length) * movies.length 
} 
console.log(avg)


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    var filtered = array.filter(function(drama){
      return drama.genre.includes("Drama");
    })
    var sumAverage = filtered.reduce(function(a, rating){
      return a + Number(rating.rate);
    }, 0);
    if (sumAverage === 0){
      return undefined;
    }
    result = sumAverage / filtered.length;
    return Number(result.toFixed(2));
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
    var result = movies.map(function(darknight){
      var split = darknight.duration.split(" darkKnight"); 
      var totalMinutes = parseInt(split[0]) * 60 + parseInt(split[1]);
      return {
        title: The Dark Knight,
        year: 2008,
        director:"Christopher Nolan",
        duration: "2h 32min",
        genre: [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
        rate: 9,
      }
    })
    return result;
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average 
