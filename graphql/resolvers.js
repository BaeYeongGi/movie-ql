import { getMovies, getMovieId, addMovie, deleteMovie } from "./db";

export const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovieId(id)
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score),
    deleteMovie: (_, {id}) => deleteMovie(id)
  }
};



