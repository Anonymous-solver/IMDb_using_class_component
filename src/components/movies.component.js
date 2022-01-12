import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import img from '../images/post.png'

class Movies extends Component {
  state = {
    movies: [
      {
		image: img,  
        rank: 1,
        title: "The Shawshank Redemption (1994)",
        imdb_rating: "9.2",
        your_rating: false,
		action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>
      },
      {
		image: img,  
        rank: 2,
        title: "The Godfather (1972)",
        imdb_rating: "9.5",
        your_rating: false,
		action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>
      },
      {
		image: img,  
        rank: 3,
        title: 'The Godfather: Part II (1974)',
        imdb_rating: "8.5",
        your_rating: false,
		action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>
      },
	  {
		image: img,  
        rank: 4,
        title: 'The Dark Knight (2008)',
        imdb_rating: "7.5",
        your_rating: false,
		action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>
      },
	  {
		image: img,  
        rank: 5,
        title: "12 Angry Men (1957)",
        imdb_rating: "6.1",
        your_rating: false,
		action: <i style = {{borderRadius: '50px', border: '1px solid white'}} className="fa fa-trash-o"></i>
      },
    ],
  };

  handleToggleRating = (movieRank) => {
	  const movies = [...this.state.movies];
	  const movie = movies.find(movie => movie.rank === movieRank)
	  movie.your_rating = !(movie.your_rating)
	  this.setState({movies})
  }

  handleRemove = (key) => {
	let movies = [...this.state.movies];
	movies = movies.filter(movie => movie.rank !== key)
	this.setState({movies})
  }

  render() {

    const columns = [
	  {
		label: "Image",
		path: "image",
		content: (movie, key) => <td> <img style={{width: '3rem'}} src={movie[key]} alt="null" /></td>,
	  },
      {
        label: "Rank",
        path: "rank",
        content: (movie, key) => <td> {movie[key]}</td>,
      },
	  {
        label: "Title",
        path: "title",
        content: (movie, key) => <td style={{color: '#136CB2'}}> {movie[key]}</td>,
      },
      {
        label: "IMDb Rating",
        path: "imdb_rating",
        content: (movie, key) => <td> <i className="fa fa-star" style={{color: "gold"}}></i>{movie[key]}</td>,
      },
      {
        label: "Your Rating",
        path: "your_rating",
        content: (movie, key) => <td> {<Rating isRated={movie[key]} rank={movie.rank} handleToggleRating={this.handleToggleRating}></Rating>}</td>,
      },
      {
        label: "Action",
        path: "action",
        content: (movie, key) => <td> <button onClick={() => this.handleRemove(movie['rank'])}>{movie[key]}</button> </td>,
      },
    ];
	
    return (
      <>
        <Table
          data={this.state.movies}
          columns={columns}
		  handleRemove={this.handleRemove}
        ></Table>
      </>
    );
  }
}

export default Movies;
