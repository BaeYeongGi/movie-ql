import { getMovies } from "./db";

export const resolvers = {
  Query: {
    movies: (_, {rating, limit}) => getMovies(limit, rating)
  }
};



