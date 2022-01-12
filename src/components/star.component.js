const Star = (props) => {
	return ( 
		<>
		{
			props.isRated
			? <i className="fa fa-star" style={{color: "gold"}}></i>
			: <i className="fa fa-star-o"></i>
		}
		</>
	 );
}
 
export default Star;