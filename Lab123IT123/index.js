const movies = [
    {title:"Avengers",genre:"Sci-fi",rating:8.8,releaseYear:2007},
    {title:"baaghi",genre:"Action",rating:7.9,releaseYear:2010},
    {title:"Aashram",genre:"Drama",rating:9.2,releaseYear:2019}
]; 

const addMovie = (collection,movie)=>{
    collection.push(movie);
};

addMovie(movies,{title:"Prometheus",genre:"Sci-fi",rating:7.5,releaseYear:2022});
console.log(movies);

const listMoviesByGenre = (collection,genre)=>{
    return collection.filter(movie => movie.genre === genre);
};

console.log(listMoviesByGenre(movies,"Sci-fi"));

const findHighestRatedMovie = collection =>{
    return collection.reduce((highest,movie)=>movie.rating>highest.rating?movie:highest);
};

console.log(findHighestRatedMovie(movies));

const getMovieTitles = collection=>{
    return collection.map(movie => movie.title);
};

console.log(getMovieTitles(movies));

const moviesAfterYear = (collection,year)=>{
    return collection.filter(movie=>movie.releaseYear>year);
};

console.log(moviesAfterYear(movies,2010));

movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});

const matchVariable = (collection,title)=>{
    return collection.filter(movie => movie.title.includes(title));
};

console.log(matchVariable(movies,'Aa'));

function longestTitle()
{
    const longestTitle = movies.reduce((max, movie) => (movie.title.length > max.title.length ? movie : max));
    console.log(`longestTitleMovie: ${longestTitle.title} with length ${longestTitle.title.length}`);
};
function smallestTitle()
{
    const smallestTitle = movies.reduce((min, movie) => (movie.title.length < min.title.length ? movie : min));
    console.log(`smallestTitleMovie: ${smallestTitle.title} with length ${smallestTitle.title.length}`);
};
