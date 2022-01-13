// import img from '../images/post.png'
// var movies = [
// 		{
// 		  image: img,  
// 		  rank: 1,
// 		  title: "The Shawshank Redemption (1994)",
		//   "imdb_rating": "9.5",
		//   "your_rating": false,
		//   action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>,
		//   add: <i class="fa fa-plus-circle"></i>
// 		},
// 		{
// 		  image: img,  
// 		  rank: 2,
// 		  title: "The Godfather (1972)",
// 		  imdb_rating: "9.4",
// 		  your_rating: false,
// 		  action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>,
// 		  add: <i class="fa fa-plus-circle"></i>
// 		},
// 		{
// 		  image: img,  
// 		  rank: 3,
// 		  title: 'The Godfather: Part II (1974)',
// 		  imdb_rating: "9.3",
// 		  your_rating: false,
// 		  action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>,
// 		  add: <i class="fa fa-plus-circle"></i>
// 		},
// 		{
// 		  image: img,  
// 		  rank: 4,
// 		  title: 'The Dark Knight (2008)',
// 		  imdb_rating: "9.2",
// 		  your_rating: false,
// 		  action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>,
// 		  add: <i class="fa fa-plus-circle"></i>
// 		},
// 		{
// 		  image: img,  
// 		  rank: 5,
// 		  title: "12 Angry Men (1957)",
// 		  imdb_rating: "9.1",
// 		  your_rating: false,
// 		  action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>,
// 		  add: <i class="fa fa-plus-circle"></i>
// 		},
// ]

// function getMovies() {
// 	return movies;
// }

// export default getMovies;

import movieData from './movie-data.json';

function getMovies() {
    return movieData.movies;
} 

export default getMovies;