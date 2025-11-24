export async function fetchTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`,
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
      Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`,
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
      Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`,
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
      Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();
  return data;
}

export async function searchMovies(query: string) {
  const url =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`,
    },
  };
  const response = await fetch(
    `${url}&query=${encodeURIComponent(query)}`,
    options
  );
  if (!response.ok) {
    throw new Error("Failed to search movies");
  }
  const { results } = await response.json();
  return results;
}
