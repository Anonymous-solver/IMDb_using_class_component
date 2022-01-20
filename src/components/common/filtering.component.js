const Filtering = ({ items, selectedGenre, onClickFilter }) => {
	return (
		<div>
			<ul className="list-group">
				{items.map((item) => {
					return (
						<>
							<li
								onClick={() => onClickFilter(item)}
								className={
									item === selectedGenre
										? "list-group-item active"
										: "list-group-item"
								}
							>
								{item}
							</li>
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default Filtering;
