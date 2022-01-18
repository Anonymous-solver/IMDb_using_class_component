import React, { Component } from "react";
import Table from "./common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    cart: [],
    ratingCount: 0,
    sortColumn: { path: "rank", order: "asc" },
  };

  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies });
  }

  handleToggleRating = (movieRank) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie.rank === movieRank);
    if (movie.your_rating === false)
      this.setState({ ratingCount: this.state.ratingCount + 1 });
    else this.setState({ ratingCount: this.state.ratingCount - 1 });
    movie.your_rating = !movie.your_rating;
    this.setState({ movies });
  };

  handleRemove = (key) => {
    let movies = [...this.state.movies];
    movies = movies.filter((movie) => movie.rank !== key);
    this.setState({ movies });
  };

  handleAdd = (key) => {
    const cartList = [...this.state.cart];
    const cartMovie = cartList.find((movie) => movie.rank === key);
    if (cartMovie) return;
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie.rank === key);
    let cart = [...this.state.cart, movie];
    this.setState({ cart });
  };

  handleDelete = (key) => {
    const movies = [...this.state.cart];
    const movie = movies.filter((movie) => movie.rank !== key);
    this.setState({ cart: movie });
  };

  handleSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn });
  };

  sortMovies = (movies) => {
    const { sortColumn } = this.state;
    const sortedMovies = _.orderBy(
      movies,
      [sortColumn.path],
      [sortColumn.order]
    );
    return sortedMovies;
  };

  render() {
    const movies = this.sortMovies(this.state.movies);
    const columns = [
      {
        label: "Image",
        path: "image",
        content: (movie, key) => (
          <td>
            {" "}
            <img style={{ width: "3rem" }} src={movie[key]} alt="null" />
          </td>
        ),
      },
      {
        label: "Rank",
        path: "rank",
        sorting: true,
        content: (movie, key) => <td> {movie[key]}</td>,
      },
      {
        label: "Title",
        path: "title",
        sorting: true,
        content: (movie, key) => (
          <td style={{ color: "#136CB2" }}> {movie[key]}</td>
        ),
      },
      {
        label: "IMDb Rating",
        path: "imdb_rating",
        content: (movie, key) => (
          <td>
            {" "}
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            {movie[key]}
          </td>
        ),
      },
      {
        label: "Your Rating",
        path: "your_rating",
        content: (movie, key) => (
          <td>
            {" "}
            {
              <Rating
                isRated={movie[key]}
                rank={movie.rank}
                handleToggleRating={this.handleToggleRating}
              ></Rating>
            }
          </td>
        ),
      },
      {
        label: "Action",
        path: "action",
        content: (movie, key) => (
          <td>
            <button
              style={{ borderRadius: "50%", border: "1px solid white" }}
              className="fa fa-trash-o"
              onClick={() => this.handleRemove(movie["rank"])}
            >
              {movie[key]}
            </button>{" "}
          </td>
        ),
      },
      {
        label: "Add",
        path: "add",
        content: (movie, key) => (
          <td>
            {" "}
            <button
              style={{ borderRadius: "50%", border: "1px solid white" }}
              className="fa fa-plus-circle"
              onClick={() => this.handleAdd(movie["rank"])}
            >
              {movie[key]}
            </button>{" "}
          </td>
        ),
      },
    ];

    return (
      <>
        {/* <h1>count: {this.state.ratingCount}</h1> */}
        <div style={{ display: "flex" }}>
          <div
            className="list-container"
            style={{
              width: "70%",
              marginLeft: "10px",
              marginRight: "10px",
              borderRight: "1px solid gray",
              paddingRight: "10px",
            }}
          >
            <Table
              items={movies}
              columns={columns}
              handleRemove={this.handleRemove}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            ></Table>
          </div>
          <div className="cart-container">
            <h5 style={{ marginLeft: "100px", color: "gray" }}>Watch List</h5>
            <hr />
            {this.state.cart.map((movie) => (
              <li style={{ color: "#136CB2" }}>
                {movie.title}{" "}
                <button
                  style={{ borderRadius: "50%", border: "1px solid white" }}
                  onClick={() => this.handleDelete(movie["rank"])}
                  className="fa fa-trash-o"
                ></button>
                <br />
                <br />{" "}
              </li>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
