import React, { Component } from "react";
import Movies from "./components/movies.component";
import Navbar from "./components/navbar.component";
import getGenres from "./service/get-genres.service"

var searchValue = '';
class App extends Component {
    state = {
        genres: [],
		selectedGenre: "All Genres",
    }

    componentDidMount() {
		const genres = ["All Genres", ...getGenres()];
		this.setState({ ...this.state, genres });
	}

	handleSearch = (event) => {
        searchValue = event.target.value;
	};

    handleEnter = (event) => {
        if(event.key === "Enter"){
            if (searchValue.length > 1) {
				this.setState({ ...this.state, selectedGenre: searchValue });
                event.target.value = '';
			}
        }
    }

    handleClickFilter = (selectedGenre) => {
		this.setState({ ...this.state, selectedGenre });
	};

	render() {
		return (
			<>
				<Navbar handleEnter = {this.handleEnter} handleSearch={this.handleSearch}></Navbar>
				<Movies genres = {this.state.genres} selectedGenre = {this.state.selectedGenre} handleClickFilter={this.handleClickFilter}></Movies>
			</>
		);
	}
}

export default App;
