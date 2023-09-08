const API_KEY = "f6f9652de6239793ec1c4e6237e17d24";

const userRequests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&Languages=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_network=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchThillerMovies : `/discover/movie?api_key=${API_KEY}&with_network=99`,
    fetchRomanticMovies : `/discover/movie?api_key=${API_KEY}&with_network=10749`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_network=35`,
}

export default userRequests;