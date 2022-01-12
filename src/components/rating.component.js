import React, { Component } from 'react';
import Star from './star.component';

class Rating extends Component {
	state = {
		isHovered: false
	}
	
	handleHover = () => {
		this.setState({isHovered: true});
	}

	handleOut = () => {
		this.setState({isHovered: false})
	}

	getClassName = () => {
		const { isRated } = this.props;
		const { isHovered } = this.state;
		let className = isRated ? "fa fa-star" : "fa fa-star-o";
		className += isHovered ? "text-primary" : "";
		return className;
	}

	render() { 
		const {handleToggleRating, rank, isRated} = this.props;
		return (
			// <>
			// 	<i 
			// 		onMouseOver={this.handleHover} 
			// 	    onMouseOut={this.handleOut}
			// 		onClick={() => handleToggleRating(rank)} 
			// 		className={this.getClassName()}></i>
			// </>
			<>
				<i onMouseOver={this.handleHover} onMouseOut={this.handleOut} onClick={() => handleToggleRating(rank)}><Star isRated={isRated}></Star></i>
			</>
		);
	}
}
 
export default Rating;
///sfc