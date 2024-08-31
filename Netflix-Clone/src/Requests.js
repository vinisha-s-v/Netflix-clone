const key ='3a989fb7dae4bf69ffb1111bd036f8e1'

const requests = {
    requesPopular:` https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:` https://api.themoviedb.org/3/search/top-rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/search/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: ` https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_genres=27&page=1`,
   requestUpcoming: `GET https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

}
export default requests