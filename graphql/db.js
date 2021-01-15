let movies = [
  {
    id: 0,
    name: "star wars - the new one",
    score: 1
  },
  {
    id: 1,
    name: "avengers - the new one",
    score: 8
  },
  {
    id: 2,
    name: "the godfather i",
    score: 99  
  },
  {
    id: 3,
    name: "logan",
    score: 2    
  } 
]

// 모든 people 의 배열을 확인후 0번째의 대상을 보냄

export const getMovies = () => movies;

export const getMovieId = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovies.length){
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  }
  movies.push(newMovie);
  return newMovie
}