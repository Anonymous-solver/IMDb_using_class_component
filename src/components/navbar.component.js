import React, { Component } from "react";
import logo from "../images/imdb_logo.png";

class Navbar extends Component {
	handleSearch = (event) => {
		console.log(event.target.value);
	};
	render() {
		return (
			<>
				<nav className="navbar navbar-light bg-dark">
					<a
						className="navbar-brand"
						href="/"
						style={{ color: "white" }}
					>
						<img
							style={{ marginLeft: "6px", width: "4rem" }}
							src={logo}
							alt="null"
						></img>{" "}
					</a>

					<span
						style={{
							marginTop: "18px",
							width: "92%",
							marginRight: "10px",
						}}
						className="input-group mb-3"
					>
						<div className="input-group-prepend">
							<span className="input-group-text">All</span>
						</div>
						<input
							type="text"
							onChange={this.handleSearch}
							className="form-control"
							placeholder="Search IMDb"
							aria-label="Amount (to the nearest dollar)"
						/>
						<div className="input-group-append">
							<span className="input-group-text">
								<i
									style={{ padding: "4px" }}
									className="fa fa-search"
								></i>
							</span>
						</div>
					</span>
				</nav>
			</>
		);
	}
}

export default Navbar;
