export async function fetchTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTJmMmZjYjNiZTA3ZmI0YzRkYzE2ZmUzNjU4Nzk0NyIsIm5iZiI6MTc2Mzg4MzAzNS4wNDcwMDAyLCJzdWIiOiI2OTIyYjgxYjRhNzViYzRjZDRkZDQ5YTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.62a45FRN-gLFYPDj4pVbeUluLFVNszYLEbjGpU8BCnE",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const { results } = await response.json();
  return results;
}

export async function fetchPopularMovies() {
  const url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTJmMmZjYjNiZTA3ZmI0YzRkYzE2ZmUzNjU4Nzk0NyIsIm5iZiI6MTc2Mzg4MzAzNS4wNDcwMDAyLCJzdWIiOiI2OTIyYjgxYjRhNzViYzRjZDRkZDQ5YTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.62a45FRN-gLFYPDj4pVbeUluLFVNszYLEbjGpU8BCnE",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const { results } = await response.json();
  return results;
}

export async function fetchTopRatedMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTJmMmZjYjNiZTA3ZmI0YzRkYzE2ZmUzNjU4Nzk0NyIsIm5iZiI6MTc2Mzg4MzAzNS4wNDcwMDAyLCJzdWIiOiI2OTIyYjgxYjRhNzViYzRjZDRkZDQ5YTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.62a45FRN-gLFYPDj4pVbeUluLFVNszYLEbjGpU8BCnE",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }
  const { results } = await response.json();
  return results;
}

export async function fetchMovieById(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,videos,similar&language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTJmMmZjYjNiZTA3ZmI0YzRkYzE2ZmUzNjU4Nzk0NyIsIm5iZiI6MTc2Mzg4MzAzNS4wNDcwMDAyLCJzdWIiOiI2OTIyYjgxYjRhNzViYzRjZDRkZDQ5YTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.62a45FRN-gLFYPDj4pVbeUluLFVNszYLEbjGpU8BCnE",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();
  return data;
}
